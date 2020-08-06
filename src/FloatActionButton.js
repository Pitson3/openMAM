import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Fab, FormControl, FormGroup } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) =>({
    root: {
        '& > *' : {
            margin : theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight : theme.spacing(1),
    }
}));

export default function FloatActionButton(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Fab color='primary' aria-label='add'>
                <AddIcon />
            </Fab>
            <Fab color='secondary' aria-label='edit'>
                <EditIcon />
            </Fab>
            <Fab color='primary' variant='extended'>
                <NavigationIcon  className={classes.extendedIcon} />
                Navigate
            </Fab>
            <Fab disabled aria-label='like'>
                <FavoriteIcon />
            </Fab>
            <hr />
            <FormGroup aria-label='position' row>
                <Fab size='small' color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
                <Fab size='medium' color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
                <Fab color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
            </FormGroup>
        </div>
    )
}