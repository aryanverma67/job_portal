// src/auth.js
export const logout = async (navigate) => {
    try {
      // Remove token from local storage
      localStorage.removeItem('accessToken');
      alert('Logout successful');
      // Redirect to login page or any other page
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      alert('An error occurred during logout');
    }
  };
  