"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "../lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = (props: any): JSX.Element => {
  const { className, ...rest } = props ?? {};
  return (
    <AccordionPrimitive.Item className={cn("border-b", className)} {...rest} />
  );
};

export const AccordionTrigger = (props: any): JSX.Element => {
  const { className, children, ...rest } = props ?? {};
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...rest}
      >
        {children}
        {React.createElement(ChevronDown as any, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

export const AccordionContent = (props: any): JSX.Element => {
  const { className, children, ...rest } = props ?? {};
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...rest}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
};
