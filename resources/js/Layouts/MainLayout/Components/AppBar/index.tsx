import { Link } from '@inertiajs/react'
import { Button, AppBar as MuiAppBar, Toolbar } from '@mui/material'

const AppBar = () => {
    return (
        <MuiAppBar position="static">
            <Toolbar>
                <Link href={route('reservation.create')} as="div">
                    <Button
                        variant="text"
                        sx={{
                            color: '#fff',
                        }}
                    >
                        Home
                    </Button>
                </Link>

                <Link href={route('reservation.index')} as="div">
                    <Button
                        variant="text"
                        sx={{
                            color: '#fff',
                        }}
                    >
                        Reservations
                    </Button>
                </Link>
                <Link
                    href={route('logout')}
                    method="post"
                    as="div"
                    className="ml-auto"
                >
                    <Button
                        sx={{
                            color: '#fff',
                            marginLeft: 'auto',
                        }}
                    >
                        Logout
                    </Button>
                </Link>
            </Toolbar>
        </MuiAppBar>
    )
}

export default AppBar
