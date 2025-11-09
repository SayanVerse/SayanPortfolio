import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, LogOut } from "lucide-react";
import { useAdminAuth } from "@/hooks/useAdminAuth";

interface AdminLoginProps {
  onLoginSuccess?: () => void;
}

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, error, login, logout } = useAdminAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await login(email, password);

    if (result.success) {
      setEmail("");
      setPassword("");
      onLoginSuccess?.();
      // Reload the page to update the auth state and show the admin panel
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }

    setIsLoading(false);
  };

  if (user?.isAuthenticated) {
    return (
      <div className="space-y-4">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Admin Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Logged in as:
              </p>
              <p className="font-semibold text-primary">{user.email}</p>
            </div>
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => {
                logout();
              }}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle>Admin Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full pl-10 pr-10 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                disabled={isLoading}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full glow-button relative overflow-hidden"
            disabled={isLoading || !email || !password}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
