import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const ReviewStars = () =>{
    return(
        <div className='flex items-center space-x-1'>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>
        </div>
    );
}

export default ReviewStars;