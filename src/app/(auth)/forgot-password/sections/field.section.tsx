"use client";

// Internal
import { MyInputForm } from "@/components/forms/input.form";

export function FieldSection() {
  return (
    <div className="flex flex-col gap-4">
      <MyInputForm
        name="email"
        label="Email Address"
        placeholder="Enter your registered email"
      />
    </div>
  );
}
