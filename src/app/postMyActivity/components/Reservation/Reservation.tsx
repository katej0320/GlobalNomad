"use client"

import CustomButton from "@/components/CustomButton"
import DateInput from "../customInputs/customDateInput"
import CustomTimeSelect from "../customInputs/customTimeSelect"
import { Plus, Minus } from "lucide-react";
import { useActivityStore } from "@/stores/useActivityStore";

export default function Reservation() {
    const { activity, setActivity, addSchedule, removeSchedule, updateSchedule } = useActivityStore();

    // 수정된 addSchedule 함수: 현재 입력된 날짜/시간을 일정으로 추가
    const handleAddSchedule = () => {
        if (!activity.date) {
            alert("날짜를 선택하세요!");
            return;
        }
        addSchedule(); // Zustand의 addSchedule() 호출
    };

    return (
        <div>
            <h2>예약 가능한 시간대</h2>

            {/* 예약 설정 필드 */}
            <div className="flex items-center gap-3">
            <DateInput
    name="date"
    id="date"
    type="date"
    value={activity.date || ""}
    onChange={(date: Date | null) => {
        setActivity({ date: date ? date.toISOString().slice(0, 10) : "" });
    }}
/>



                <CustomTimeSelect
                    startTime={activity.startTime}
                    endTime={activity.endTime}
                    onStartTimeChange={(value) => setActivity({ startTime: value })}
                    onEndTimeChange={(value) => setActivity({ endTime: value })}
                />

                <CustomButton onClick={handleAddSchedule}>
                    <Plus /> 추가
                </CustomButton>
            </div>

            {/* 추가된 일정 목록 */}
            <div>
                {activity.schedules.map((schedule, index) => (
                    <div key={index} className="flex items-center gap-3 mt-2">
                        <DateInput
                            type="date"
                            value={schedule.date || ""}
                            onChange={(date: Date | null) => {
                                updateSchedule(index, "date", date ? date.toISOString().slice(0, 10) : "");
                            }}
                        />

                        <CustomTimeSelect
                            startTime={schedule.startTime}
                            endTime={schedule.endTime}
                            onStartTimeChange={(value) => updateSchedule(index, "startTime", value)}
                            onEndTimeChange={(value) => updateSchedule(index, "endTime", value)}
                        />

                        <CustomButton onClick={() => removeSchedule(index)}>
                            <Minus /> 삭제
                        </CustomButton>
                    </div>
                ))}
            </div>
        </div>
    );
}
