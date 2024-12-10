"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const [activeItem, setActiveItem] = useState("Usage");
  const router = useRouter();

  const items = ["Dashboard", "members", "Settings"];

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    const route = item.toLowerCase();
    router.push(`/${route === "dashboard" ? "" : route}`);
  };

  return (
    <nav className="border-b overflow-x-auto">
      <div className="flex min-w-max px-4 md:px-6">
        {items.map((item) => (
          <div className="relative " key={item}>
            <button
              onClick={() => handleItemClick(item)}
              className={` whitespace-nowrap py-2 text-sm transition-colors hover:bg-neutral-100 rounded-lg mb-2  ${
                item === activeItem
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="px-3">{item}</span>
            </button>
            {item === activeItem && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] mt-2 bg-foreground" />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
