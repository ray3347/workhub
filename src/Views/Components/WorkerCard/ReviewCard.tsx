import { Card, CardActionArea } from '@mui/material';
import React from 'react';
import ReviewStars from '../ReviewStars/ReviewsStars';
import { CircleRounded } from '@mui/icons-material';
import ReviewStarsSmall from '../ReviewStars/ReviewStarsSmall';

function ReviewCard(){
    return(
        <Card>
            <CardActionArea>
                <div className='px-5 py-4 w-full'>
                    <div className='space-y-3'>                        
                        <ReviewStarsSmall/>
                        <p className='font-bold text-lg'>Anonymous</p>
                        <div className='flex items-center justify-start space-x-4'>
                            <p className='text-sm'>30 July 2022</p>
                            <CircleRounded sx={{maxWidth: 15}}/>
                            <p className='text-sm'>Cleaning</p>
                        </div>
                        <p className='text-md'>Insert Review Here</p>                        
                    </div>
                </div>
            </CardActionArea>
        </Card>
    );
}

export default ReviewCard;