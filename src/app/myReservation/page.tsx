'use client';

import Image from 'next/image';
import Empty from '@/components/empty/Empty';
import Footer from '@/components/footer/Footer';
import ReservationList from './components/ReservationList';
import useReservation from '@/hooks/useReservation';
import styles from './style.module.css';
import PageController from './components/PageController';
import { useStatusFilter } from '@/utils/useStatusFilter';

export default function MyReservation() {
  const { value, setValue, status, options } = useStatusFilter();

  const { data: reservationsData, isLoading } = useReservation(status);

  return (
    <>
      <div className={styles.pageContainer}>
        <PageController
          reservationsData={reservationsData}
          status={status}
          value={value}
          setValue={setValue}
          options={options}
        />
        {isLoading ? (
          <div className={styles.loading}>
            <Image src='/images/spinner.svg' alt='Loading' fill />
          </div>
        ) : (
          <>
            {reservationsData!.length > 0 ? (
              <ReservationList reservationsData={reservationsData} />
            ) : (
              <Empty />
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

