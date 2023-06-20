import React from "react";
import Footer from "../../Components/Footer/Footer";
import JobCard from "../../Components/JobCard/JobCard";
import WorkerCard from "../../Components/WorkerCard/WorkerCard";
import LocationList from "../../Components/List/LocationList";
import BudgetList from "../../Components/List/BudgetList";
import DurationList from "../../Components/List/DurationList";
import RatesList from "../../Components/List/RatesList";
import { Pagination } from "@mui/material";

const CleaningService = () =>{
    return(
        <div>
            <div className="w-11/12 my-10 m-auto space-y-10">
                <div className="space-y-2">
                    <p className="font-bold text-4xl">Cleaning Service</p>
                    <p className="text-sm">Your place, squeaky clean, anytime.</p>
                </div>
                <div className="space-y-3">
                    <div className="space-y-2">
                        <p className="font-bold text-lg">Filters</p>
                        <div className="flex items-center justify-start space-x-5">
                            <LocationList/>
                            <BudgetList/>
                            <DurationList/>
                        </div>                        
                    </div>
                    <div className="max-w-xs space-y-2">
                        <p className="font-bold text-lg">Sort By</p>
                        <RatesList/>
                    </div>
                </div>
                <div className="max-w-screen space-y-5">
                    <div className="flex items-center justify-between max-w-11/12 m-auto">
                        <WorkerCard/>
                        <WorkerCard/>
                        <WorkerCard/>
                    </div>
                    <div className="flex items-center justify-between max-w-11/12 m-auto">
                        <WorkerCard/>
                        <WorkerCard/>
                        <WorkerCard/>
                    </div>
                    <div className="flex items-center justify-between max-w-11/12 m-auto">
                        <WorkerCard/>
                        <WorkerCard/>
                        <WorkerCard/>
                    </div>
                </div>
            </div>
            <div className="relative mb-10 mx-auto max-w-screen h-auto px-16">
                <Pagination 
                    className="relative mx-96 px-auto"
                    count={10} 
                    color="primary"/>
            </div>
            <Footer/>
        </div>
    );
}

export default CleaningService;