<<<<<<< HEAD
'use client';

import { useState } from 'react';

export function useModalController() {
  const [showModal, setShowModal] = useState(false);
  const [isModalMessage, setIsModalMessage] = useState('');
=======
import { useState } from "react";

export function useModalController() {
  const [showModal, setShowModal] = useState(false);
  const [isModalMessage, setIsModalMessage] = useState("");
>>>>>>> 56ae002c (chore: utils 디렉토리 이동)

  return {
    showModal: showModal ?? false,
    setShowModal: setShowModal ?? (() => {}),
<<<<<<< HEAD
    isModalMessage: isModalMessage ?? '',
    setIsModalMessage: setIsModalMessage ?? (() => {}),
  };
}
=======
    isModalMessage: isModalMessage ?? "",
    setIsModalMessage: setIsModalMessage ?? (() => {}),
  };
}

>>>>>>> 56ae002c (chore: utils 디렉토리 이동)
