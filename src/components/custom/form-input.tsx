"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  FormInputProps,
  InputModeProps,
  SelectOption,
} from "@/types/form-input";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Figma: Input with label — gap 6px; label Body/2; field Body/1; border 0.5px #94A3B8; radius 8px */
const formFieldRootClass = "flex w-full flex-col items-stretch gap-1.5";

const formFieldLabelClass =
  "inline-flex flex-row items-start gap-0.5 p-0 font-normal shadow-none select-none " +
  "[font-family:var(--font-outfit),sans-serif] text-sm leading-[18px] tracking-[0.016em] text-[#334155]";

const formFieldAsteriskClass =
  "[font-family:var(--font-outfit),sans-serif] text-sm font-normal leading-[18px] tracking-[0.016em] text-[#B01E1E]";

const formFieldControlClass =
  "h-9 w-full min-w-0 rounded-lg border-[0.5px] border-[#94A3B8] bg-white px-3 py-2 text-base font-normal leading-5 tracking-[0.017em] md:text-base md:leading-5 " +
  "text-[#0D2025] shadow-none outline-none transition-[color,box-shadow,border-color] " +
  "[font-family:var(--font-outfit),sans-serif] placeholder:text-[#717680] " +
  "focus-visible:border-[#5A9CB6] focus-visible:ring-2 focus-visible:ring-[#5A9CB6]/25 " +
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 " +
  "aria-invalid:border-[#B01E1E] aria-invalid:ring-2 aria-invalid:ring-[#B01E1E]/20";

const formFieldHintClass =
  "[font-family:var(--font-outfit),sans-serif] text-sm font-normal leading-[18px] tracking-[0.016em] text-[#535862]";

const formFieldErrorClass =
  "[font-family:var(--font-outfit),sans-serif] text-sm font-normal leading-[18px] text-[#B01E1E]";

function FormInput(props: FormInputProps) {
  const {
    id,
    name,
    label,
    required,
    placeholder,
    description,
    error,
    className,
    icon,
  } = props;

  const [internalError, setInternalError] = React.useState<string>("");
  const [showPassword, setShowPassword] = React.useState(false);

  const fieldId = React.useId();
  const inputId = id ?? fieldId;
  const errorId = `${inputId}-error`;
  const descriptionId = `${inputId}-description`;
  const hasError = Boolean(error || internalError);
  const displayError = error || internalError;

  const runEmailValidation = (value: string, inputProps: InputModeProps) => {
    const isEmailField =
      inputProps.type === "email" || inputProps.validateEmail;
    if (!isEmailField) return;

    const trimmed = value.trim();
    if (!trimmed) {
      if (required) {
        setInternalError("Email is required.");
      } else {
        setInternalError("");
      }
      return;
    }

    if (!EMAIL_REGEX.test(trimmed)) {
      setInternalError("Please enter a valid email address.");
      return;
    }

    setInternalError("");
  };

  if (props.mode === "select") {
    return (
      <div className={cn(formFieldRootClass, className)}>
        <Label htmlFor={inputId} className={formFieldLabelClass}>
          {label}
          {required ? <span className={formFieldAsteriskClass}>*</span> : null}
        </Label>
        <Select
          value={props.value}
          defaultValue={props.defaultValue}
          onValueChange={props.onValueChange}
          disabled={props.disabled}
          name={name}
        >
          <SelectTrigger
            id={inputId}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : description ? descriptionId : undefined
            }
            className={cn(
              formFieldControlClass,
              "flex w-full items-center justify-between gap-2 whitespace-nowrap md:text-base",
              "data-placeholder:text-[#717680]",
            )}
          >
            <SelectValue placeholder={placeholder ?? "Select an option"} />
          </SelectTrigger>
          <SelectContent>
            {props.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {description && !displayError ? (
          <p id={descriptionId} className={formFieldHintClass}>
            {description}
          </p>
        ) : null}
        {displayError ? (
          <p id={errorId} className={formFieldErrorClass} role="alert">
            {displayError}
          </p>
        ) : null}
      </div>
    );
  }

  const inputProps = (({
    mode: _mode,
    label: _label,
    validateEmail: _validateEmail,
    icon: _icon,
    description: _description,
    error: _error,
    ...rest
  }: InputModeProps) => {
    void _mode;
    void _label;
    void _validateEmail;
    void _icon;
    void _description;
    void _error;
    return rest;
  })(props);

  return (
    <div className={cn(formFieldRootClass, className)}>
      <Label htmlFor={inputId} className={formFieldLabelClass}>
        {label}
        {required ? <span className={formFieldAsteriskClass}>*</span> : null}
      </Label>

      <div className="relative flex w-full flex-row items-center">
        {icon ? (
          <span className="pointer-events-none absolute top-1/2 left-3 flex size-5 -translate-y-1/2 items-center justify-center text-[#717680] [&_svg]:size-5">
            {icon}
          </span>
        ) : null}

        <Input
          {...inputProps}
          id={inputId}
          name={name}
          required={required}
          type={props.type === "password" && showPassword ? "text" : props.type}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={
            hasError ? errorId : description ? descriptionId : undefined
          }
          className={cn(
            formFieldControlClass,
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#0D2025]",
            icon ? "pl-10" : "",
            props.type === "password" ? "pr-10" : "",
            inputProps.className,
          )}
          onBlur={(event) => {
            inputProps.onBlur?.(event);
            runEmailValidation(event.currentTarget.value, props);
          }}
        />

        {props.type === "password" ? (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex size-9 items-center justify-center text-[#717680] transition-colors hover:text-[#0D2025]"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="size-5" />
            ) : (
              <Eye className="size-5" />
            )}
          </button>
        ) : null}
      </div>

      {description && !displayError ? (
        <p id={descriptionId} className={formFieldHintClass}>
          {description}
        </p>
      ) : null}

      {displayError ? (
        <p id={errorId} className={formFieldErrorClass} role="alert">
          {displayError}
        </p>
      ) : null}
    </div>
  );
}

export { FormInput };
export type { FormInputProps, SelectOption };
