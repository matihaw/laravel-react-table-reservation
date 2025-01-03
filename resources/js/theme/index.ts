import { createTheme } from '@mui/material'

const theme = createTheme({
    typography: {
        fontFamily: 'Helvetica Neue',
    },
    palette: {
        primary: {
            main: '#A83232', // Deep brick red
            light: '#D16262',
            dark: '#751919',
            contrastText: '#FFFFFF', // Ensures good readability
        },
        secondary: {
            main: '#FFB732', // Warm mustard yellow
            light: '#FFD963',
            dark: '#C78500',
            contrastText: '#000000',
        },
        background: {
            default: '#F8F5F2', // Soft beige
            paper: '#FFFFFF', // Crisp white for cards
        },
        text: {
            primary: '#2C2C2C', // Rich black for readability
            secondary: '#757575', // Soft gray for secondary text
        },
        error: {
            main: '#D32F2F', // Standard red for error
        },
        warning: {
            main: '#FF9800', // Warm orange for warnings
        },
        info: {
            main: '#0288D1', // Calming blue
        },
        success: {
            main: '#388E3C', // Fresh green
        },
    },
})

export default theme
