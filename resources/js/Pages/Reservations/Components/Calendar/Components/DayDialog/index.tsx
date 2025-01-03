import { Textarea } from '@headlessui/react'
import { useForm } from '@inertiajs/react'
import {
    Backdrop,
    CircularProgress,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import dayjs from 'dayjs'
import { FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface Props {
    setOpen: (state: string) => void
    date: string
}

type FormInterface = {
    name: string
    email: string
    phone: number | undefined
    number_of_people: number
    reservation_date_time: string
    message: string
}

interface AvailabilityResponse {
    reservation_date_time: string
}

const DayDialog = ({ date, setOpen }: Props) => {
    const [disabledDates, setDisabledDates] = useState([])
    const [maxPeople, setMaxPeople] = useState(20)
    const { data, setData, post, processing, reset } = useForm<FormInterface>({
        name: '',
        email: '',
        phone: undefined,
        number_of_people: 1,
        reservation_date_time: date,
        message: '',
    })

    const handleClose = () => {
        setOpen('')
        reset()
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        post(route('reservation.store'), {
            onError: () => {
                toast(
                    'There was an error processing your reservation. Please try again later.',
                )
            },
            onSuccess: () => {
                toast(
                    'The reservation has been stored. Please confirm via your email.',
                )
            },
            onFinish: () => {
                handleClose()
            },
        })
    }

    useEffect(() => {
        setData('reservation_date_time', date)

        if (!date) {
            return
        }

        axios
            .post<AvailabilityResponse[]>(route('reservation.availability'), {
                reservation_date_time: date,
            })
            .then(response => response.data)
            .then(data => {
                setDisabledDates(
                    data.map(d => dayjs(d.reservation_date_time).hour()),
                )
                setMaxPeople(
                    data.reduce(
                        (pertial, d) => pertial + d.number_of_people,
                        0,
                    ),
                )
            })
    }, [date])

    return (
        <>
            <Dialog open={!!date} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle>
                        Table Reservation for:{' '}
                        {dayjs(date).format('dddd, MMMM D, YYYY')}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill in your details to make a table
                            reservation.
                        </DialogContentText>
                        <TextField
                            fullWidth
                            margin="dense"
                            label="Name"
                            variant="outlined"
                            value={data.name}
                            required
                            onChange={e => setData('name', e.target.value)}
                        />
                        <TextField
                            fullWidth
                            margin="dense"
                            label="Email"
                            variant="outlined"
                            value={data.email}
                            type="email"
                            required
                            onChange={e => setData('email', e.target.value)}
                        />
                        <TextField
                            fullWidth
                            margin="dense"
                            label="Phone Number"
                            variant="outlined"
                            value={data.phone}
                            type="number"
                            required
                            onChange={e => setData('phone', +e.target.value)}
                        />
                        <FormControl
                            fullWidth
                            margin="dense"
                            variant="outlined"
                            required
                        >
                            <InputLabel>Number of People</InputLabel>
                            <Select
                                value={data.number_of_people}
                                onChange={e =>
                                    setData('number_of_people', +e.target.value)
                                }
                                label="Number of People"
                            >
                                {[...Array(8).keys()].map(
                                    i =>
                                        1 + i + maxPeople < 15 && (
                                            <MenuItem key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </MenuItem>
                                        ),
                                )}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="dense">
                            <InputLabel>Time</InputLabel>
                            <Select
                                value={data.phone}
                                onChange={e => {
                                    setData(
                                        'reservation_date_time',
                                        dayjs(data.reservation_date_time)
                                            .hour(+e.target.value)
                                            .format('YYYY-MM-DD HH:mm:ss'),
                                    )
                                }}
                                label="Number of People"
                            >
                                <MenuItem disabled>
                                    Select Reservation Time
                                </MenuItem>
                                {[...Array(9).keys()].map(i => (
                                    <MenuItem
                                        key={i + 10}
                                        value={i + 10}
                                        disabled={disabledDates.includes(
                                            i + 10,
                                        )}
                                    >
                                        {i + 10}
                                        {disabledDates.includes(i + 10) &&
                                            ' Already reserved'}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth margin="dense">
                            <Textarea
                                placeholder="Type your message…"
                                value={data.message}
                                required
                                onChange={e =>
                                    setData('message', e.target.value)
                                }
                            />
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            disabled={processing}
                        >
                            Reserve
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
            <Backdrop
                sx={theme => ({
                    color: '#fff',
                    zIndex: theme.zIndex.drawer + 1,
                })}
                open={processing}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default DayDialog
