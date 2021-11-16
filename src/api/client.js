import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://24.84.208.136:9900/api",
  // baseURL: "https://moshbucket1.s3.us-east-2.amazonaws.com/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
