'use client';
import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import styles from './SubImage.module.css';
import Image from 'next/image';

export default function SubImage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  // 파일 선택 시 실행되는 함수
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files)
        .filter((file) => file.type.startsWith('image/')) // ✅ 이미지 파일인지 확인
        .map((file) => URL.createObjectURL(file));

      const combinedImages = [...uploadedImages, ...newImages].slice(0, 4);

      setUploadedImages(combinedImages);

      event.target.value = ''; // ✅ 같은 파일 다시 업로드 가능하게 input 초기화
    }
  };

  // 이미지 삭제 함수
  const handleRemoveImage = (index: number) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      <p className={styles.title}>소개 이미지</p>
      <div className={styles.container}>
        {/* 이미지 등록 버튼 */}
        {/* <label htmlFor="subImageUpload" className={styles.uploadButton}>
          <Image
            className={styles.buttonImg}
            src="/images/postImage.png"
            alt="postImageButton"
          />
          <div className={styles.buttonComponents}>
            <Plus strokeWidth={1} className={styles.plusSign} size={50} />
            <p className={styles.buttonText}>이미지 등록</p>
          </div>
        </label> */}

        {/* 업로드된 이미지 미리보기 */}
        <div className={styles.imagePreviewContainer}>
          {/* 이미지 등록 버튼 */}
          <label htmlFor='subImageUpload' className={styles.uploadButton}>
            <Image
              className={styles.buttonImg}
              src='/images/postImage.png'
              alt='postImageButton'
              width={180}
              height={180}
            />
            <div className={styles.buttonComponents}>
              <Plus strokeWidth={1} className={styles.plusSign} size={50} />
              <p className={styles.buttonText}>이미지 등록</p>
            </div>
          </label>
          {uploadedImages.map((imageSrc, index) => (
            <div key={index} className={styles.imageItem}>
              {/* ✅ 이미지 */}
              <div className={styles.imageWrapper}>
                <Image
                  src={imageSrc}
                  alt={`Uploaded Preview ${index + 1}`}
                  className={styles.previewImg}
                  width={180}
                  height={180}
                />
              </div>
              {/* ✅ X 버튼을 이미지 바깥에 배치 */}
              <button
                className={styles.removeButton}
                onClick={() => handleRemoveImage(index)}
              >
                <X className={styles.xIcon} strokeWidth={2} size={16} />
              </button>
            </div>
          ))}
         
        </div>
      </div>

      {/* 숨겨진 파일 업로드 input */}
      <input
        type='file'
        id='subImageUpload'
        accept='image/*'
        multiple
        onChange={handleImageChange}
        className={styles.hiddenInput}
      />
      <p className ={styles.imageAlert}>*이미지는 최대 4개까지 등록가능합니다.</p>
    </div>
    
  );
}
