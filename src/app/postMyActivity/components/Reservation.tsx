"use client"

import CustomButton from "@/components/CustomButton"
import DateInput from "@/components/Input/DateInput"
import SelectInput from "@/components/Input/SelectInput"
import {Plus} from "lucide-react";



export default function Reservation (){

    return(
        <div>
            <div>
                <div>
                    <h2>날짜</h2>  
                    <h2>시작 시간</h2>
                    <h2>종료 시간</h2>
                </div>
                <div>
                    <DateInput />
                    <SelectInput />
                    <span> ~ </span>
                    <SelectInput />
                    <CustomButton>
                        <Plus />
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}