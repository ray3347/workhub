import { Avatar, Card, CardActionArea } from '@mui/material';
import { green, grey } from '@mui/material/colors';
import React from 'react';
import FaceIcon from '@mui/icons-material/Face';

function AvatarButton(){
    return(
        
        <Card sx={{borderRadius: 100}}>
            <CardActionArea className='rounded-full'>   
                <Avatar sx={{bgcolor: grey[400], width: 100, height: 100}}>           
                        <FaceIcon/>
                </Avatar>
            </CardActionArea>
        </Card>
        
    );
}

export default AvatarButton;