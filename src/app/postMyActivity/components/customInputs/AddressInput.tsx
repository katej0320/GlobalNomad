"use client"
import Input from "@/components/Input/Input"

 

export default function AddressInput (){


    return(
        <div>
            <Input
                label="주소"
                placeholder="주소"
                id="address"
                type="string"
                />
            
        </div>

    )
}