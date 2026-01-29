"use client";
import React from "react";
import { motion } from "framer-motion";
import { useDebounce } from "hooks/debounce.hook";
import { MySearchForm } from "../forms/search.form";
import { Button, Select, SelectProps, DatePicker } from "antd";

export { type SelectProps } from "antd";

interface MyFilterPrimaryProps {
  className?: string;
  groups?: SelectProps[];
  range?(from?: string, to?: string): void;
  search: {
    value: string;
    placeholder?: string;
    onSubmit?: () => void;
    onChange: (q: string) => void;
  };
}

export function MyFilterPrimary(props: MyFilterPrimaryProps) {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState(props.search.value);

  const search = useDebounce(q, 400);

  React.useEffect(() => {
    if (q !== props.search.value) props.search.onChange(search);
  }, [q, search, props.search.onChange, props.search]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex gap-6 py-4 bg-white rounded-md flex-wrap items-center justify-between"
    >
      <MySearchForm
        type="search"
        {...props.search}
        value={q}
        onChange={(ev) => setQ(ev.target.value)}
        className="px-3 py-2 flex-1 basis-80! lg:flex-none rounded-full bg-gray-100"
      />

      <div className="flex gap-2 flex-1 basis-80 flex-col md:flex-row flex-wrap md:justify-end">
        {props.groups?.map((group, index) => (
          <div key={index} className={`${group.className ?? ""} w-full md:w-60`}>
            <Select
              {...group}
              showSearch
              allowClear
              size={"middle"}
              placeholder={group.placeholder ?? "Select option"}
            />
          </div>
        ))}
      </div>

      {props.range && (
        <div className="ml-auto relative">
          <Button
            color={"blue"}
            type={"default"}
            variant={"outlined"}
            onClick={() => setOpen(!open)}
            icon={<i className="fa-solid fa-calendar-days" />}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={
              open
                ? { pointerEvents: "all", opacity: 1, y: 0 }
                : { pointerEvents: "none", opacity: 0, y: 20 }
            }
            className="z-50 top-10 right-0 absolute bg-white rounded-md shadow-md"
          >
            <DatePicker.RangePicker
              allowClear
              style={{ width: "240px" }}
              onChange={(_, dateStrings) => {
                setOpen(false);
                props.range?.(dateStrings?.[0], dateStrings?.[1]);
              }}
            />
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
