import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const ReviewStarsSmall = () =>{
    return(
        <div className='flex items-center space-x-1'>
            <StarIcon sx={{maxWidth: 17}}/>
            <StarIcon sx={{maxWidth: 17}}/>
            <StarIcon sx={{maxWidth: 17}}/>
            <StarIcon sx={{maxWidth: 17}}/>
            <StarHalfIcon sx={{maxWidth: 17}}/>
        </div>
    );
}

export default ReviewStarsSmall;