"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react"; // 리액트 아이콘(아래화살표)
import styles from "./Dropdown.module.css";

type DropdownProps<T> = {
  options: T[];
  selected: T;
  onChange: (value: T) => void;
};

export default function Dropdown<T extends string | number>({
  options,
  selected,
  onChange,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 드롭다운 바깥 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        {/* 아래화살표 - 리액트아이콘 사용 */}
        <ChevronDown size={20} />
      </button>

      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li
              key={option.toString()}
              className={styles.menuItem}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
