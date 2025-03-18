"use client"
import Input from "./customInput";
import SelectInput from "@/components/Input/SelectInput";
import styles from "./customInputs.module.css";


export default function Title(){


    return(
        <div>

            <Input
            className={styles.inputTitle}
            label={undefined}
            placeholder={"제목"}
            id={"title"}
            type={"text"}
            />
            <div className={styles.category}>
                 <SelectInput />
             </div>

             <textarea 
             className={styles.textarea}
             name="내용"
             placeholder="내용"
            />

        </div>
    )
}