'use client';

import React from 'react';
import CustomButton from '@/components/CustomButton';
import styles from './Search.module.css';

interface SearchProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

export default function Search({
  inputValue,
  onInputChange,
  onSearch,
  onKeyPress,
}: SearchProps) {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <h1>무엇을 체험하고 싶으신가요?</h1>
        <div className={styles.inputContainer}>
          <input
            type='text'
            className={styles.searchInput}
            value={inputValue}
            onChange={onInputChange}
            onKeyDown={onKeyPress}
            placeholder='내가 원하는 체험은 ?'
          />
          <CustomButton
            onClick={onSearch}
            className={styles.searchBtn}
            fontSize='md'
            variant='black'
          >
            검색하기
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
