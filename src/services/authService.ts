import { jwtDecode } from 'jwt-decode';
// Import dengan ekspor default

// Define types for response data
type LoginResponse = {
  access_token: string;
  refresh_token: string;
};

type UserResponse = {
  name: string;
  avatar: string;
};

// Login function to authenticate and return tokens
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const query = `
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        access_token
        refresh_token
      }
    }
  `;

  const variables = { email, password };

  try {
    const response = await fetch('https://api.escuelajs.co/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    if (result.errors && result.errors.length > 0) {
      throw new Error(result.errors[0].message || 'Login failed');
    }

    return result.data.login;
  } catch (error: any) {
    const errorMessage = error?.message || 'An unknown error occurred';
    throw new Error(errorMessage);
  }
};

// Get user details using the access token
export const getUserDetails = async (token: string): Promise<UserResponse> => {
  try {
    // Decode the token
    const decodedToken = jwtDecode<{ sub: string }>(token); // Pastikan tipe token jelas
    const userId = decodedToken.sub; // Token harus memiliki `sub`

    if (!userId) {
      throw new Error('Invalid token structure: missing user ID');
    }

    const query = `
      query GetUser($id: ID!) {
        user(id: $id) {
          name
          avatar
        }
      }
    `;

    const variables = { id: userId };

    const response = await fetch('https://api.escuelajs.co/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.errors?.[0]?.message || 'Failed to fetch user details');
    }

    return result.data.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
