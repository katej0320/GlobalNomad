"use client"
import Title from './components/Title/Title';
import PriceInput from './components/PriceInput/PriceInput';
import AddressInput from './components/AddressInput/AddressInput';
import Reservation from './components/Reservation/Reservation';
import BannerImage from './components/SubImage/SubImage';
import PostActivity from './components/PostActivity/PostActivity'

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