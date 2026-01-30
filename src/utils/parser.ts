import { message } from "antd";
import { AxiosError } from "axios";

/* ---------------------------------------------
 * Type guards
 * ------------------------------------------- */

export function isAxiosError(err: unknown): err is AxiosError {
  return (
    err !== null &&
    typeof err === "object" &&
    "isAxiosError" in err &&
    (err as AxiosError).isAxiosError === true
  );
}

/* ---------------------------------------------
 * Constants
 * ------------------------------------------- */

const EXCLUDED_KEYS = new Set([
  "data",
  "detail",
  "non_field_errors",
  // others needed here
]);

/* ---------------------------------------------
 * Helpers
 * ------------------------------------------- */

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/* ---------------------------------------------
 * Extractors
 * ------------------------------------------- */

function extractDjangoErrors(data: unknown) {
  if (!data || typeof data !== "object") return [];

  const messages: string[] = [];

  for (const [key, value] of Object.entries(data)) {
    if (EXCLUDED_KEYS.has(key)) {
      if (typeof value === "string") messages.push(value);
      else if (Array.isArray(value)) messages.push(...value.map(String));
      continue;
    }

    const fieldName = capitalize(key.replace(/_/g, " "));

    if (Array.isArray(value))
      value.forEach((msg) => messages.push(`${fieldName}: ${msg}`));
    else if (typeof value === "string") messages.push(`${fieldName}: ${value}`);
  }

  return messages;
}

function extractNestJSErrors(data: unknown) {
  if (!data || typeof data !== "object") return [];

  const record = data as Record<string, unknown>;

  if (typeof record.message === "string") return [record.message];
  if (Array.isArray(record.message)) return record.message.map(String);

  return [];
}

function extractAxiosErrors(err: AxiosError) {
  if (!err.response) return ["Network error. Please check your connection."];

  const { data } = err.response;

  if (typeof data === "string") return [data];

  if (typeof data === "object" && data !== null) {
    const record = data as Record<string, unknown>;

    // NestJS check
    if ("statusCode" in record && "message" in record)
      return extractNestJSErrors(record);

    // Fallback
    return extractDjangoErrors(data);
  }

  return ["An unexpected server error occurred."];
}

function extractGenericErrors(err: unknown) {
  if (err instanceof Error) return [err.message];
  if (typeof err === "string") return [err];

  return ["Something went wrong."];
}

/* ---------------------------------------------
 * Public API
 * ------------------------------------------- */

export function handleError(err: unknown) {
  const messages = isAxiosError(err)
    ? extractAxiosErrors(err)
    : extractGenericErrors(err);

  Array.from(new Set(messages)).forEach((msg) => message.error(msg));
}
