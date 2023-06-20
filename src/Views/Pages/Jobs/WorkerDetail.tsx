import React from "react";
import Footer from "../../Components/Footer/Footer";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Avatar, Pagination, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import ReviewStars from "../../Components/ReviewStars/ReviewsStars";
import CircleIcon from '@mui/icons-material/Circle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PackageCard from "../../Components/WorkerCard/PackageCard";
import ReviewCard from "../../Components/WorkerCard/ReviewCard";

const packageDetail=[
    {cardTitle: 'Long-Term', cardPrice: 'Rp. 100.000'},
    {cardTitle: 'Short-Term', cardPrice: 'Rp. 50.000'},
    {cardTitle: 'One-Time', cardPrice: 'Rp. 20.000'}
]

const WorkerDetail = ()=>{
    return(
        <div>
            <div className="w-11/12 m-auto my-5 space-y-10">
                <div className="w-full m-auto space-x-5 flex items-center justify-between">
                    <div
                    className="w-full h-96 bg-cleanerHome bg-cover"                    
                    />
                    <div className="m-auto w-6/12 flex-col space-y-8 justify-between">
                        <div
                        className="w-full h-44 bg-cleaningJob bg-cover"
                        />
                        <div
                        className="w-full h-44 bg-shopkeeperHome bg-cover"
                        />
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-start items-center space-x-5">
                        <Avatar sx={{ 
                        bgcolor: deepPurple[500],
                        width: '30px',
                        height: '30px'
                        }}>N</Avatar>
                        <div>
                            <p className="font-bold text-2xl">Nama</p>
                        </div>
                           
                    </div>
                    <div className="flex items-center justify-start space-x-2">
                        <ReviewStars/>
                        <p className="text-md">4.5/5</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2">
                        <LocationOnIcon sx={{maxWidth: 20}}/>
                        <p className="text-lg">Surabaya</p>
                    </div>     
                    <div className="text-justify">
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros tincidunt, faucibus turpis eget, malesuada risus. Praesent pharetra hendrerit nibh eleifend mattis. Maecenas placerat, ante vel viverra feugiat, velit risus dictum sapien, vel egestas leo diam in libero. Donec fermentum, justo non vehicula dapibus, quam ipsum mollis dolor, quis lacinia ligula nisi lobortis diam. Donec commodo magna eu lobortis blandit. Morbi sit amet ipsum at tortor feugiat consectetur. Vivamus non lectus in quam egestas imperdiet. Vivamus et ultricies lorem, vel tempor est. Aenean erat leo, pulvinar sit amet maximus ac, finibus quis risus. Nulla tincidunt venenatis commodo. Quisque blandit non nisi semper dignissim. Nullam sed sodales justo, sed rutrum mi. Duis mattis eros tellus, consequat volutpat mi consectetur ut. Fusce ligula velit, iaculis nec sagittis maximus, pulvinar sit amet odio. Nullam tristique elit sed condimentum tristique.</p>
                    </div>               
                </div>
                <div className="space-y-3">
                    <p className="font-bold text-lg">Choose Package</p>
                    <div className="flex items-center justify-between">
                        <PackageCard/>
                        <PackageCard/>
                        <PackageCard/>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-2xl">Reviews</p>
                    <div className="flex justify-start">
                        <div className="w-2/12 text-center space-y-5">
                            <div className="mt-5 rounded-full bg-blue-200 m-auto w-24 h-24 flex items-center justify-around border-blue-800 border-4">
                                <p className="font-bold text-3xl text-blue-800">4.5</p>
                            </div>
                            <p className="font-bold text-xl">Impressive</p>
                        </div>
                        <div className="space-y-5 w-10/12">
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                        </div>
                    </div>
                </div>
                <div className="relative mb-10 mx-auto max-w-screen h-auto px-5">
                    <Pagination 
                    className="relative mx-96 px-auto"
                    count={10} 
                    color="primary"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default WorkerDetail;