import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token); // Decode the token to get the user profile
    }
    return null; // Return null if there is no token
  }

  loggedIn() {
    const token = this.getToken();
    return !!token; // Return true if the token exists, indicating the user is logged in
  }
  
  isTokenExpired(token: string) {
    if (!token) return true; // If no token is present, consider it expired
    const decoded: JwtPayload = jwtDecode(token);
    return decoded.exp < Date.now() / 1000; // Check if the expiration time is less than the current time
  }

  getToken(): string {
    return localStorage.getItem('token') || ''; // Retrieve the token from localStorage, return an empty string if not found
  }

  login(idToken: string) {
    localStorage.setItem('token', idToken); // Store the token in localStorage
    window.location.href = '/'; // Redirect to the home page
  }

  logout() {
    localStorage.removeItem('token'); // Remove the token from localStorage
    window.location.href = '/login'; // Redirect to the login page
  }
}

export default new AuthService();
