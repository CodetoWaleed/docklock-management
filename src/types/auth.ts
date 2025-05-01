export interface User {
  id: string;
  email: string;
  fullName: string;
  role: "admin" | "doctor" | "staff";
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  role: "admin" | "doctor" | "staff";
}

export interface LoginData {
  email: string;
  password: string;
}
