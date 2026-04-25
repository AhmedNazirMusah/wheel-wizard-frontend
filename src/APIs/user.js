import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../constants';

export const createAccount = async (reqBody) => {
  try {
    const response = await axios.post(`${URL}/users`, { user: reqBody });
    toast.success('Signed Up Successfully');
    return response.data;
  } catch (error) {
    const message = error.response?.data?.errors?.join(', ')
      || error.response?.data?.error
      || 'Sign up failed';
    toast.error(message);
    throw new Error(message);
  }
};

export const getToken = async (reqBody) => {
  try {
    const response = await axios.post(`${URL}/users/sign_in`, {
      user: reqBody,
    });
    toast.success('Logged in successfully');
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      toast.error('Invalid email or password');
    }
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};
