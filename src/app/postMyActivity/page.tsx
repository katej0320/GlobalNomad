"use client"
import Title from './components/Title';
import PriceInput from './components/PriceInput';
import AddressInput from './components/AddressInput';
import Reservation from './components/Reservation';
import BannerImage from './components/BannerImage';
import PostActivity from './components/PostActivity'

export default function PostMyActivity(){

    return(

    <div>
        <PostActivity />
        <Title />
        <PriceInput />
        <AddressInput />
        <Reservation />
        <BannerImage />
    </div>
    )
}