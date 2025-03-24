'use client';

import { useState, useEffect } from 'react';
import axios from '@/lib/api';
import { ActivitiesArray } from '@/lib/types';
import CustomButton from '@/components/CustomButton';
import PopularActivities from './landingComponents/PopulorActivities';
import ActivitiesList from './landingComponents/ActivitiesList';
import Pagination from './landingComponents/Pagination';
import Category from './landingComponents/Category';
import styles from './landingComponents/LandingPage.module.css';

// params 타입 정의
interface ActivitiesParams {
  method: string;
  page: number;
  size: number;
  sort: string | null;
  category?: string | null;
  keyword?: string | null; // 검색어 필드 추가
}

export default function Home() {
  const [size, setSize] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activities, setActivities] = useState<ActivitiesArray>([]);
  const [popularActivities, setPopularActivities] = useState<ActivitiesArray>(
    [],
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string | null>('latest');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string>(''); // 검색어 상태 추가
  const [searchMode, setSearchMode] = useState(false); // 검색 모드 활성화 여부

  const categories = [
    '문화 · 예술',
    '식음료',
    '스포츠',
    '투어',
    '관광',
    '웰빙',
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateSize = () => {
        if (window.innerWidth <= 450) {
          setSize(4);
        } else if (window.innerWidth <= 768) {
          setSize(9);
        } else {
          setSize(8);
        }
      };

      updateSize(); // 초기 실행
      window.addEventListener('resize', updateSize);

      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);

  // 인기체험 API 호출
  useEffect(() => {
    const fetchPopularActivities = async () => {
      try {
        const response = await axios.get('/activities', {
          params: { method: 'offset', page: 1, size: 9 },
        });

        setPopularActivities(response.data.activities);
      } catch (error) {
        console.error('인기 체험 데이터 가져오기 실패:', error);
      }
    };

    fetchPopularActivities();
  }, []);

  // 체험 리스트 API 호출 (검색어가 없을 때에도 호출)
  useEffect(() => {
    const fetchActivities = async () => {
      setIsLoading(true);
      try {
        const params: ActivitiesParams = {
          method: 'offset',
          page: currentPage,
          size: size,
          sort: selectedSort,
        };

        if (selectedCategory) {
          params['category'] = selectedCategory; // 카테고리 필터링 추가
        }

        if (keyword) {
          params['keyword'] = keyword; // 검색어 필터링 추가
        }

        const response = await axios.get('/activities', { params });

        setActivities(response.data.activities);
        setTotalPages(Math.ceil(response.data.totalCount / size)); // 전체 페이지 수 계산
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
        setError('데이터를 가져오는 데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivities(); // 초기 렌더링 시에도 호출되도록
  }, [size, currentPage, selectedSort, selectedCategory, keyword]);

  // 페이지 변경
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 카테고리 클릭 시 필터링
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // 같은 카테고리 클릭 시 필터링 해제
    } else {
      setSelectedCategory(category); // 카테고리 선택 시 필터링
    }
  };

  // 검색 버튼 클릭 시 검색 실행
  const handleSearch = () => {
    if (keyword === '') {
      setSearchMode(false); // 검색어가 비어있을 때는 초기 상태로 복귀
      setSelectedCategory(null); // 카테고리 필터 해제
      setCurrentPage(1); // 첫 페이지로 초기화
    } else {
      setSearchMode(true); // 검색 모드 활성화
      setCurrentPage(1); // 첫 페이지로 초기화
    }
  };

  // 검색어 입력 변경
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  // Enter 키 입력 시 검색 실행
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className={styles.imgContainer}>
        <div className={styles.textContainer}>
          <p className={styles.text1}>
            함께 배우면 즐거운
            <br /> 스트릿 댄스
          </p>
          <p className={styles.text2}>1월의 인기체험 BEST</p>
        </div>

        {/* 검색 기능 */}
        <div className={styles.container}>
          <div className={styles.searchContainer}>
            <h1>무엇을 체험하고 싶으신가요?</h1>
            <div className={styles.inputContainer}>
              <input
                type='text'
                className={styles.searchInput}
                value={keyword}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress} // Enter 키 이벤트 추가
                placeholder='내가 원하는 체험은'
              />
              <CustomButton
                onClick={handleSearch}
                className={styles.searchBtn}
                fontSize='md'
                variant='black'
              >
                검색하기
              </CustomButton>
            </div>
          </div>
        </div>
      </div>

      {/* 검색 모드일 때 */}
      {searchMode ? (
        <div className={styles.searchResult}>
          <h2 className={styles.title}>
            &quot;{keyword}&quot;
            <span>으로 검색한 결과입니다.</span>
          </h2>
          <p className={styles.resultCount}>총 {activities.length}개의 결과</p>
        </div>
      ) : (
        <>
          {/* 인기체험 리스트 */}
          <PopularActivities activities={popularActivities} />
          {/* 카테고리 */}
          <Category
            categories={categories}
            selectedCategory={selectedCategory}
            selectedSort={selectedSort}
            onCategoryClick={handleCategoryClick}
            onSortChange={setSelectedSort}
          />
          <h2 className={styles.title}>
            {selectedCategory ? selectedCategory : '🛼 모든 체험'}
          </h2>
        </>
      )}

      {/* 체험 리스트 */}
      <ActivitiesList
        activities={activities}
        isLoading={isLoading}
        error={error}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={handlePageChange}
      />
    </>
  );
}
