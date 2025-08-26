"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface GummySelectProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function GummySelect({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
}: GummySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="gummy-input w-full px-3 py-2 text-sm rounded-md flex items-center cursor-pointer"
      >
        <span
          className={cn(
            selectedValue ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {selectedValue || placeholder}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 rounded-md z-50 overflow-hidden gummy-dropdown-solid transition-opacity duration-75 opacity-100">
          <div className="max-h-60 overflow-y-auto gummy-dropdown-solid">
            {options.map((option, index) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={cn(
                  "w-full px-3 py-2 text-sm text-left bg-transparent text-foreground gummy-menu-item",
                  selectedValue === option && "gummy-menu-item--active",
                  index === 0 && "rounded-t-md",
                  index === options.length - 1 && "rounded-b-md"
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
