import React from 'react';
import { Link } from 'react-router-dom';

function BecomeAWorkerBanner(){
    return(
        <div className="max-w-screen m-auto bg-cleaningMany bg-cover text-white">
                <div className="w-full relative bg-gray-800 bg-opacity-50 pt-20">
                    <div className="m-auto mb-20">
                        <div className="text-center m-auto">
                            <p className="font-bold text-xl">Become a Worker Today</p>
                            <p className="text-base">All sorts of jobs to your liking to earn</p>
                        </div> 
                        {/* <Link to={'/beAworker'}>
                            <div className="m-auto mt-5 w-1/5 rounded-2xl px-3 py-4 bg-blue-600 hover:shadow-2xl ease-in duration-200 hover:bg-blue-800 hover:cursor-pointer hover:scale-110">
                                <p className="font-bold text-center text-xl">Become a Worker</p>
                            </div> 
                        </Link> */}
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
    );
}

export default BecomeAWorkerBanner;