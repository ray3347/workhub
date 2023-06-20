import { Button, Card, CardActionArea } from '@mui/material';
import React from 'react';
import DurationCheckout from '../List/DurationCheckout';
import PaymentList from '../List/PaymentList';

function BookingCard(){
    return(
        <Card sx={{width: 400, height: 450}}>
                <div className='px-10 py-8'>
                    <div className='space-y-5 items-center'>
                        <p className='font-bold text-2xl'>Detail Summary</p>
                        <div className='space-y-1'>
                            <p className='font-bold text-md'>Worker</p>
                            <p className='font-bold text-2xl text-blue-800'>Nama</p>
                        </div>                        
                        <DurationCheckout/>
                        <PaymentList/>
                        <div className='flex items-center justify-between'>
                            <p className='font-bold text-md'>Total</p>
                            <p className='font-bold text-2xl text-blue-800'>Rp. 50.000</p>
                        </div>
                        <div className='text-center'>
                            <Button
                            variant='contained'
                            size='large'
                            >
                                Confirm
                            </Button>
                        </div>
                        
                    </div>
                </div>
        </Card>
    );
}

export default BookingCard;