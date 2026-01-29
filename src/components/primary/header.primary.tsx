"use client";

interface MyHeaderPrimaryProps {
  disabled?: boolean;
}

export function MyHeaderPrimary(props: MyHeaderPrimaryProps) {
  return <select disabled={props.disabled}></select>;
}
