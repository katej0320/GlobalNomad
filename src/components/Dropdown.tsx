'use client';

import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // 리액트 아이콘(화살표)
import styles from './Dropdown.module.css';
import useClickOutside from '@/utils/useClickOutside';

type DropdownProps<T> = {
  options: T[];
  selected: T | null;
  onChange: (value: T) => void;
  className?: string;
  dropdownClassName?: string;
  toggleClassName?: string;
  menuClassName?: string;
  menuItemClassName?: string;
};

export default function Dropdown<T extends { id: number; title: string }>({
  options,
  selected,
  onChange,
  className,
  dropdownClassName,
  toggleClassName,
  menuClassName,
  menuItemClassName,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside({ ref: dropdownRef, setter: setIsOpen });

  return (
    <div
      className={`${styles.dropdown} ${className} ${dropdownClassName}`}
      ref={dropdownRef}
    >
      <button
        className={`${styles.toggleBtn} ${toggleClassName}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected?.title}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <ul className={`${styles.menu} ${menuClassName}`}>
          {options.map((option) => (
            <li
              key={option.id} // 고유 ID 사용
              className={`${styles.menuItem} ${menuItemClassName}`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
