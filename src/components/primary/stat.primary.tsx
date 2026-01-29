"use client";

// Framework

export interface MyStatProps {
  label: string;
  value: string;
  className?: string;
}

export function MyStat(props: MyStatProps) {
  return (
    <div className={`flex flex-col ${props.className ?? ""}`}>
      <span className="text-2xl font-black text-slate-800 dark:text-white">
        {props.value}
      </span>
      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
        {props.label}
      </span>
    </div>
  );
}
