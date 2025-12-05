"use client";

import { useId } from "react";
import { IInput } from "@/interfaces/components/IInput";
import "@/styles/components/input.scss";

export default function Input({
  id,
  label = "Label",
  placeholder = "",
  type = "text",
}: IInput) {
  const generatedId = useId();
  const inputId = id ?? `input-${generatedId}`;

  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={inputId}>
        {label}
      </label>
      <input id={inputId} className="input-base" placeholder={placeholder} type={type} />
    </div>
  );
}
