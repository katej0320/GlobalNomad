import { useQuery } from "@tanstack/react-query";
import instance from "@/lib/api";
import { Activities } from "@/lib/types";

// API 요청 함수
const fetchActivities = async (): Promise<Activities[]> => {
  try {
    const response = await instance.get("/activities");
    console.log("API 응답 데이터:", response.data); // 응답 데이터 확인
    return response.data.activities;
  } catch (error: unknown) {
    console.error("API 요청 실패:", error);
    throw new Error("데이터를 불러오는 데 실패했습니다.");
  }
};

// React Query 훅
const useActivities = () => {
  return useQuery<Activities[]>({
    queryKey: ["activities"],
    queryFn: fetchActivities,
  });
};

export default useActivities;
