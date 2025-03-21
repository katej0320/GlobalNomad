"use client"

import CustomButton from "@/components/CustomButton"
import styles from "./PostActivity.module.css"

export default function PostActivity() {

    return (
        <div className={styles.container}>
            <p className="text-4xl">내 체험 등록</p>
            <CustomButton
                href="/myactivities"
                fontSize="md"
                className={`"customButton-black" ${styles.custombutton}`}
            >
                등록하기
            </CustomButton>

        </div>
    )
}


