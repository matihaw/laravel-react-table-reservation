import MainLayout from '@/Layouts/MainLayout'
import Footer from '@/Pages/Reservations/Components/Footer'
import { Head, useForm } from '@inertiajs/react'
import { Box, Button, Container, Stack } from '@mui/material'
import TextField from '@mui/material/TextField'
import { FormEventHandler } from 'react'

const Login = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    const submit: FormEventHandler = e => {
        console.log('asdasdasd')
        e.preventDefault()

        post(route('login'), {
            onFinish: () => reset('password'),
        })
    }

    return (
        <MainLayout>
            <Head title="Log in" />
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Container>
                    <Box
                        component="img"
                        src="/images/burger.png"
                        sx={{
                            margin: 'auto',
                            marginTop: 16,
                            marginBottom: 4,
                            width: {
                                xs: 228,
                            },
                        }}
                    />
                    <Box
                        component="form"
                        onSubmit={submit}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Stack spacing={2} sx={{ maxWidth: 300 }}>
                            <TextField
                                label="Email"
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                fullWidth
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={e =>
                                    setData('password', e.target.value)
                                }
                            />
                            <Button type="submit" disabled={processing}>
                                Log in
                            </Button>
                        </Stack>
                    </Box>
                </Container>
                <Footer />
            </Box>
        </MainLayout>
    )
}

export default Login
