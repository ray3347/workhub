import React from 'react';
import Footer from '../../Components/Footer/Footer';
import BigTextBox from '../../Components/MUI/BigTextBox';
import PronounsList from '../../Components/List/PronounsList';
import PhoneNumberBig from '../../Components/MUI/PhoneNumberBig';
import PhoneIndexList from '../../Components/List/PhoneIndexList';
import EmailBig from '../../Components/MUI/EmailBig';
import LocationBig from '../../Components/MUI/LocationBig';
import DescriptionBig from '../../Components/MUI/DescriptionBig';
import BookingCard from '../../Components/WorkerCard/BookingCard';

const BookPage = () =>{
    return(
        <div>
            <div className='w-11/12 flex justify-between m-auto my-10'>
                <div className='space-y-8'>
                    <p className='font-bold text-3xl'>Booking Detail</p>
                        <div className='flex items-center justify-start space-x-3'>
                            <PronounsList/>
                            <BigTextBox/>
                        </div>                
                        <div className='flex items-center justify-start space-x-3'>
                            <PhoneIndexList/>
                            <PhoneNumberBig/>
                        </div>                    
                        <EmailBig/>                    
                        <LocationBig/>
                        <DescriptionBig/>                    
                </div>
                <BookingCard/>
            </div>
            <Footer/>
        </div>
    );
}

export default BookPage;