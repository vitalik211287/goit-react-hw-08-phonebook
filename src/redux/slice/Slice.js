import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  providesTags: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://639f2b765eb8889197f61ebc.mockapi.io/',
  }),
  reducerPath: 'contactsApi',

  endpoints: build => ({
    getContacts: build.query({
      query: () => `Contacts`,
      providesTags: ['Contacts'],
    }),

    addContacts: build.mutation({
      query: contact => ({
        url: `Contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContactbyId: build.mutation({
      query: contact => ({
        url: `contacts/${contact.id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContacts: build.mutation({
      query: id => ({
        url: `Contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});


export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactApi;


