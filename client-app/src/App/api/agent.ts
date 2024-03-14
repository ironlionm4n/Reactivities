import axios, { AxiosResponse } from "axios";
import { Activity } from "../Models/activity";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

// Path: src/App/api/agent.ts
axios.defaults.baseURL = "http://localhost:5000/api/";

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const commonRequest = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: Activity) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: Activity) =>
    axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Activities = {
  list: (): Promise<Activity[]> => commonRequest.get<Activity[]>("/activities"),
  details: (id: string) => commonRequest.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) =>
    commonRequest.post<void>("/activities", activity),
  update: (activity: Activity) =>
    commonRequest.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string) => commonRequest.del<void>(`/activities/${id}`),
};

const agent = {
  Activities: Activities,
};

export default agent;
