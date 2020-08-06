import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import { Box, Container,CssBaseline, Icon, makeStyles, Grid, IconButton,FormLabel, FormControlLabel, Radio, RadioGroup, Paper, ButtonGroup,  Typography, Button,Hidden } from '@material-ui/core';
import './App.css';
import GridWrap from './GridWrap';
import GridImages from './GridImages';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow:1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper:{
    height: 140,
    width:100,
  },
  control:{
    padding: theme.spacing(2)
  },
  paper_grid: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  input: {
    display: 'none',
  }, 
}));

function App() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (e)=>{
    setSpacing(Number(e.target.value))
  }

  
  return (
    <div>
        

        <React.Fragment>
        <CssBaseline />
          <Container fixed>
            <Typography component="div" style={{backgroundColor:'#fff'}}>
            </Typography>
          </Container>
          <div className={classes.root}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                        <Box component="span" m={1}>
                          <Button variant="contained" color="primary">
                            Hello! I am XS-4 Grid 1? Below.
                          </Button>
                          <Button  />
                        </Box>
                        <hr />
                        <Grid container  className={classes.root} spacing={2}>
                            <Grid item xs={12}>
                                <Grid container  justify="center" spacing={spacing}>
                                  {[0,1,2,3,4].map((value)=>(
                                    <Grid key={value} item>
                                        <Paper className={classes.paper}></Paper>
                                    </Grid>
                                  ))}
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                              <Paper className={classes.control}>
                                    <Grid container>
                                      <Grid item>
                                        <FormLabel>Spacing</FormLabel>
                                        <RadioGroup
                                        name="spacing"
                                        aria-label="spacing"
                                        value={spacing.toString()}
                                        onChange={handleChange}
                                        row
                                        >
                                            {[0,1,2,3,4,5,6,7,8,9,10].map((v)=>(
                                              <FormControlLabel
                                              key={v}
                                              value={v.toString()}
                                              control={<Radio />}
                                              label={v.toString()}

                                              >
                                                
                                              </FormControlLabel>
                                            ))}
                                        </RadioGroup>
                                      </Grid>
                                    </Grid>
                              </Paper>
                        </Grid>
                        <hr />
                        {
                          /**
                           Responsive grid layout
                          **/
                        }
                        <p>Practing Grid responsive layout below</p>
                        <div className={classes.root}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Hidden xlUp>
                                <Paper className={classes.paper_grid}>
                                  XS-12
                                  <hr />
                                      <Button  variant="contained">DEFAULT</Button>&nbsp;
                                      <Button  variant="contained" color="primary">PRIMARY</Button>&nbsp;
                                      <Button  variant="contained" color="secondary">SECONDARY</Button>&nbsp;
                                      <Button  variant="contained" disabled >DISABLED</Button>&nbsp;
                                      <Button  variant="contained" color="primary" href="#contained-buttons">URL</Button>&nbsp;
                                      <hr />
                                      <Button  variant="contained" color="primary" disableElevation >DISABLE ELEVATION</Button>&nbsp;
                                      <hr />
                                      <Button >DEFAULT</Button>&nbsp;
                                      <Button   color="primary">PRIMARY</Button>&nbsp;
                                      <Button   color="secondary">SECONDARY</Button>&nbsp;
                                      <Button   disabled >DISABLED</Button>&nbsp;
                                      <Button   color="primary" href="#contained-buttons">URL</Button>&nbsp;
                                      <hr />
                                      <Button  variant="outlined">DEFAULT</Button>&nbsp;
                                      <Button  variant="outlined" color="primary">PRIMARY</Button>&nbsp;
                                      <Button  variant="outlined" color="secondary">SECONDARY</Button>&nbsp;
                                      <Button  variant="outlined" disabled >DISABLED</Button>&nbsp;
                                      <Button  variant="outlined" color="primary" href="#contained-buttons">URL</Button>&nbsp;
                                      <hr />
                                      <input 
                                      Accept="image/*"
                                      className={classes.input}
                                      id="contained-button-file"
                                      type="file"
                                      multiple
                                      />
                                      <label htmlFor="contained-button-file">
                                            <Button variant="contained" color="primary" component="span">
                                              Upload
                                            </Button>
                                      </label>
                                      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                      <label htmlFor="icon-button-file">
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                          <PhotoCamera />
                                        </IconButton>
                                      </label>
                                      <hr />
                                      <Button  size="small" variant="outlined">DEFAULT</Button>&nbsp;
                                      <Button  size="medium" variant="outlined" color="primary">PRIMARY</Button>&nbsp;
                                      <Button  size="large" variant="outlined" color="secondary">SECONDARY</Button>&nbsp;
                                      <Button  variant="outlined" disabled >DISABLED</Button>&nbsp;
                                      <Button  variant="outlined" color="primary" href="#contained-buttons">URL</Button>&nbsp;

                                        <div>
                                          <IconButton aria-label="delete" className={classes.margin} size="small">
                                            <ArrowDownwardIcon fontSize="inherit" />
                                          </IconButton>
                                          <IconButton aria-label="delete" className={classes.margin}>
                                            <DeleteIcon fontSize="small" />
                                          </IconButton>
                                          <IconButton aria-label="delete" className={classes.margin}>
                                            <DeleteIcon />
                                          </IconButton>
                                          <IconButton aria-label="delete" className={classes.margin}>
                                            <DeleteIcon fontSize="large" />
                                          </IconButton>
                                        </div>
                                      <hr />
                                      
                                      
                                  </Paper>

                              </Hidden>
                            </Grid>
                            <Grid item xs={6}>
                              <Paper className={classes.paper_grid}>
                                 XS-6
                              </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper_grid}>XS-6</Paper>
                            </Grid>
                            <Grid item xs={4}>
                              <Paper className={classes.paper_grid}>XS-4</Paper>
                            </Grid>
                            <Grid item xs={4}>
                              <Paper className={classes.paper_grid}>XS-4</Paper>
                            </Grid>
                            <Grid item xs={4}>
                              <Paper className={classes.paper_grid}>XS-4</Paper>
                            </Grid>
                          </Grid>
                        </div>
                </Grid>
                {
                  //End of Grid 4 1
                }
                
                <Grid item xs={4}>
                  <Box component="span" m={1}>
                    <Button variant="contained" color="secondary">
                      Hello! I am XS-4 Grid 2? Below.
                    </Button>
                    <Button  />
                  </Box>
                  <hr />
                  <GridWrap />
                  <hr />
                  <GridImages />
                  <hr />
                </Grid>
              </Grid>
          </div>
        </React.Fragment>
        
    </div>
  );
}

export default App;
