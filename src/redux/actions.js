import { ADDEDBOOKING, SINGLEDELETED } from "./actionType";

export const addedBookings = (flightDetails) => {
  return {
    type: ADDEDBOOKING,
    payload: flightDetails,
  };
};

export const singledeleted = (flightId) => {
  return {
    type: SINGLEDELETED,
    payload: flightId,
  };
};
