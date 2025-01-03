import MainLayout from '@/Layouts/MainLayout'
import { Box, Button, Container, Typography } from '@mui/material'
import { CalendarEvent, google } from 'calendar-link'
import dayjs from 'dayjs'

interface Props {
    header: string
    date: string
}

const Confirmation = ({ header, date }: Props) => {
    const handleClick = () => {
        return google(event(date))
    }

    const event = date => {
        return {
            title: 'Reservation in Fatters',
            start: dayjs(date).toISOString(),
            duration: [1, 'hour'],
            location: 'Fatters',
        } as CalendarEvent
    }

    return (
        <MainLayout>
            <Container sx={{ textAlign: 'center', py: 6 }}>
                <Box
                    component="img"
                    src="/images/burger.png"
                    alt="Burger image"
                    loading="eager"
                    sx={{
                        margin: 'auto',
                        width: 228,
                        height: 'auto',
                        mb: 4,
                    }}
                />

                <Typography variant="h4" color="primary" gutterBottom>
                    {header}
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={4}>
                    Thank you for reserving with us. We look forward to serving
                    you!
                </Typography>

                <Button
                    component="a"
                    target="blank"
                    variant="contained"
                    href={handleClick()}
                >
                    Save in google
                </Button>
            </Container>
        </MainLayout>
    )
}

export default Confirmation
