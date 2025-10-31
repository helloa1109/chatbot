"use client";

import {Tabs} from '@chatbot/ui'
import {Button } from "@chatbot/ui/shadcnui";

export default function Navbar() {
  return (
    <div
      className= "flex h-screen bg-gray-50 dark:bg-gray-900"
    >
      {/* 좌측 사이드바 */}
      <aside className="w-64 flex flex-col justify-between border-r border-gray-200 dark:border-gray-700 p-4">
        {/* 상단 Tabs */}
        <div className="space-y-4">
          <Tabs
            tabs={[
              {
                id: "tab-1",
                label: "Overview",
                content: <p className="text-zinc-700 dark:text-zinc-300">This is the Overview tab.</p>,
              },
              {
                id: "tab-2",
                label: "Details",
                content: <p className="text-zinc-700 dark:text-zinc-300">Here are some details.</p>,
              },
              {
                id: "tab-3",
                label: "Settings",
                content: <p className="text-zinc-700 dark:text-zinc-300">Adjust your settings here.</p>,
              },
            ]}
            defaultTabId="tab-1"
            orientation="vertical"
            className="flex flex-col space-y-2"
          />
        </div>

        
        <div className="flex flex-col gap-2 mt-4">
          <Button variant="outline" className="w-full">
            로그인
          </Button>
          <Button className="w-full">
            회원가입
          </Button>
        </div>
      </aside>

    </div>
  );
}
