import {
  ADD_DATA_DOCTOR_ONBOARD,
  DELETE_DOCTOR_DATA,
  EDIT_DOCTOR_DATA,
  GET_DOCTORS_DATA,
} from "./actionTypes";

const intitalState = {
  doctors: null,
};

export const doctorReducers = (state = intitalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DOCTORS_DATA:
      return { ...state, doctors: payload };
    case EDIT_DOCTOR_DATA:
      const updetedData = state.doctors.map((elm) =>
        elm._id === payload._id ? payload : elm
      );

      return { doctors: updetedData };
    case DELETE_DOCTOR_DATA:
      const Deleted = state.doctors.map((elm) =>
        elm._id !== payload._id ? elm : ""
      );

      return { doctors: Deleted };
    case ADD_DATA_DOCTOR_ONBOARD:
      return { ...state, payload };
    default:
      return state;
  }
};
