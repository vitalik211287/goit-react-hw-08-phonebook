import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com/',
  prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
console.log(baseQuery);
export const contactApi = createApi({
  reducerPath: 'contactsApi',
  providesTags: ['Contacts'],
  baseQuery,

  endpoints: build => ({
    getContacts: build.query({
      query: () => 'contacts',
      url: `users`,
    }),

    addContacts: build.mutation({
      query: contact => ({
        url: `contacts/`,
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
