import React from "react";
import Footer from "../../Components/Footer/Footer";
import StepperNormal from "../../Components/Stepper/Stepper";
import { Button, TextField } from "@mui/material";
import AvatarButton from "../../Components/AvatarButton/AvatarButton";
import BecomeAWorkerBanner from "../../Components/BigBanner/BecomeAWorkerBanner";

function BeAWorker(){
    return(
        <div>
            <BecomeAWorkerBanner/>
            <div className="space-y-10 w-10/12 py-5 mt-5 m-auto">                
                <div className="space-y-5">
                    <p className="font-bold text-2xl">Personal Info</p>
                    <p className="text-sm max-w-full text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros tincidunt, faucibus turpis eget, malesuada risus. Praesent pharetra hendrerit nibh eleifend mattis. Maecenas placerat, ante vel viverra feugiat, velit risus dictum sapien, vel egestas leo diam in libero. Donec fermentum, justo non vehicula dapibus, quam ipsum mollis dolor, quis lacinia ligula nisi lobortis diam. Donec commodo magna eu lobortis blandit. Morbi sit amet ipsum at tortor feugiat consectetur.</p>
                </div>   
                <StepperNormal/>             
                <div className="flex items-center justify-start space-x-10">
                    <div className="space-y-1 w-64">
                        <p className="text-xl">Full Name</p>
                        <p className="text-xs">e.g. John Doe</p>
                    </div>
                    <div className="flex items-center space-x-2 justify-start">
                        <TextField variant="outlined" label='First Name'/>
                        <TextField variant="outlined" label='Last Name'/>
                    </div>                   
                    
                </div>
               
                <div className="flex items-center justify-start space-x-10">
                    <div className="space-y-1 w-64">
                        <p className="text-xl">Display Name</p>
                        <p className="text-xs">This name will be displayed to users in the application</p>
                    </div>                    
                    <div className="flex items-center space-x-2 justify-start">
                         <TextField variant="outlined" label='Display Name'/>
                    </div>                    
                </div>
                <div className="flex items-center justify-start space-x-10">
                    <div className="space-y-1 w-64">
                        <p className="text-xl">Profile Picture</p>
                        <p className="text-xs">Add a profile picture so that customers know exactly who they're working with</p>
                    </div>                    
                    <div className="flex items-center space-x-2 justify-start">
                         <AvatarButton/>
                    </div>                    
                </div>
                <div className="flex items-start justify-start space-x-10">
                    <div className="space-y-1 w-64">
                        <p className="text-xl">Description</p>
                        <p className="text-xs"></p>
                    </div>                    
                    <div className="flex items-center space-x-2 justify-start">
                         <TextField sx={{width: 750}} variant="outlined" multiline rows={6} label='Share about who you are and your experiences on the things you want to work on'/>
                    </div>                    
                </div>
                <div className="flex justify-end">
                    <Button size="large" variant="contained" >Continue</Button>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}
export default BeAWorker;