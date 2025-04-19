import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getContentData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/content`);
    return response.data.data;
  } catch (error) {
    let errorMessage = "Unknown error occurred";

    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Failed to fetch landing data:", errorMessage);
    return null;
  }
};
