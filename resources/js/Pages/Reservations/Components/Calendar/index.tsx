import DayDialog from '@/Pages/Reservations/Components/Calendar/Components/DayDialog'
import theme from '@/theme'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { PickerSelectionState } from '@mui/x-date-pickers/internals'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import { useState } from 'react'

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState<string>('')

    const onDayChange = (
        value: dayjs.Dayjs | null,
        selectionState: PickerSelectionState | undefined,
    ) => {
        if (selectionState === 'finish' && value)
            setSelectedDate(value.format('YYYY-MM-DD HH:mm:ss'))
    }

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    minDate={dayjs().add(1, 'week')}
                    maxDate={dayjs().add(1, 'year')}
                    onChange={onDayChange}
                    sx={{
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        width: '100%',
                        height: '100%',
                        maxHeight: 468,
                        overflow: 'hidden',
                        '& .MuiYearCalendar-root ': {
                            width: '100%',
                            '& .MuiPickersYear-root': {
                                flexBasis: '25%',
                            },
                            '& .MuiPickersYear-yearButton': {
                                color: theme.palette.primary.main,
                                fontSize: '1.2rem',
                                fontWeight: '600',
                            },
                        },
                        '& .MuiDayCalendar-header': {
                            display: 'flex',
                            justifyContent: 'space-between',
                        },
                        '& .MuiDayCalendar-weekContainer ': {
                            display: 'flex',
                            justifyContent: 'space-between',
                        },
                        '& .MuiTypography-root': {
                            color: theme.palette.primary.light,
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            width: 50,
                            height: 56,
                        },
                        '& .MuiPickersDay-root': {
                            color: theme.palette.primary.main,
                            fontSize: '1.4rem',
                            fontWeight: 'bold',
                            width: 50,
                            height: 50,
                            '&.Mui-disabled': {
                                color: '#000',
                            },
                            '&.MuiPickersDay-today': {
                                borderColor: theme.palette.primary.dark,
                                color: '#ffffff',
                            },
                            '&.Mui-selected': {
                                backgroundColor: theme.palette.primary.main,
                                color: '#ffffff',
                                '&:hover': {
                                    backgroundColor:
                                        theme.palette.primary.light,
                                },
                            },
                            '&:hover': {
                                backgroundColor: '#ffe0dc',
                            },
                        },
                        '& .MuiPickersCalendarHeader-root': {
                            backgroundColor: theme.palette.primary.main,
                            color: '#ffffff',
                            borderRadius: '8px 8px 0 0',
                            padding: '8px',
                        },
                        '& .MuiPickersCalendarHeader-label': {
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        },
                        '& .MuiPickersSlideTransition-root': {
                            minHeight: 316,
                        },
                        [theme.breakpoints.down('md')]: {
                            padding: '16px',
                            '& .MuiTypography-root': {
                                fontSize: '1rem',
                                width: 40,
                                height: 44,
                            },
                            '& .MuiPickersDay-root': {
                                fontSize: '1.2rem',
                                width: 44,
                                height: 44,
                            },
                            '& .MuiPickersCalendarHeader-label': {
                                fontSize: '1rem',
                            },
                            '& .MuiPickersSlideTransition-root': {
                                minHeight: 200,
                            },
                        },
                    }}
                />
                <DayDialog date={selectedDate} setOpen={setSelectedDate} />
            </LocalizationProvider>
        </>
    )
}

export default Calendar
