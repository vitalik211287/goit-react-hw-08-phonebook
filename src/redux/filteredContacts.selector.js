function getFilteredContacts(state) {
  const { value, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  return value.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
}
export default getFilteredContacts;
