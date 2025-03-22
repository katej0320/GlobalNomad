'use client';

import { useMutation } from '@tanstack/react-query';
import instance from '@/lib/api';
import { Activities } from '@/lib/types';

// API 요청
const postMyActivity = async (formData:FormData): Promise<Activities[]> => {
  try {
    const response = await instance.post('/activities' , formData, {
      headers: {
        'Content-Type' : 'multipart/formData',
      },
    });
    console.log('API 응답 데이터:', response.data);
    return response.data;
  } catch (error: unknown) {
    console.error('API 요청 실패:', error);
    throw new Error('데이터를 불러오는 데 실패했습니다.');
  }
};

// React Query 훅
const usePostMyActivities = () => {
  return useMutation({
    mutationFn: postMyActivity
  });
};

export default usePostMyActivities;
