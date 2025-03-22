"use client"

import CustomButton from "@/components/CustomButton";
import styles from "./PostActivity.module.css";
import usePostMyActivities from "@/hooks/usePostMyActivity";
import { useActivityStore } from "@/stores/useActivityStore";
import { useRouter } from "next/navigation";

export default function PostActivity() {
  const router = useRouter();

  const {
    activity: {
      title,
      category,
      description,
      address,
      price,
      schedules, // eslint-disable-line @typescript-eslint/no-unused-vars
      bannerImageUrl,
      subImageUrls,
      date,
      startTime,
      endTime,
    },
  } = useActivityStore();

  const { mutate, isPending } = usePostMyActivities();

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("title", String(title ?? ""));
    formData.append("category", category);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("price", price.toString());

    formData.append("date", date);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);

    if (bannerImageUrl) {
      formData.append("bannerImage", bannerImageUrl); // File 객체라고 가정
    }

    subImageUrls.forEach((file) => {
      formData.append("subImages", file); // 파일 배열 추가
    });

    mutate(formData, {
      onSuccess: () => {
        alert("등록 성공!");
        router.push("/myactivities");
      },
      onError: (err) => {
        console.error("등록 실패:", err);
        alert("등록 중 오류가 발생했습니다.");
      },
    });
  };


    return (
        <div className={styles.container}>
            <p className={styles.postTitle}>내 체험 등록</p>
            <CustomButton
                onClick={handleSubmit}
                fontSize="md"
                className={`"customButton-black" ${styles.custombutton}`}
                disabled={isPending}
            >
                {isPending ? "등록 중..." : "등록하기"}
               
            </CustomButton>

        </div>
    )
}


