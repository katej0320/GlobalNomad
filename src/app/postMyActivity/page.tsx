"use client"
import Title from './components/Title/Title';
import PriceInput from './components/PriceInput/PriceInput';
import AddressInput from './components/AddressInput/AddressInput';
import Reservation from './components/Reservation/Reservation';
import BannerImage from './components/BannerImage/BannerImage';
import PostActivity from './components/PostActivity/PostActivity'
import SubImage from './components/SubImage/SubImage'
import styles from './page.module.css'
export default function PostMyActivity(){

    return(

    <div className={styles.container}>
        <PostActivity />
        <Title />
        <PriceInput />
        <AddressInput />
        <Reservation />
        <BannerImage />
        <SubImage />
    </div>
    )
}