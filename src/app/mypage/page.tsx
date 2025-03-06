"use client";

import { useSearchParams } from "next/navigation";
import ProfileCard from "./components/ProfileCard";
import MyActivities from "./components/MyActivities";
import MyInfo from "./components/MyInfo";
import MyNotifications from "./components/MyNotifications";
import MyReservations from "./components/MyReservations";

const tabComponents = {
  MyInfo: <MyInfo />,
  MyReservations: <MyReservations />,
  MyActivities: <MyActivities />,
  MyNotifications: <MyNotifications />,
};

export default function MyInfoPage() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "MyInfo";

  return (
    <div>
      <h1>My Profile Page</h1>
      <ProfileCard />
      <div>
        {tabComponents[activeTab as keyof typeof tabComponents] || <MyInfo />}
      </div>
    </div>
  );
}
