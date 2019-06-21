/**
 * Logged-in user details
 *
 * Currntly works with dummy data only
 */
const initialState = {
  userId: 123
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
