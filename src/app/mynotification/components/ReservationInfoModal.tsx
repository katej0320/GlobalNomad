'use client';

import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Dropdown.module.css';
import useClickOutside from '@/utils/useClickOutside';

type DropdownProps<T extends { value: string | number; label: string }> = {
  options: T[];
  selectedValue: T['value'] | null;
  onChange: (value: T['value']) => void;
  dropdownClassName?: string;
  toggleClassName?: string;
  menuClassName?: string;
  menuItemClassName?: string;
};

export default function Dropdown<
  T extends { value: string | number; label: string },
>({
  options,
  selectedValue,
  onChange,
  dropdownClassName = '',
  toggleClassName = '',
  menuClassName = '',
  menuItemClassName = '',
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside({ ref: dropdownRef, setter: setIsOpen });

  const selectedOption = options.find(
    (option) => option.value === selectedValue,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement | null>(null);

  // 모달 바깥 클릭 시 onClose 실행
  useClickOutside({
    ref: modalRef,
    setter: () => onClose(),
  });

  const modalRef = useRef<HTMLDivElement | null>(null);

  // 모달 바깥 클릭 시 onClose 실행
  useClickOutside({
    ref: modalRef,
    setter: () => onClose(),
  });

  // ReservationInfoModal.tsx

  const fetchSchedules = async () => {
    setLoading(true);
    try {
      const response = await instance.get(
        `/my-activities/${activityId}/reserved-schedule?date=${date}`,
      );
      setScheduleList(response.data);

      if (response.data.length > 0) {
        setSelectedScheduleId(response.data[0].scheduleId);
      }
    } catch (error) {
      setError(`에러 발생: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, [activityId, date]);

  const totalPending = scheduleList.reduce(
    (sum, schedule) => sum + schedule.count.pending,
    0,
  );
  const totalConfirmed = scheduleList.reduce(
    (sum, schedule) => sum + schedule.count.confirmed,
    0,
  );
  const totalDeclined = scheduleList.reduce(
    (sum, schedule) => sum + schedule.count.declined,
    0,
  );

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className={`${styles.dropdown} ${dropdownClassName}`}
      ref={dropdownRef}
    >
      <button
        className={`${styles.toggleBtn} ${toggleClassName}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption?.label ?? '선택'}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <ul className={`${styles.menu} ${menuClassName}`}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.menuItem} ${menuItemClassName}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
