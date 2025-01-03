import theme from '@/theme'
import { Box, Container, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: grey[900],
                color: theme.palette.background.paper,
                padding: 4,
                boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Container>
                <Box
                    sx={{
                        textAlign: 'center',
                        marginTop: 1,
                        borderTop: `1px solid ${grey[700]}`,
                        paddingTop: 2,
                    }}
                >
                    <Typography
                        variant="body2"
                        color={theme.palette.background.paper}
                    >
                        © {new Date().getFullYear()} Fatters. All rights
                        reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
