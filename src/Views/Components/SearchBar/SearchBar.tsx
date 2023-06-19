
import React, {useState} from "react";
import { Combobox } from "@headlessui/react";

function SearchBar(){
    return(
        <form className="relative w-1/3 flex items-center">
            <div className="px-3 flex items-center">
                <span className="material-icons md-light">
                    search
                </span>
            </div>
            
            <input
            placeholder="Search for Jobs"
            className="px-4 py-2 text-sm rounded-lg"
            />
        </form>
    );
}

export default SearchBar;