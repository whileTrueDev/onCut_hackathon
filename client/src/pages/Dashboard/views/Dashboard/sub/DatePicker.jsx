
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import koLocale from 'date-fns/locale/ko';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(2),
    width: '60%',
  },

}));

export default function MaterialUIPickers(props) {
  const { selectedDate, handleDateChange } = props;
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
      <Grid container className={classes.grid}>
        <DatePicker
          autoOk
          label="날짜 선택"
          format="MM월 dd일"
          inputVariant="standard"
          orientation="landscape"
          variant="inline"
          openTo="date"
          PopoverProps={{ anchorOrigin: { horizontal: 'right', vertical: 'bottom' } }}
          value={selectedDate}
          onChange={handleDateChange}
          disableToolbar
          disableFuture
        />

      </Grid>
    </MuiPickersUtilsProvider>
  );
}
