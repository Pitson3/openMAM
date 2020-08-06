import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GridList, ButtonGroup, GridListTile,GridListTileBar,ListSubheader,Icon, Button, IconButton,Hidden} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import Checkboxes from './Checkboxes';
import FloatActionButton from './FloatActionButton';
//import DateTimePicker from './DateTimePicker';

import image1 from './images/image1.jpg';
import image2 from './images/image1.png';
import image3 from './images/image2.jpg';
import image4 from './images/image3.jpg';
import image5 from './images/image5.jpg';

const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        flexWrap:'wrap',
        justifyContent:'space-around',
        overflow:'hidden',
        backgroundColor: theme.palette.background.paper,

    },
    gridList:{
        width:500,
        height:450,
        //flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        //transform: 'translateZ(0)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    title: {
        color: theme.palette.primary.light,
      },
    button: {
    margin: theme.spacing(1),
    },
    

}));

const tileData = [
    {
        img: {image1},
        title:'Machine Learning',
        author:'Pitson Josiah',
        cols:2

    },
    {
        img: {image2},
        title:'IOT',
        author:'Pitson Josiah',
        cols:2

    },
    {
        img: {image3},
        title:'DevSecOps',
        author:'Pitson Josiah',
        cols:2

    },
    {
        img: {image4},
        title:'Cyber Security',
        author:'Pitson Josiah',
        cols:2

    },
    {
        img: {image5},
        title:'Facebook',
        author:'Pitson Josiah',
        cols:2

    },
]

export default function GridImages(){
    const classes = useStyles();
    const i=1;

    return(
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList} cols={1}>
                <GridListTile key="subheader" cols={2} style={{height:'auto'}}>
                    <ListSubheader component="div">June</ListSubheader>
                </GridListTile>
                {
                    tileData.map((tile)=>(
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={image1} alt={tile.title} />
                            <GridListTileBar
                            title = {tile.title}
                            subtitle = {<span>by: {tile.author}</span>}
                            actionIcon = {
                                <IconButton 
                                    aria-label = {`info about ${tile.title}`} className={classes.icon}
                                >
                                        <InfoIcon />
                                </IconButton>
                            }
                            actionPosition="right"
                            >

                            </GridListTileBar>
                        </GridListTile>
                    ))
                }
            </GridList>
            <div>
                <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                >
                Delete
                </Button>
                {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
                <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                >
                Send
                </Button>
                <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
                >
                Upload
                </Button>
                <Button
                variant="contained"
                disabled
                color="secondary"
                className={classes.button}
                startIcon={<KeyboardVoiceIcon />}
                >
                Talk
                </Button>
                <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                >
                Save
                </Button>
                <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                >
                Save
                </Button>
                <hr />
                <ButtonGroup color='primary' aria-label='outlined primary button group'>
                    <Button>one</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup color='primary' variant='contained' aria-label='contained primary button group'>
                    <Button>one</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup variant='text' orientation='vertical' color='primary' aria-label='vertical text primary button group'>
                    <Button>one</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <hr />
                <Checkboxes />
                <hr />
                <FloatActionButton />
                <hr />
                

            </div>
        </div>
    )
}