import { SetStateAction } from 'react';
import CustomModal from './CustomModal';
import CancelModal from '@/app/myreservation/components/CancelModal';
import { Reservation } from '@/lib/types';

interface Props {
  modalType: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isModalMessage: string;
  setShowToast: React.Dispatch<SetStateAction<boolean>>;
  reservationId: number | undefined;
  isReviewData?: Reservation;
}

export default function ModalType1({
  modalType,
  showModal,
  setShowModal,
  isModalMessage,
  setShowToast,
  reservationId,
}: Props) {
  if (!showModal) return null;

  return (
    <>
      <CustomModal isOpen={showModal} onClose={() => setShowModal(false)}>
        {modalType === 'cancel' ? (
          <CancelModal
            reservationId={reservationId}
            setShowModal={setShowModal}
            isModalMessage={isModalMessage}
            setShowToast={setShowToast}
          />
        ) : (
          ''
        )}
      </CustomModal>
    </>
  );
}
