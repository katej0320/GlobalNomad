'use client';

import { useRouter } from 'next/navigation';
import PageController from './PageController';
import styles from './style.module.css';
import ModalType1 from '@/components/modal/ModalType1';
import { useModalController } from '@/utils/useModalController';
import ReservationItem from './ReservationItem';

export default function ListContainer() {
  const router = useRouter();

  const handleNavigate = (activityId: string) => {
    router.push(`/activities/${activityId}`);
  };

  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    useModalController();

  return (
    <>
      {showModal && (
        <ModalType1
          showModal={showModal}
          setShowModal={setShowModal}
          isModalMessage={isModalMessage}
        />
      )}
      <PageController />
      <ul className={styles.listContainer}>
        <ReservationItem
          handleNavigate={handleNavigate}
          setShowModal={setShowModal}
          setIsModalMessage={setIsModalMessage}
        />
      </ul>
    </>
  );
}
