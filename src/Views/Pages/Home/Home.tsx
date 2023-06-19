import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BigBanner from "../../Components/BigBanner/BigBanner";
import CardCarouselHome from "../../Components/CardCarouselHome/CardCarouselHome";

const Home=()=>{
    return(
        <div className="bg-white space-y-5 max-w-screen">
            <BigBanner/>
            <CardCarouselHome/>
            <div className="max-w-screen m-auto bg-shopkeeperHome bg-cover text-white">
                <div className="w-full relative bg-gray-800 bg-opacity-50 pt-20">
                    <div className="m-auto mb-20">
                        <div className="text-center m-auto">
                            <p className="font-bold text-xl">Start Working Now</p>
                            <p className="text-base">All sorts of jobs to your liking to earn</p>
                        </div>             
                        <div className="m-auto mt-5 w-1/5 rounded-2xl px-3 py-5 bg-blue-400">
                            <p className="font-bold text-center text-xl">Become a Worker</p>
                        </div>       
                        </div>
                        <div className="w-full bottom-0 m-auto bg-blue-800 bg-opacity-50">
                            <div className="flex items-center px-10 py-5 justify-around">
                                <div className="text-center">
                                    <p className="font-semibold text-lg">Job Opening Every</p>
                                    <p className="font-bold text-2xl">30 seconds</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-semibold text-lg">Transactions</p>
                                    <p className="font-bold text-2xl">50M+</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-semibold text-lg">Price Range</p>
                                    <p className="font-bold text-2xl">Rp 50rb - 10jt</p>
                                </div>
                            </div>                    
                        </div>
                    </div>
                    
                </div>
            <CardCarouselHome/>
            <Footer/>
        </div>
    );
}

export default Home;