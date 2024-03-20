import { httpAxios } from "@/lib/httpHelper";

export async function registerFoods(users: any) {
  try {
    const result = await httpAxios.post("/api/restaurant/foods", users);
    return result.data;
  } catch (error:any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Server responded with error:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from server:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", error.message);
    }
    // Throw the error so that it can be handled by the calling function or component
    throw error;
  }
}
