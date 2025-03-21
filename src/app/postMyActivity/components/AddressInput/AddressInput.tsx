"use client"
import Input from "../customInputs/customInput"
import styles from "./AddressInput.module.css"
 

export default function AddressInput (){


    return(
        <div className={styles.container}>
            <p className={styles.title}>주소</p>
            <Input
                placeholder="주소"
                id="address"
                type="string"
                />
            
        </div>

    )
}