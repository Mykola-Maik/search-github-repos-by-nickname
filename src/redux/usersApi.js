import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://api.github.com/';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (search) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        }
      }),
    }),

    getRepositories: builder.query({
      query: (user) => ({
        url: `users/${user}/repos`,
      }),
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetRepositoriesQuery,
} = usersApi;