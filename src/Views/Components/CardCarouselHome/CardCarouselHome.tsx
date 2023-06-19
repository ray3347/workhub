import React,{Component} from "react";
import Slider from "react-slick";
import WorkerCardHome from "../WorkerCardHome/WorkerCardHome";

function CardCarouselHome(){
    return(
        <div className="w-11/12 m-auto">
                <div className="text-xl font-bold">
                    Top Verified User Rating
                </div>
                <div className="flex items-center justify-between mt-2">
                   <WorkerCardHome/>
                   <WorkerCardHome/>
                   <WorkerCardHome/>
                   <WorkerCardHome/>
                   <WorkerCardHome/>
                   <WorkerCardHome/>
                </div>
                <div>
                    
                </div>
        </div>
    );
}

export default CardCarouselHome;