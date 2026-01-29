"use client";
import { Input, InputProps } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorMessage, Field, FieldProps } from "formik";

interface MyInputFormProps extends InputProps {
  name: string;
  label: string;
  loading?: boolean;
  classNameLabel?: string;
  classNameInput?: string;
  classNameWrapper?: string;
  classNameContainer?: string;
}

export function MyInputForm(props: MyInputFormProps) {
  const Element = props.type === "password" ? Input.Password : Input;

  return (
    <motion.div
      className={`flex gap-1.5 flex-col ${props.classNameContainer ?? ""}`}
    >
      <label
        htmlFor={props.name}
        className={`text-sm font-bold text-slate-700 dark:text-slate-300 transition-colors ${props.classNameLabel ?? ""}`}
      >
        {props.label}
      </label>

      <Field name={props.name}>
        {(fieldProps: FieldProps) => (
          <motion.div className={`px-1 flex gap-2 ${props.classNameWrapper}`}>
            <Element
              {...props}
              {...fieldProps.field}
              id={fieldProps.field.name}
              className={`rounded-xl border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm focus:border-primary dark:focus:border-primary transition-all ${props.classNameInput ?? "h-12"}`}
            />
          </motion.div>
        )}
      </Field>

      <AnimatePresence>
        <ErrorMessage name={props.name}>
          {(err) => (
            <motion.span
              key="error"
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.2 }}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -3 }}
              className="text-red-500 text-xs font-semibold"
            >
              {err}
            </motion.span>
          )}
        </ErrorMessage>
      </AnimatePresence>
    </motion.div>
  );
}
