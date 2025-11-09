import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface AdminUser {
  email: string;
  isAuthenticated: boolean;
}

export function useAdminAuth() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = () => {
      try {
        // First check localStorage for local auth
        const stored = localStorage.getItem("adminAuth");
        if (stored) {
          try {
            const auth = JSON.parse(stored);
            // Check if session is not older than 24 hours
            if (Date.now() - auth.timestamp < 24 * 60 * 60 * 1000) {
              setUser({
                email: auth.email,
                isAuthenticated: true,
              });
              setLoading(false);
              return;
            }
          } catch (err) {
            console.error("Failed to parse stored auth:", err);
          }
        }
        setLoading(false);
      } catch (err) {
        console.error("Session check failed:", err);
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      // Verify credentials match the admin account
      if (
        email === "sayan.official.2024@gmail.com" &&
        password === "T!9xN#2dV7q$Fp5rK3m@b@6W!8rT2p#Z9nL4yQ1$"
      ) {
        // Simulate successful login
        setUser({
          email: email,
          isAuthenticated: true,
        });
        // Store in localStorage for persistence
        localStorage.setItem(
          "adminAuth",
          JSON.stringify({
            email: email,
            timestamp: Date.now(),
          })
        );
        return { success: true };
      } else {
        setError("Invalid credentials");
        return { success: false, error: "Invalid credentials" };
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Login failed";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("adminAuth");
  };

  const checkAdminAuth = () => {
    const stored = localStorage.getItem("adminAuth");
    if (stored) {
      try {
        const auth = JSON.parse(stored);
        // Check if session is not older than 24 hours
        if (Date.now() - auth.timestamp < 24 * 60 * 60 * 1000) {
          setUser({
            email: auth.email,
            isAuthenticated: true,
          });
          return true;
        }
      } catch (err) {
        console.error("Failed to parse stored auth:", err);
      }
    }
    return false;
  };

  // Try to restore session from localStorage on mount
  useEffect(() => {
    if (!user && !loading) {
      checkAdminAuth();
    }
  }, []);

  return {
    user,
    loading,
    error,
    login,
    logout,
    isAdmin: user?.isAuthenticated ?? false,
  };
}
