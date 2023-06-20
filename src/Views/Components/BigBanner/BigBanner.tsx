import React from "react";
import { Link } from "react-router-dom";

function BigBanner(){
    return(
        <div className="bg-shopkeeperHome bg-cover m-auto my-3 rounded-lg w-11/12">
            <div className="bg-gray-800 px-20 py-8 rounded-lg bg-opacity-40 w-full">
                <div className="flex items-center justify-between">
                    <div className="flex-col text-white">
                        <p className="text-2xl font-bold">Temukan Pekerja</p>
                        <p className="text-sm max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit mauris auctor augue varius tincidunt. Morbi ut tellus eu erat aliquet scelerisque eget at nisl. Etiam est augue, venenatis sit amet nunc et, euismod malesuada ex. I</p>
                    </div>
                    <Link
                    to={'/jobs'}
                    className="rounded-lg px-5 py-3 bg-blue-600 text-white font-semibold hover:scale-110 hover:shadow-2xl ease-in duration-200 hover:bg-blue-800">
                        Cari Pekerja Sekarang
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default BigBanner;