import React from "react";
import { Link } from "react-router-dom";

function BigBanner(){
    return(
        <div className="bg-gray-800 px-20 py-8 m-auto my-3 rounded-lg w-11/12">
            <div className="flex items-center justify-between">
                <div className="flex-col text-white">
                    <p className="text-2xl">Temukan Pekerja</p>
                    <p className="text-sm max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit mauris auctor augue varius tincidunt. Morbi ut tellus eu erat aliquet scelerisque eget at nisl. Etiam est augue, venenatis sit amet nunc et, euismod malesuada ex. I</p>
                </div>
                <Link
                to={'/jobs'}
                 className="rounded-lg px-5 py-3 bg-blue-500 text-white font-semibold">
                    Cari Pekerja Sekarang
                </Link>
            </div>
        </div>
    );
}

export default BigBanner;