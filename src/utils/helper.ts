import { CURRENCY_LOCALES } from "@/constants/settings";

type CurrencyType = keyof typeof CURRENCY_LOCALES;
export function formatCurrency(amount: number, currency: CurrencyType = "NGN") {
  const locale = CURRENCY_LOCALES[currency];
  const options: Intl.NumberFormatOptions = { currency, style: "currency" };

  return new Intl.NumberFormat(locale, options).format(amount);
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}

export function formatNumber(num: number) {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatTime(dateString: string) {
  return new Date(dateString).toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
}
