import { Box, TextField } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import { DatePickerStyled } from './DiaryDateСalendar.styled';



export default function DiaryDateCalendar() {
  const [value, setValue] = useState(null);
  const now = dayjs().format('DD.MM.YYYY')
  console.log(now)
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePickerStyled
        sx={{borderColor:"red"}}
          label={now}
          inputFormat='DD.MM.YYYY'
          minDate={dayjs('2023-01-01')}
          value={value}
          onChange={newValue => setValue(newValue)}
          renderInput={props => <TextField {...props} />}
        />
      </LocalizationProvider>
    </Box>
  );
}