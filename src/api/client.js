import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://24.84.208.136:9900/api",
  // baseURL: "https://moshbucket1.s3.us-east-2.amazonaws.com/api",
});

export default apiClient;
