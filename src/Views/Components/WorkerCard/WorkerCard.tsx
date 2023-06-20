import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import BeAWorker from '../../Pages/BeAWorker/BeAWorker';
import ReviewStars from '../ReviewStars/ReviewsStars';
import ReviewStarsSmall from '../ReviewStars/ReviewStarsSmall';

const WorkerCard=()=> {
  return (
    <Link to={'/jobs/cleaningservice/workerdetail'}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <div
            className='h-24 max-h-24 w-full bg-shopkeeperHome bg-cover'
            />
            <CardContent>
                <div className='flex justify-start space-x-2'>
                    <Avatar sx={{ 
                        bgcolor: deepPurple[500],
                        width: '30px',
                        height: '30px'
                    }}>N</Avatar>
                    <Typography gutterBottom variant="h5" component="div">
                        Nama
                    </Typography>
                </div>
            
            <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh leo, tempor quis facilisis quis, lobortis et orci.
            </Typography>
            <div className='flex justify-start items-center space-x-2 my-2'>
                <ReviewStarsSmall/>
                <Typography variant='body2' color='text.primary'>4.5/5</Typography>
            </div>
            </CardContent>
        </CardActionArea>
        {/* <CardActions>
            <Button size="small" color="primary">
            Check
            </Button>
        </CardActions> */}
        </Card>
    </Link>
    
  );
}
 export default WorkerCard;