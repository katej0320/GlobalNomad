'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from './useAuthStore';
import { useEffect } from 'react';

export const userAuthRedirect = () => {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) {
      router.push('signin'); // 유저 데이터가 없으면 로그인 페이지로 이동
    }
  }, [user, router]);
};
