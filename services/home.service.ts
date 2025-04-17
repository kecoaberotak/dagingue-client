import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getContentData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/content`);
    return response.data.data;
  } catch (error) {
    // ini ubah lagi agar lebih informatif
    console.error("Failed to fetch landing data", error);
  }
};
