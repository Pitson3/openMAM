import React from 'react';
import { Checkbox,  FormControlLabel} from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

export default function Checkboxes(){
    const [checked, setChecked] = React.useState(true);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    };

    return(
        <div>
            <Checkbox 
             checked = {checked}
             onChange = {handleChange}
             inputProps = {{'aria-label' : 'primary checkbox'}}
            />
            <Checkbox inputProps = {{'aria-label' : 'uncontrolled-checkbox'}} />
            <Checkbox disabled  inputProps = {{'aria-label' : 'disabled checkbox'}} />
            <Checkbox defaultChecked indeterminate color='default' inputProps = {{'aria-label' : 'indeterminate checkbox'}} />
            <FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                label="Custom icon"
            />
        </div>
    );
}