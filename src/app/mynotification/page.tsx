'use client';

import { useEffect, useState } from 'react';
import Dropdown from '@/components/Dropdown';
import MyNotificationCalendar from './components/Calendar';
import useMyActivities from '@/hooks/query/useMyActivities';
import useScheduleByMonth from '@/hooks/query/useScheduleByMonth';
import ProfileCard from '@/components/ProfileCard/ProfileCard';
import Footer from '@/components/footer/Footer';
import styles from './MyNotification.module.css';

type Activity = {
  id: number;
  title: string;
};

export default function MyNotification() {
  const {
    data: activities = [],
    isLoading,
    error,
  } = useMyActivities() as {
    data: Activity[];
    isLoading: boolean;
    error: unknown;
  };
  const [selectedActivity, setSelectedActivity] = useState<{
    id: number;
    title: string;
  } | null>(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(
    String(new Date().getMonth() + 1).padStart(2, '0'),
  );

  useEffect(() => {
    if (activities?.length) {
      setSelectedActivity(activities[0]); // 기본 선택 활동 설정
    }
  }, [activities]);

  // API 요청
  const {
    data: schedule = [],
    isLoading: isScheduleLoading,
    error: scheduleError,
  } = useScheduleByMonth(
    selectedActivity?.id ?? null,
    currentYear,
    currentMonth,
  );

  if (isLoading || isScheduleLoading) return <p>로딩 중...</p>;

  const errorMessage =
    (error instanceof Error ? error.message : '') ||
    (scheduleError instanceof Error ? scheduleError.message : '');

  if (errorMessage) return <p>에러 발생: {errorMessage}</p>;

  // 캘린더에서 연/월이 변경될 때 전송
  const handleMonthChange = (activeStartDate: Date) => {
    setCurrentYear(activeStartDate.getFullYear());
    setCurrentMonth(String(activeStartDate.getMonth() + 1).padStart(2, '0'));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <ProfileCard activeTab='mynotification' />
        </div>

        <div className={styles.container}>
          <p className={styles.title}>예약 현황</p>
          <p className={styles.dropdownTitle}>체험명 선택</p>

          <Dropdown
            dropdownClassName={styles.dropdownList ?? ''}
            toggleClassName={styles.dropdownList}
            menuClassName={styles.dropdownList}
            menuItemClassName={styles.dropdownList}
            options={
              activities?.map((activity) => ({
                value: activity.id,
                label: activity.title,
              })) ?? []
            }
            selectedValue={selectedActivity?.id ?? null}
            onChange={(value) => {
              const selected =
                activities?.find((activity) => activity.id === value) || null;
              setSelectedActivity(selected);
            }}
          />

          {selectedActivity && (
            <MyNotificationCalendar
              schedule={schedule}
              onMonthChange={handleMonthChange}
              activityId={selectedActivity.id}
            />
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
