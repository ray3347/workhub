import React from "react";
import Footer from "../../Components/Footer/Footer";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Avatar, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import ReviewStars from "../../Components/ReviewStars/ReviewsStars";

const WorkerDetail = ()=>{
    return(
        <div>
            <div className="w-11/12 m-auto my-5 space-y-5">
                <div className="w-full m-auto space-x-5 flex items-center justify-between">
                    <div
                    className="w-full h-96 bg-cleanerHome bg-cover "                    
                    />
                    <div className="m-auto w-6/12 flex-col space-y-8 justify-between">
                        <img
                        className="w-full h-44"
                        src=""
                        />
                        <img
                         className="w-full h-44"
                         src=""
                        />
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="flex justify-left space-x-5">
                        <Avatar sx={{ 
                        bgcolor: deepPurple[500],
                        width: '30px',
                        height: '30px'
                        }}>N</Avatar>
                        <Typography gutterBottom variant="h5" component="div">
                            Nama
                        </Typography>
                    </div>
                    <ReviewStars/>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default WorkerDetail;