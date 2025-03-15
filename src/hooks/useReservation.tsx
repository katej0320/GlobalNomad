import { useQuery } from '@tanstack/react-query';
import instance from '@/lib/api';
import { Reservation } from '@/lib/types';

// API 요청 함수
const fetchReservation = async (status: string): Promise<Reservation[]> => {
  try {
<<<<<<< HEAD
    const response = await instance.get(
      `/my-reservations?${status && `status=${status}`}`,
    );
    // console.log('API 응답 데이터:', response.data); // 응답 데이터 확인
=======
    const response = await instance.get('/my-reservations');
    console.log('API 응답 데이터:', response.data); // 응답 데이터 확인
>>>>>>> 98c7332b (feat: 데이터 출력 확인)
    return response.data.reservations;
  } catch (error: unknown) {
    console.error('API 요청 실패:', error);
    throw new Error('데이터를 불러오는 데 실패했습니다.');
  }
};

// React Query 훅
const useReservation = (status: string) => {
  return useQuery<Reservation[]>({
<<<<<<< HEAD
    queryKey: ['reservation', status],
    queryFn: () => fetchReservation(status),
=======
    queryKey: ['reservation'],
    queryFn: fetchReservation,
>>>>>>> 98c7332b (feat: 데이터 출력 확인)
  });
};

export default useReservation;

