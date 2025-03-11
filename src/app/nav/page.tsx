"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavProfileCard from "./NavProfileCard";

export default function Nav() {
  const [isProfileCard, setIsProfileCard] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileCard(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/nav_globalNomad.svg"
              width={172}
              height={30}
              alt="Global Nomad"
            />
          </Link>
        </div>
        {/* 로그인 전 */}
        {/* <div className={styles.noTokenUI}>
          <Link href="/signin">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </div> */}
        {/* 로그인 후 */}
        <div className={styles.hasTokenUI}>
          <div className={styles.notice}>
            <Image
              src="/images/icon_notification.svg"
              width={20}
              height={20}
              alt="알림"
            />
          </div>
          <div
            className={styles.profile}
            ref={profileRef}
            onClick={() => setIsProfileCard((prev) => !prev)}
          >
            <Image
              src="/images/no_profileImg.svg"
              width={32}
              height={32}
              alt="프로필 이미지"
            />
            <p className={styles.nickname}>닉네임</p>
            {isProfileCard && <NavProfileCard />}
          </div>
        </div>
      </div>
    </nav>
  );
}
