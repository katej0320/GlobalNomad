import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function NavProfileCard() {
  return (
    <div className={styles.profileCardContainer}>
      <div className={styles.profileImg}>
        <Image src="/images/no_profileImg.svg" fill alt="프로필 이미지" />
      </div>
      <ul className={styles.menuContainer}>
        <li className={styles.menu}>
          <Link href="/mypage">
            <Image
              src="/images/icon_menu1.svg"
              width={24}
              height={24}
              alt="내 정보"
            />
            내 정보
          </Link>
        </li>
        <li className={styles.menu}>
          <Link href="/reservation">
            <Image
              src="/images/icon_menu2.svg"
              width={24}
              height={24}
              alt="예약 내역"
            />
            예약 내역
          </Link>
        </li>
        <li className={styles.menu}>
          <Link href="/activities">
            <Image
              src="/images/icon_menu3.svg"
              width={24}
              height={24}
              alt="내 체험 관리"
            />
            내 체험 관리
          </Link>
        </li>
        <li className={styles.menu}>
          <Link href="">
            <Image
              src="/images/icon_menu4.svg"
              width={24}
              height={24}
              alt="예약 현황"
            />
            예약 현황
          </Link>
        </li>
      </ul>
    </div>
  );
}
