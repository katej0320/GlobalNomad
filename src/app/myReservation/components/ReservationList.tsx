'use client';

import { useRouter } from 'next/navigation';
import styles from '../style.module.css';
import ModalType1 from '@/components/modal/ModalType1';
import { useModalController } from '@/utils/useModalController';
import ReservationItem from './ReservationItem';
import { Reservation } from '@/lib/types';

interface Props {
  reservationsData: Reservation[] | undefined;
}

export default function ListContainer({ reservationsData }: Props) {
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

      <ul className={styles.listContainer}>
        <ReservationItem
          reservationsData={reservationsData}
          handleNavigate={handleNavigate}
          setShowModal={setShowModal}
          setIsModalMessage={setIsModalMessage}
        />
      </ul>
    </>
  );
}
