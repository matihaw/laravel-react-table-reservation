import MainLayout from '@/Layouts/MainLayout'
import { Reservation } from '@/types'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import { Box } from '@mui/material'
import {
    DataGrid,
    getGridStringOperators,
    GridActionsCellItem,
    GridColDef,
    GridRowId,
} from '@mui/x-data-grid'
import axios from 'axios'
import dayjs from 'dayjs'
import { useState } from 'react'
import { toast } from 'react-toastify'

interface Props {
    reservations: Array<Reservation>
}

const Index = ({ reservations }: Props) => {
    const [rows, setRows] = useState(reservations)

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
            editable: false,
            filterable: true,
            pinnable: false,
            hideable: false,
            filterOperators: getGridStringOperators().filter(
                operator => operator.value === 'equals',
            ),
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            editable: false,
            pinnable: false,
            hideable: false,
            sortable: false,
            filterOperators: getGridStringOperators().filter(
                operator => operator.value === 'contains',
            ),
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: false,
            sortable: false,
            pinnable: false,
            hideable: false,
            disableColumnMenu: true,
            filterOperators: getGridStringOperators().filter(
                operator => operator.value === 'contains',
            ),
        },
        {
            field: 'number_of_people',
            headerName: 'No. of People',
            width: 160,
            editable: false,
            filterable: false,
            pinnable: false,
            hideable: false,
        },
        {
            field: 'message',
            headerName: 'Message',
            width: 350,
            editable: false,
            filterable: false,
            pinnable: false,
            hideable: false,
            sortable: false,
            disableColumnMenu: true,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 160,
            editable: false,
            sortable: false,
            pinnable: false,
            hideable: false,
            disableColumnMenu: true,
            filterOperators: getGridStringOperators().filter(
                operator => operator.value === 'equals',
            ),
        },
        {
            field: 'reservation_date_time',
            headerName: 'Reservation Date',
            width: 200,
            renderCell: params =>
                dayjs(params.value).format('YYYY-MM-DD HH:mm'), // Format date/time using dayjs
            editable: false,
            filterable: false,
            pinnable: false,
            hideable: false,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
            editable: true,
            filterable: false,
            pinnable: false,
            hideable: false,
            sortable: false,
            disableColumnMenu: true,
            type: 'singleSelect',
            valueOptions: ['pending', 'confirmed'],
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        key={id}
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ]
            },
        },
    ]

    const handleDeleteClick = (id: GridRowId) => () => {
        axios.delete(route('reservation.destroy', id)).then(response => {
            if (response.status === 204) {
                toast(`The reservation (ID: ${id}) has been deleted.`)
            }
        })

        setRows(rows.filter(row => row.id !== id))
    }

    const handleProcessRowUpdate = async (data: Reservation) => {
        axios
            .patch(route('reservation.update', data.id), data)
            .then(response => {
                if (response.status === 204) {
                    toast(`The reservation (ID: ${data.id}) has been updated.`)
                }
            })

        return data
    }

    return (
        <MainLayout>
            <Box sx={{ p: 3 }}>
                <Box
                    sx={{
                        width: '100%',
                        '& .status-confirmed': {
                            backgroundColor: '#d4edda',
                            color: '#155724',
                        },
                        '& .status-pending': {
                            backgroundColor: '#fff3cd',
                            color: '#856404',
                        },
                        '& .status-cancelled': {
                            backgroundColor: '#f8d7da',
                            color: '#721c24',
                        },
                    }}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        processRowUpdate={handleProcessRowUpdate}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 10 } },
                            sorting: {
                                sortModel: [
                                    {
                                        field: 'reservation_date_time',
                                        sort: 'asc',
                                    },
                                ],
                            },
                        }}
                        pageSizeOptions={[5, 10, 20, 50, 100]}
                        disableColumnSelector
                        disableRowSelectionOnClick
                        sx={{
                            border: '1px solid #ddd',
                            borderRadius: 2,
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: '#f5f5f5',
                                fontWeight: 'bold',
                            },
                            '& .MuiDataGrid-cell': {
                                fontSize: '0.9rem',
                            },
                        }}
                    />
                </Box>
            </Box>
        </MainLayout>
    )
}

export default Index
