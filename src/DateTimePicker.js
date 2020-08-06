
//import 'date-fns';
import React from 'react';



import DateFnsUtils from '@date-io/date-fns';

import { Grid } from '@material-ui/core';
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker,} from '@material-ui/pickers';

export default function DateTimePicker(){
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-07-10T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return(
        <MuiPickersUtilsProvider >
            <Grid container justify='space-around'>
                <KeyboardDatePicker 
                    disableToolbar
                    variant = 'inline'
                    format ='MM/dd/yyyy' 
                    margin = 'normal'
                    id='date-picker-inline'
                    label = 'Date picker inline'
                    value = {selectedDate}
                    onChange = {handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                />
                <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
                <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );

}


