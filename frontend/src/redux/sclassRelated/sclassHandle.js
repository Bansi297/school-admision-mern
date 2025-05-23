import axios from "axios";
import {
  getRequest,
  getSuccess,
  getFailed,
  getError,
  getStudentsSuccess,
  detailsSuccess,
  getFailedTwo,
  getSubjectsSuccess,
  getSubDetailsSuccess,
  getSubDetailsRequest,
  getTeacherSuccess,
  getTeaherFailed,
} from "./sclassSlice";
const REACT_APP_BASE_URL = "https://school-admision-mern-backend.onrender.com";

export const getAllSclasses = (id, address) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(
      `${REACT_APP_BASE_URL}/${address}List/${id}`
    );
    if (result.data.message) {
      dispatch(getFailedTwo(result.data.message));
    } else {
      dispatch(getSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};
export const deleteSingleClass = (id) => async (dispatch) => {
  dispatch(getRequest());
  try {
    const result = await axios.delete(`${REACT_APP_BASE_URL}/Sclass/${id}`);
    if (result.data.message) {
      dispatch(getFailedTwo(result.data.message));
    } else {
      dispatch(getSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const deleteAllClasses = (id) => async (dispatch) => {
  dispatch(getRequest());
  try {
    const result = await axios.delete(`${REACT_APP_BASE_URL}/Sclasses/${id}`);
    if (result.data.message) {
      dispatch(getFailedTwo(result.data.message));
    } else {
      dispatch(getSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const getClassStudents = (id) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(
      `${REACT_APP_BASE_URL}/Sclass/Students/${id}`
    );
    if (result.data.message) {
      dispatch(getFailedTwo(result.data.message));
    } else {
      dispatch(getStudentsSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const getClassDetails = (id, address) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(`${REACT_APP_BASE_URL}/${address}/${id}`);
    if (result.data) {
      dispatch(detailsSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const getSubjectList = (id, address) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(`${REACT_APP_BASE_URL}/${address}/${id}`);
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getSubjectsSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};
export const deleteAllSubjectbyClassId = (id) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.delete(
      `${REACT_APP_BASE_URL}/SubjectsClass/${id}`
    );
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getSubjectsSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};
export const deleteAllStudentbyClassId = (id) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.delete(
      `${REACT_APP_BASE_URL}/StudentsClass/${id}`
    );
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getStudentsSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};
export const deleteAllTeacherbyClassId = (id) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.delete(
      `${REACT_APP_BASE_URL}/TeachersClass/${id}`
    );
    if (result.data.message) {
      dispatch(getTeaherFailed(result.data.message));
    } else {
      dispatch(getTeacherSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const getTeacherList = (id) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(`${REACT_APP_BASE_URL}/teacherlist/${id}`);
    if (result.data.message) {
      dispatch(getTeaherFailed(result.data.message));
    } else {
      dispatch(getTeacherSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const getTeacherFreeClassSubjects = (id) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(
      `${REACT_APP_BASE_URL}/FreeSubjectList/${id}`
    );
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getSubjectsSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const getSubjectDetails = (id, address) => async (dispatch) => {
  dispatch(getSubDetailsRequest());

  try {
    const result = await axios.get(`${REACT_APP_BASE_URL}/${address}/${id}`);
    if (result.data) {
      dispatch(getSubDetailsSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};
