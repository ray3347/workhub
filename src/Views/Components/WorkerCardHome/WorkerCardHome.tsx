import React from "react";

function WorkerCardHome(){
    return(
        <div className="bg-blue-800 rounded-xl p-2 w-44 text-white">
            <div className="bg-cleanerHome bg-cover bg-center rounded-xl m-auto h-80 relative">
                <div className="m-auto text-center absolute bottom-0 bg-blue-800 p-3 rounded-tl-2xl rounded-tr-2xl w-full">
                    <p className="font-bold text-lg">Name</p>
                    <p className="mb-2 text-base">Job Title</p>
                </div>
            </div>
        </div>
    );
}

export default WorkerCardHome;