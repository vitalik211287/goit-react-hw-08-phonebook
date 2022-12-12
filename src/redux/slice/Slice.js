import { createSlice } from '@reduxjs/toolkit';



const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];



const Slice = createSlice({
  name: 'contacts',
  initialState: { value: contactList },
  reducers: {
    addContact(state, action) {
      console.log(action);
      state.value.push(action.payload);
    },
    deleteContact(state, action) {
        console.log(action);
         console.log(action);
     return { value: state.value.filter(({ id }) => id !== action.payload)};
    },
  },
});



export const { addContact, deleteContact, setContact } = Slice.actions;
export default Slice.reducer;
