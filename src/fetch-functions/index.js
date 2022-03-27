import { axiosWithAuth } from "../utils";

// user client crud functions
export const getUserClients = async (user_id) => {
  const { data } = await axiosWithAuth().get(`/client/getAll/${user_id}`);

  return data;
};
export const addClient = async (newClient) => {
  const { data } = await axiosWithAuth().post(`/client/add`, newClient);

  return data;
};

export const deleteClientQFN = async (client_id) => {
  return await axiosWithAuth().delete(`/client/delete/${client_id}`);
};

// user employee crud functions

export const getUserEmployees = async (user_id) => {
  const { data } = await axiosWithAuth().get(`/employee/getAll/${user_id}`);

  return data;
};

export const addEmployee = async (newEmployee) => {
  const { data } = await axiosWithAuth().post(`/employee/add`, newEmployee);

  return data;
};

export const deleteEmployeeQFN = async (employee_id) => {
  return await axiosWithAuth().delete(`/employee/delete/${employee_id}`);
};

// user job crud functions
export const getUserJobs = async (user_id) => {
  const { data } = await axiosWithAuth().get(`/job/user-jobs/${user_id}`);

  return data;
};

export const deleteJobQFN = async (job_id) => {
  return await axiosWithAuth().delete(`/job/delete/${job_id}`);
};

// Job Employee Functions
export const deleteJobEmployeeQFN = async ({ job_id, employee_id }) => {
  return await axiosWithAuth().delete(`/job/delete-employee/${job_id}/${employee_id}`);
};

export const addJobEmployeeQFN = async ({ job_id, employee_id }) => {
  return await axiosWithAuth().post(`/job/add-employee/${job_id}/${employee_id}`);
};

// Job Employee Labor Functions
export const addJobEmployeeLaborQFN = async (newEvent) => {
  return await axiosWithAuth().post(`/job/add-employee-labor`, newEvent);
};

export const editJobEmployeeLaborQFN = async ({ editedEvent, job_employee_labor_id }) => {
  return await axiosWithAuth().put(
    `/job/edit-employee-labor/${job_employee_labor_id}`,
    editedEvent
  );
};

export const getJobEmployeeLaborQFN = async (job_employee_id) => {
  const { data } = await axiosWithAuth().get(`/job/get-employee-labor/${job_employee_id}`);

  return data;
};

export const deleteJobEmployeeLaborQFN = async (job_employee_labor_id) => {
  return await axiosWithAuth().delete(`/job/delete-job-employee-labor/${job_employee_labor_id}`);
};
