'use client';
import { useState } from "react";
import type * as React from "react";

export type TabItem = {
  id: string;
  label: string;
  content: any;
};

export type TabsProps = {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
  sidebarWidth?: number;
};

export function Tabs({ tabs, defaultTabId, className, orientation = "horizontal", sidebarWidth = 220 }: TabsProps): any {
  const initialId = defaultTabId ?? (tabs.length > 0 ? tabs[0].id : "");
  const [activeId, setActiveId] = useState<string>(initialId);

  if (!tabs || tabs.length === 0) {
    return null;
  }

  if (orientation === "vertical") {
    return (
      <div className={className} style={{ display: "flex", width: "100%", gap: 16 }}>
        <div
          style={{
            width: sidebarWidth,
            minWidth: sidebarWidth,
            borderRight: "1px solid #e5e7eb",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                style={{
                  textAlign: "left",
                  padding: "8px 10px",
                  borderRadius: 6,
                  border: "1px solid transparent",
                  background: isActive ? "#f3f4f6" : "transparent",
                  color: isActive ? "#111827" : "#6b7280",
                  cursor: "pointer",
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div style={{ flex: 1, padding: 12 }}>
          {tabs.map((tab) => (tab.id === activeId ? <div key={tab.id}>{tab.content}</div> : null))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div style={{ display: "flex", gap: 8, borderBottom: "1px solid #e5e7eb" }}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              style={{
                padding: "8px 12px",
                border: "none",
                background: "transparent",
                borderBottom: isActive ? "2px solid black" : "2px solid transparent",
                color: isActive ? "#111827" : "#6b7280",
                cursor: "pointer",
                fontWeight: isActive ? 600 : 500,
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div style={{ paddingTop: 12 }}>
        {tabs.map((tab) => (tab.id === activeId ? <div key={tab.id}>{tab.content}</div> : null))}
      </div>
    </div>
  );
}
