import axios from "axios";

const fetchUsers = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export { fetchUsers };
