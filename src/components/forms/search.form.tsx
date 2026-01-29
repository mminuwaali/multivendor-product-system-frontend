"use client";

// External
import React from "react";
import { motion } from "framer-motion";
import { Button, Input, InputProps } from "antd";
import { SearchOutlined, SendOutlined } from "@ant-design/icons";

interface MySearchFormProps extends InputProps {
  onSubmit?: () => void;
  classNameInput?: string;
  classNameButton?: string;
}

export function MySearchForm(props: MySearchFormProps) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    props.onSubmit?.();
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`${props.className ?? ""} h-8 p-0 pl-2 flex basis-80 gap-1 items-center`}
    >
      <SearchOutlined className="text-gray-400" />

      <Input
        {...props}
        placeholder={props.placeholder ?? "Search for..."}
        className={`${props.classNameInput ?? ""} p-0 h-full flex-1 text-sm`}
        style={{ boxShadow: "none", border: "none", background: "transparent" }}
      />

      {props.onSubmit && (
        <Button
          type="text"
          htmlType="submit"
          style={{ borderRadius: 20 }}
          icon={<SendOutlined className="text-lg" />}
          className="p-1 text-blue-500 hover:text-blue-700 focus:outline-none rounded-full"
        />
      )}
    </motion.form>
  );
}
