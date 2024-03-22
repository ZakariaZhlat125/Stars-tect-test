import axios from "axios";
import { BaseUrl } from "../constants/urls";
import { useQuery } from "react-query";

const ProjectUrl = axios.create({
  baseURL: BaseUrl,
});

const getToken = () => {
  return localStorage.getItem("token");
};

export const getData = async (Url) => {
  try {
    const response = await ProjectUrl.get(Url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to fetch data");
  }
};

export const showData = (url) => {
  return useQuery(url, () => getData(url));
};
