'use client';

import { useEffect, useState } from 'react';

export const useStatusFilter = () => {
  const [value, setValue] = useState<string | null>('전체');
  const [status, setStatus] = useState<string>('');

  const options = [
    { value: '전체', label: '전체' },
    { value: '예약 신청', label: '예약 신청' },
    { value: '예약 취소', label: '예약 취소' },
    { value: '예약 승인', label: '예약 승인' },
    { value: '예약 거절', label: '예약 거절' },
    { value: '체험 완료', label: '체험 완료' },
  ];

  useEffect(() => {
    const newStatus =
      value === '전체'
        ? ''
        : value === '예약 신청'
        ? 'pending'
        : value === '예약 취소'
        ? 'canceled'
        : value === '예약 승인'
        ? 'confirmed'
        : value === '예약 거절'
        ? 'declined'
        : value === '체험 완료'
        ? 'completed'
        : status;

    if (newStatus !== status) {
      setStatus(newStatus);
    }
  }, [value, status]);

  return { value, setValue, status, options };
};
