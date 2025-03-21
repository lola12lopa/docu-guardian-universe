
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-right" theme="light" />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  key="home"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  className="min-h-screen"
                >
                  <Index />
                </motion.div>
              } 
            />
            <Route 
              path="/auth/:mode?" 
              element={
                <motion.div
                  key="auth"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  className="min-h-screen"
                >
                  <Auth />
                </motion.div>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <motion.div
                  key="dashboard"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  className="min-h-screen"
                >
                  <Dashboard />
                </motion.div>
              } 
            />
            <Route 
              path="*" 
              element={
                <motion.div
                  key="not-found"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  className="min-h-screen"
                >
                  <NotFound />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
