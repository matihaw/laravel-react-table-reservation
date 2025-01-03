import { Box } from '@mui/material'
import { orange } from '@mui/material/colors'

const Background = () => {
    return (
        <>
            <Box
                sx={{
                    zIndex: '-1',
                    position: 'absolute',
                    width: '100%',
                    height: { xs: 255, sm: 375, md: 570, lg: 680 },
                    background:
                        'linear-gradient(0deg, rgba(168,50,50,1) 0%, rgba(0,0,0,1) 100%)',
                }}
            ></Box>
            <Box
                sx={{
                    zIndex: '-1',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: {
                        xs: 'calc(100% - 255px)',
                        sm: 'calc(100% - 375px)',
                        md: 'calc(100% - 570px)',
                        lg: 'calc(100% - 680px)',
                    },
                    top: { xs: 255, sm: 375, md: 570, lg: 680 },
                    background: orange[100],
                    boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 1)',
                }}
            ></Box>
        </>
    )
}

export default Background
