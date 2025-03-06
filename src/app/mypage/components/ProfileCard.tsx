"use client";

import { useSearchParams, useRouter } from "next/navigation";

const tabs = [
  { key: "MyInfo", label: "내 정보" },
  { key: "MyReservations", label: "예약 내역" },
  { key: "MyActivities", label: "내 체험 관리" },
  { key: "MyNotifications", label: "예약 현황" },
];

export default function ProfileCard() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("tab") || "MyNotifications";

  const handleTabChange = (tabKey: string) => {
    router.replace(`?tab=${tabKey}`);
  };

  return (
    <nav>
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.key}
            onClick={() => handleTabChange(tab.key)}
            style={{
              cursor: "pointer",
              fontWeight: activeTab === tab.key ? "700" : "400",
            }}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
