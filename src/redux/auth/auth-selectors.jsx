const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshing = state => state.auth.user.isRefreshing;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
  getIsFetchingCurrentUser,
};
export default authSelectors;