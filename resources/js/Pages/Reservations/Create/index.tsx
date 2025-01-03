import MainLayout from '@/Layouts/MainLayout'
import Calendar from '@/Pages/Reservations/Components/Calendar'
import Footer from '@/Pages/Reservations/Components/Footer'
import ReviewsSlider from '@/Pages/Reservations/Components/ReviewsSlider'
import theme from '@/theme'
import { Box, Container, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { grey, orange } from '@mui/material/colors'

export default function Create() {
    return (
        <MainLayout>
            <Box
                component="main"
                sx={{
                    background: `linear-gradient(0deg, rgba(168,50,50,1) 0%, rgba(0,0,0,1) 100%) no-repeat, ${orange[100]}`,
                    backgroundSize: {
                        xs: '100% 255px, 100% calc(100% - 255px)',
                        sm: '100% 375px, 100% calc(100% - 375px)',
                        md: '100% 570px, 100% calc(100% - 570px)',
                        lg: '100% 680px, 100% calc(100% - 680px)',
                    },
                }}
            >
                <Container sx={{ padding: 4 }}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Grid container spacing={4}>
                                <Grid
                                    size={12}
                                    sx={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            typography: { xs: 'h4', md: 'h1' },
                                        }}
                                        color={theme.palette.primary.main}
                                    >
                                        Don't Waste
                                    </Typography>
                                    <Typography
                                        sx={{
                                            typography: { xs: 'h4', md: 'h1' },
                                        }}
                                        color={theme.palette.background.paper}
                                    >
                                        Your Time!
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={4}>
                                <Grid
                                    size={12}
                                    sx={{
                                        minHeight: 165,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src="/images/burger.png"
                                        alt="Burger image"
                                        loading="eager"
                                        sx={{
                                            margin: 'auto',
                                            width: {
                                                xs: 228,
                                                sm: 400,
                                                md: 560,
                                                lg: 'auto',
                                            },
                                            height: 'auto',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box
                                sx={{
                                    paddingTop: 4,
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    flexDirection: 'column',
                                    width: '100%',
                                    height: '100%',
                                    background: grey[900],
                                    borderRadius: 8,
                                    boxShadow:
                                        'inset 0px 0px 70px 0px rgb(0 0 0), 0px 0px 50px 0px rgba(0, 0, 0, 1)',
                                }}
                            >
                                <Typography
                                    color={theme.palette.secondary.main}
                                    sx={{
                                        textAlign: 'center',
                                        typography: { xs: 'h5', md: 'h3' },
                                        fontWeight: '600 !important',
                                    }}
                                >
                                    Reserve now!
                                </Typography>
                                <Calendar />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="xl" sx={{ paddingBottom: 4 }}>
                    <Stack spacing={2}>
                        <Typography
                            color={theme.palette.primary.main}
                            sx={{
                                textAlign: 'center',
                                typography: { xs: 'h5', md: 'h3' },
                                fontWeight: '600 !important',
                            }}
                        >
                            9 out of 10 satisfied gourmets"
                        </Typography>
                        <ReviewsSlider />
                    </Stack>
                </Container>
            </Box>
            <Footer />
        </MainLayout>
    )
}
