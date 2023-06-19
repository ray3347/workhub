import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import JobCard from "../../Components/JobCard/JobCard";
import { Component } from "react";
import { Pagination } from "@mui/material";


const Jobs=()=>{
 
        return(
            <div className="bg-white">
                <div className="m-auto w-11/12 py-10">
                    <div>
                        <p className="font-bold text-2xl">Job Catalog</p>
                        <p className="text-md">Enjoy the services of our top-tier workers</p>
                    </div>
                    <div className="my-5 space-y-3">
                        <div className="flex items-center justify-between ">
                            <JobCard/>
                            <JobCard/>
                            <JobCard/>
                            <JobCard/>
                            <JobCard/>
                            <JobCard/>
                        </div>
                        <div className="flex items-center justify-between ">
                            <JobCard/>
                            <JobCard/>
                            <JobCard/>
                            <JobCard/>
                            <JobCard/>
                            <JobCard/>
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

export default Jobs;