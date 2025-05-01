import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import api from "../utils/api";
import { AuthState, RegisterData, LoginData, User } from "../types/auth";

// Base API URL
const API_URL = "http://localhost:8080/api/auth";

interface AuthStore extends AuthState {
  register: (data: RegisterData) => Promise<void>;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      register: async (data: RegisterData) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api.post(`${API_URL}/register`, data);
          const { token, user } = response.data;
          set({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.response?.data?.errors?.[0] || "Registration failed",
          });
          throw error;
        }
      },

      login: async (data: LoginData) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api.post(`${API_URL}/login`, data);
          const { token, user } = response.data;
          set({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.response?.data?.errors?.[0] || "Login failed",
          });
          throw error;
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
      },

      setError: (error: string | null) => {
        set({ error });
      },
    }),
    {
      name: "auth-storage", // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    }
  )
);
