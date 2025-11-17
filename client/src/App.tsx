// import { Switch, Route } from "wouter";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";

// import { TooltipProvider } from "@/components/ui/tooltip";
// import { Menu } from "lucide-react";
// import Logi from "@/pages/Login";
// import Dashboard from "@/pages/Dashboard";
// import Properties from "@/pages/Properties";
// import Enquiries from "@/pages/Enquiries";
// import Reminders from "@/pages/Reminders";
// import Reports from "@/pages/Reports";
// import Settings from "@/pages/Settings";
// import NotFound from "@/pages/not-found";

// import AppHeader from "@/components/AppHeader";
// import BottomNav from "@/components/BottomNav";
// import { Link } from "react-router-dom";
// import React, { useEffect } from "react";
// import AuthCallbackPage from "@/pages/AuthCallbackPage";
// import Login from "@/pages/Login";
// import { Toaster } from "react-hot-toast";

// function Router() {
//   return (
//     <Switch>
//       <Route path="/login" component={Login} />
//       <Route path="/">
//         <AppLayout>
//           <Dashboard />
//         </AppLayout>
//       </Route>
//       <Route path="/properties">
//         <AppLayout>
//           <Properties />
//         </AppLayout>
//       </Route>
//       <Route path="/enquiries">
//         <AppLayout>
//           <Enquiries />
//         </AppLayout>
//       </Route>
//       <Route path="/reminders">
//         <AppLayout>
//           <Reminders />
//         </AppLayout>
//       </Route>
//       <Route path="/reports">
//         <AppLayout>
//           <Reports />
//         </AppLayout>
//       </Route>
//       <Route path="/settings">
//         <AppLayout>
//           <Settings />
//         </AppLayout>
//       </Route>
//       <Route path="/auth/callback" component={AuthCallbackPage} />

//     </Switch>
//   );
// }

// import { useState } from "react";
// import Sidebar from "./pages/Sidebar";
// import Loginn from "@/pages/Login";

// export function AppLayout({ children }: { children: React.ReactNode }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-background">
//       {/* Header at top */}
//       <AppHeader
//         title={
//           <div className="flex items-center gap-2 w-full">
//             <div
//               className="h-5 w-5 cursor-pointer text-gray-700 hover:text-blue-600"
//               onClick={toggleSidebar}
//             />
//             <Link
//               to="/"
//               onClick={() => setSidebarOpen(false)}
//               className="text-2xl font-bold text-primary hover:text-blue-700 transition"
//             >
//               Real Estate CRM
//             </Link>
//           </div>
//         }
//         notificationCount={3}
//         onNotificationClick={() => console.log("Notifications clicked")}
//         onProfileClick={() => (window.location.href = "/settings")}
//       />

//       {/* Layout body (Sidebar + Main content) */}
//       <div className="flex flex-1 relative">
//         {/* ✅ Fixed sidebar on desktop */}
//         <div className="hidden md:block fixed top-[2px] left-0 h-[calc(100vh-64px)] w-4 bg-white shadow-sm z-30">
//           <Sidebar />
//         </div>

//         {/* ✅ Mobile sidebar (overlay style) */}
//         {sidebarOpen && (
//           <Sidebar isMobile onClose={() => setSidebarOpen(false)} />
//         )}

//         {/* ✅ Main content area (shifted right to avoid overlap) */}
//         <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6 md:ml-64 transition-all duration-300">
//           <div className="container mx-auto">{children}</div>
//         </main>
//       </div>

//       {/* Bottom navigation (mobile only) */}
//       <BottomNav />
//     </div>
//   );
// }

// export default function App() {
//   useEffect(() => {
//     console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
//     console.log("Supabase Key:", import.meta.env.VITE_SUPABASE_KEY);
//   }, []);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster  position="bottom-right" />
//         <Router />
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }



import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Menu } from "lucide-react";
import Logi from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Properties from "@/pages/Properties";
import Enquiries from "@/pages/Enquiries";
import Reminders from "@/pages/Reminders";
import Reports from "@/pages/Reports";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/not-found";
import ViewPropertyPage from "./pages/ViewPropertyModal";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AuthCallbackPage from "@/pages/AuthCallbackPage";
import Login from "@/pages/Login";
import { Toaster } from "react-hot-toast";

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/">
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </Route>
      <Route path="/properties">
        <AppLayout>
          <Properties />
        </AppLayout>
      </Route>
      <Route path="/enquiries">
        <AppLayout>
          <Enquiries />
        </AppLayout>
      </Route>
      <Route path="/reminders">
        <AppLayout>
          <Reminders />
        </AppLayout>
      </Route>
      <Route path="/reports">
        <AppLayout>
          <Reports />
        </AppLayout>
      </Route>
      <Route path="/settings">
        <AppLayout>
          <Settings />
        </AppLayout>
      </Route>
      <Route path="/auth/callback" component={AuthCallbackPage} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/properties/view/:id">
        <AppLayout>
          <ViewPropertyPage />
        </AppLayout>
      </Route>
    </Switch>
  );
}



// import { useState } from "react";
// import Sidebar from "./pages/Sidebar";
// import Loginn from "@/pages/Login";
// import ViewPropertyPage from "./pages/ViewPropertyModal";
// import { supabase } from "@/supabaseClient";

// export function AppLayout({ children }: { children: React.ReactNode }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(true);
//   const [notificationCount, setNotificationCount] = useState(0);
//   const [notifications, setNotifications] = useState<any[]>([]);
//   const [userId, setUserId] = useState<string | null>(null);

//   useEffect(() => {
//     const getUser = async () => {
//       const { data: userData } = await supabase.auth.getUser();
//       if (userData?.user?.id) {
//         setUserId(userData.user.id);
//       }
//     };
//     getUser();
//   }, []);

//   // Fetch unread notifications
//   const fetchNotifications = async () => {
//     if (!userId) return;

//     const { data, error } = await supabase
//       .from("notifications")
//       .select("*", { count: "exact" })
//       .eq("user_id", userId)
//       .eq("read", false);

//     if (!error && data) {
//       setNotificationCount(data.length);
//       setNotifications(data);
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();
//   }, [userId]); // fetch when userId is available

//   const markAsRead = async (id: string) => {
//     const { error } = await supabase
//       .from("notifications")
//       .update({ read: true })
//       .eq("id", id);

//     if (!error) {
//       setNotifications((prev) => prev.filter((n) => n.id !== id));
//       setNotificationCount((prev) => prev - 1);
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-background">
//       {/* Header at top */}
//       <AppHeader
//         title={
//           <Link
//             to="/"
//             onClick={() => setSidebarOpen(false)}
//             className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-blue-700 transition"
//           >
//             <img
//               src="/logo-round.png"
//               alt="Logo"
//               className="h-10 w-10 object-contain"
//             />

//             <span>Real Estate CRM</span>
//           </Link>
//         }
//         notificationCount={notificationCount}
//         onNotificationClick={() => console.log("Notifications clicked")}
//         onProfileClick={() => (window.location.href = "/settings")}
//       />

//       {/* Layout body (Sidebar + Main content) */}
//       <div className="flex flex-1 relative">
//         {/* ✅ Fixed sidebar on desktop */}
//         <div className="hidden md:block fixed top-[2px] left-0 h-[calc(100vh-64px)] z-30">
//           <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
//         </div>

//         {/* ✅ Mobile sidebar (overlay style) */}
//         {sidebarOpen && (
//           <Sidebar isMobile onClose={() => setSidebarOpen(false)} />
//         )}

//         {/* ✅ Main content area (shifted right to avoid overlap) */}
//         <main
//           className={`flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6 transition-all duration-300
//     ${collapsed ? "md:ml-20" : "md:ml-64"}`}
//         >
//           <div className="container mx-auto">{children}</div>
//         </main>
//       </div>

//       {/* Bottom navigation (mobile only) */}
//       <BottomNav />
//     </div>
//   );
// }


import { useState } from "react";
import Sidebar from "./pages/Sidebar";

import { supabase } from "@/supabaseClient";


export function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  // Get current user
  useEffect(() => {
    const getUser = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user?.id) {
        setUserId(userData.user.id);
      }
    };
    getUser();
  }, []);

  // Fetch unread notifications
  const fetchNotifications = async () => {
    if (!userId) return;

    const { data, error } = await supabase
      .from("notifications")
      .select("*", { count: "exact" })
      .eq("user_id", userId)
      .eq("read", false)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setNotifications(data);
      setNotificationCount(data.length);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [userId]);

  // Mark notification as read
const markAsRead = async (id: string) => {
  console.log("Marking notification as read:", id);

  const { data, error } = await supabase
    .from("notifications")
    .update({ read: true }) // ✅ no quotes
    .eq("id", id)
    .select(); // get the updated row back

  if (!error) {
    console.log("Notification updated successfully:", data);

    // Remove from local state immediately
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    setNotificationCount((prev) => Math.max(prev - 1, 0));
  } else {
    console.error("Failed to mark notification as read:", error.message);
  }
};



  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <AppHeader
        title={
          <Link
            to="/"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-blue-700 transition"
          >
            <img
              src="/logo-round.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <span>Real Estate CRM</span>
          </Link>
        }
        notificationCount={notificationCount}
        notifications={notifications}
        markAsRead={markAsRead}
        onProfileClick={() => (window.location.href = "/settings")}
      />

      {/* Layout body */}
      <div className="flex flex-1 relative">
        <div className="hidden md:block fixed top-[2px] left-0 h-[calc(100vh-64px)] z-30">
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        {sidebarOpen && <Sidebar isMobile onClose={() => setSidebarOpen(false)} />}

        <main
          className={`flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6 transition-all duration-300
            ${collapsed ? "md:ml-20" : "md:ml-64"}`}
        >
          <div className="container mx-auto">{children}</div>
        </main>
      </div>

      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
}

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  useEffect(() => {
    console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
    console.log("Supabase Key:", import.meta.env.VITE_SUPABASE_KEY);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster position="bottom-right" />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
