import axios from "axios";
import { getRequest, getSuccess, getFailed, getError } from "./noticeSlice";
const REACT_APP_BASE_URL = "https://school-admision-mern-backend.onrender.com";

export const getAllNotices = (id, address) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(
      `${REACT_APP_BASE_URL}/${address}List/${id}`
    );
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const getNotice = (id) => async (dispatch) => {
  dispatch(getRequest());
  try {
    const result = await axios.get(`${REACT_APP_BASE_URL}/singlenotice/${id}`);
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const updateNotice = (id, data) => async (dispatch) => {
  dispatch(getRequest());
  try {
    const result = await axios.put(
      `${REACT_APP_BASE_URL}/updatenotice/${id}`,
      data
    ); 
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const deleteNotice = (id, address) => async (dispatch) => {
  dispatch(getRequest());
  try {
    const result = await axios.delete(`${REACT_APP_BASE_URL}/${address}/${id}`);
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const deleteAllNotice = (id, address) => async (dispatch) => {
  dispatch(getRequest());
  try {
    const result = await axios.delete(`${REACT_APP_BASE_URL}/${address}/${id}`);
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};
