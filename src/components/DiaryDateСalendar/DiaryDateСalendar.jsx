import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import { DatePickerStyled } from './DiaryDateСalendar.styled';
import { getSelectDate } from 'redux/info/info-slice';
import { useDispatch } from 'react-redux';
import { getInfoForDay } from 'redux/info/info-operations';

export default function DiaryDateCalendar() {
  const now = dayjs().format('DD.MM.YYYY');
  const dispatch = useDispatch();
  const [date, setDate] = useState(now);

  useEffect(() => {
    const formatNow = dayjs().format('YYYY-MM-DD');
    const dateObject = { date: formatNow };
    dispatch(getInfoForDay(dateObject));
    dispatch(getSelectDate(dateObject));
  }, [dispatch]);

  const handleChange = newDate => {
    const newDateFormat = newDate.format('YYYY-MM-DD');
    setDate(newDateFormat);
    const dateObject = { date: newDateFormat };
    dispatch(getInfoForDay(dateObject));
    dispatch(getSelectDate(dateObject));
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePickerStyled
          label={now}
          inputFormat="DD.MM.YYYY"
          minDate={dayjs('2023-01-01')}
          value={date}
          onChange={handleChange}
          renderInput={props => <TextField {...props} />}
        />
      </LocalizationProvider>
    </>
  );
}
