import {
  ADD_DATA_DOCTOR_ONBOARD,
  EDIT_DOCTOR_DATA,
  GET_DOCTORS_DATA,
} from "./actionTypes";

import axios from "axios";

export const getAppointmentsData = () => async (dispatch) => {
  try {
    const data = await axios.get(
      "https://masai-hospital-backend-6ckm.onrender.com/appointments"
    );
    console.log(data);
    dispatch({
      type: GET_DOCTORS_DATA,
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const OnboardDoctorData = (data) => async (dispatch) => {
  try {
    console.log(data);
    const datas = await axios.post(
      "https://masai-hospital-backend-6ckm.onrender.com/appointments",
      data
    );
    dispatch({
      type: ADD_DATA_DOCTOR_ONBOARD,
      payload: datas.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAppointment = (id) => async (dispatch) => {
  console.log(id);
  try {
    const data = await axios.delete(
      `https://masai-hospital-backend-6ckm.onrender.com/appointments/${id}`
    );
    console.log(data);
    dispatch({
      type: EDIT_DOCTOR_DATA,
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editAppointmentsData = (dataAppoin, id) => async (dispatch) => {
  console.log(dataAppoin, id);
  try {
    const data = await axios.put(
      `https://masai-hospital-backend-6ckm.onrender.com/appointments/${id}`,
      dataAppoin
    );
    console.log(data);
    dispatch({
      type: EDIT_DOCTOR_DATA,
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
  }
};
