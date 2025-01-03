import AppBar from '@/Layouts/MainLayout/Components/AppBar'
import theme from '@/theme'
import { usePage } from '@inertiajs/react'
import { ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Props {
    children: ReactNode
}

const MainLayout = ({ children }: Props) => {
    const { auth } = usePage().props

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer />
            {!!auth.user && <AppBar />}
            {children}
        </ThemeProvider>
    )
}

export default MainLayout
