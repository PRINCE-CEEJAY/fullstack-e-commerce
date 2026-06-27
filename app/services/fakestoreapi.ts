import {createApi} from "@reduxjs/toolkit"
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseQuery: 'https://fakestoreapi.com'})
})