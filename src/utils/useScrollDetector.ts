import { useEffect } from 'react';

<<<<<<< HEAD
export const useScrollDetector = (callback: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
=======
const useScrollDetector = (callback: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
>>>>>>> 888ae99a (feat: 무한스크롤 기능 구현 및 로딩 UI 수정)
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback]);
};
<<<<<<< HEAD
=======

export default useScrollDetector;
>>>>>>> 888ae99a (feat: 무한스크롤 기능 구현 및 로딩 UI 수정)
