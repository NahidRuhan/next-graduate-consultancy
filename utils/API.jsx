import axios from 'axios';

const API_URL = 'https://demo2.officebase.net/api/'; // replace with your backend URL

const postData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}contact/`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default postData;