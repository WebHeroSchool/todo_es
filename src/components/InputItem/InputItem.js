import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () =>(<div>
         <TextField
             id="standard-helperText"
             label="Что нужно сделать?"
             defaultValue="Добавить задание"
             helperText="Планируй свою работу и работай над своим планом."
         />
    </div>
);


export default InputItem;