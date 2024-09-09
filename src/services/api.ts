import axiosInstance from "../library/axiosInstance";

export const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get('/users');
      return response.data.users;
    } catch (err) {
      throw new Error("An error occurred while fetching user data.");
    }
  };
  