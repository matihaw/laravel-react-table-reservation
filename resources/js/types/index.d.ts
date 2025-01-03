import dayjs from 'dayjs'
import { Config } from 'ziggy-js'

export interface User {
    id: number
    name: string
    email: string
    email_verified_at?: string
}

export interface Reservation {
    id: number
    name: string
    email: string
    number_of_people: number
    message: string
    phone: string
    reservation_date_time: dayjs.Dayjs
    status: string
}

export interface Paginator<T> {
    current_page: number
    data: Array<T>
    first_page_url: string
    from: number
    last_page: number
    last_page_url: number
    links: {
        url: string
        label: string
        activate: boolean
    }
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: string
    to: number
    total: number
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User
    }
    ziggy: Config & { location: string }
}
