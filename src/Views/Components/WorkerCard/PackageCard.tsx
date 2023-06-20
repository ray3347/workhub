
import { Button, Card, CardActionArea, CardHeader, colors } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';

function PackageCard (){
    return(
        
            <Card sx={{ maxWidth: 360 }}>
                <CardActionArea>
                    <div className='space-y-5 px-5 py-5'>
                        <div>
                            <p className='font-bold text-lg'>Long-Term</p>
                        </div>
                        <div className='space-y-2'>
                            <p className='font-bold text-md'>Package Description</p>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center justify-start space-x-2'>
                                        <CheckCircleIcon
                                        sx={{
                                            maxWidth: 17
                                        }}
                                        className='max-h-full'
                                        />
                                        <p className='text-sm'>Description Package</p>
                                    </div>
                                    <div className='flex items-center justify-start space-x-2'>
                                        <CheckCircleIcon
                                        sx={{maxWidth: 17}}
                                        className='max-h-full'
                                        />
                                        <p className='text-sm'>Description Package</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between space-x-5'>
                                    <div className='flex items-center justify-start space-x-2'>
                                        <CheckCircleIcon
                                        sx={{maxWidth: 17}}
                                        className='max-h-full'
                                        />
                                        <p className='text-sm'>Description Package</p>
                                    </div>
                                    <div className='flex items-center justify-start space-x-2'>
                                        <CheckCircleIcon
                                        sx={{maxWidth: 17}}
                                        className='max-h-full'
                                        />
                                        <p className='text-sm'>Description Package</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='font-bold text-xl'>Rp. 100.000</p>
                            <Link to={'/jobs/cleaningservice/workerdetail/bookpage'}>
                                <Button variant='contained' color='primary' size='medium'>Book Now</Button>
                            </Link>
                        </div>
                    </div>
                    
                </CardActionArea>
            </Card>
       
        
    );
}

export default PackageCard;