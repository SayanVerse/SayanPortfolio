import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AdvancedBackground } from "@/components/ui/advanced-background";
import { AdminPanel } from "@/components/admin/AdminPanel";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMobileOptimization } from "@/hooks/useMobileOptimization";
import { useButtonEffects } from "@/hooks/useButtonEffects";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const { isAdmin, loading } = useAdminAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Initialize interactive features
  useScrollAnimation();
  useMobileOptimization();
  useButtonEffects();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    // Force dark mode always
    const htmlElement = document.documentElement;
    htmlElement.classList.add("dark");
    htmlElement.setAttribute("data-theme", "dark");
  }, []);

  React.useEffect(() => {
    // Refresh admin panel when auth state changes
    setRefreshKey((prev) => prev + 1);
  }, [isAdmin]);

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "glass shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col sm:flex-col space-y-2 nav-brand">
                <div className="text-xl font-bold gradient-text">Portfolio</div>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Admin Page Content */}
        <section className="min-h-screen pt-24 pb-20 relative overflow-hidden animated-bg">
          <AdvancedBackground />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 fade-in-up">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
                {isAdmin ? "Admin Dashboard" : "Admin Access"}
              </h1>
              <p className="text-muted-foreground text-lg">
                {isAdmin
                  ? "Manage your portfolio content"
                  : "Log in to manage your portfolio"}
              </p>
            </div>

            <div className="fade-in-up">
              {!isAdmin ? (
                <div className="max-w-md mx-auto">
                  <AdminLogin onLoginSuccess={() => {}} />
                </div>
              ) : (
                <AdminPanel />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
