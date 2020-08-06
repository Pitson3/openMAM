import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Avatar, Typography} from '@material-ui/core';

const useStyles = makeStyles((t)=>({
    root: {
        flexGrow:1,
        overflow:'hidden',
        padding:t.spacing(0,3)
    },
    Paper:{
        maxWidth:400,
        margin: `${t.spacing(1)}px auto`,
        padding:t.spacing(2),

    }
}));

const message = "Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.";

export default function GridWrap(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>P</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth >
                        <Typography noWrap>
                            {message}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>P</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography noWrap>
                            {message}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>P</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            {message}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}