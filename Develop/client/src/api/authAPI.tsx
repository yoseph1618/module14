import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Login failed'); // You can customize the error message based on the response status
    }

    const data = await response.json();
    return data; // This could include the JWT token or user data returned from the server
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Rethrow the error for further handling if needed
  }
};

export { login };
