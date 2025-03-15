'use client';

import { useState, useEffect } from 'react';
import instance from '@/lib/api';
import { User } from '@/lib/types';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';

export default function MyPage() {
  const [myProfile, setMyProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMyProfile = async () => {
    try {
      const response = await instance.get<User>('/users/me');
      setMyProfile(response.data);
    } catch (error) {
      console.log('프로필 데이터를 가져오는 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyProfile();
  }, []);

  if (loading) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>내 정보</h1>
      <CustomButton fontSize='sm' variant='black'>
        수정하기
      </CustomButton>

      {myProfile?.profileImageUrl && (
        <Image
          src={myProfile.profileImageUrl}
          width={160}
          height={160}
          alt='프로필 이미지'
        />
      )}
      <p>닉네임: {myProfile?.nickname}</p>
      <p>이메일: {myProfile?.email}</p>
    </div>
  );
}
