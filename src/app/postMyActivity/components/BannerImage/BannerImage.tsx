'use client';
import { useEffect, useState } from 'react';
import { Plus, X } from 'lucide-react';
import styles from './postImage.module.css';
import Image from 'next/image';

export default function BannerImage() {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // eslint-disable-line @typescript-eslint/no-unused-vars
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  // 이미지 삭제 함수
  const handleRemoveImage = () => {
    setImage(null);
  };

  useEffect(() => {
    if(image) {
      const objectUrl = URL.createObjectURL(image);
      setPreviewUrl(objectUrl);

      return() => {
        URL.revokeObjectURL(objectUrl);
      };
    } else {
      setPreviewUrl(null);
    }
    }, [image]
  )


  return (
    <div>
      <p className={styles.title}>배너 이미지</p>
      <div className={styles.container}>
        {/* 이미지 등록 버튼 */}
        <label htmlFor='bannerImageUpload' className={styles.uploadButton}>
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

        {/* 업로드된 이미지 미리보기 */}
        <div className={styles.imagePreviewContainer}>
          {image && (
            <div className={styles.imageItem}>
              {/* ✅ 이미지 */}
              <div className={styles.imageWrapper}>
                <Image
                  src={URL.createObjectURL(image!)}
                  alt='BannerImage'
                  className={styles.previewImg}
                  width={180}
                  height={180}
                />
              </div>
              {/* ✅ X 버튼을 이미지 바깥에 배치 */}
              <button
                className={styles.removeButton}
                onClick={() => handleRemoveImage()}
              >
                <X className={styles.xIcon} strokeWidth={2} size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 숨겨진 파일 업로드 input */}
      <input
        type='file'
        id='bannerImageUpload'
        accept='image/*'
        onChange={handleImageChange}
        className={styles.hiddenInput}
      />
    </div>
  );
}
