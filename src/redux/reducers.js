import { ADDEDBOOKING, SINGLEDELETED } from "./actionType";
import initialState from "./initializeState";

const nextBookingId = (bookings) => {
  const maxId = bookings.reduce(
    (maxId, bookings) => Math.max(bookings.id, maxId),
    -1
  );
  return maxId + 1;
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDEDBOOKING:
      if (state.length >= 3) {
        return state;
      }
      return [
        ...state,
        {
          id: nextBookingId(state),
          ...action.payload,
        },
      ];
    case SINGLEDELETED:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
export default reducers;
