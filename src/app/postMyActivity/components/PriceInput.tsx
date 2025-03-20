"use client"
import Input from "@/components/Input/Input"
import { useActivityStore } from "@/stores/useActivityStore";

 

export default function PriceInput (){
    const { activity, setActivity } = useActivityStore(); // Zustand 상태 가져오기

    return(
        <div>
            <Input
                label="가격"
                placeholder="가격"
                id="price"
                type="number"
                value={activity.price}
                />
            
        </div>

    )
}