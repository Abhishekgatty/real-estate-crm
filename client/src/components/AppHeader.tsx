// import { Button } from "@/components/ui/button";
// import { Bell, Menu, User } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

// interface AppHeaderProps {
//   title: string;
//   onMenuClick?: () => void;
//   notificationCount?: number;
//   onNotificationClick?: () => void;
//   onProfileClick?: () => void;
// }

// export default function AppHeader({
//   title,
//   onMenuClick,
//   notificationCount = 0,
//   onNotificationClick,
//   onProfileClick
// }: AppHeaderProps) {
//   return (
//     <header className="sticky top-0 z-40 bg-card border-b border-card-border">
//       <div className="flex items-center justify-between h-16 px-4 gap-4">
//         <div className="flex items-center gap-3 flex-1 min-w-0">
//           {onMenuClick && (
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={onMenuClick}
//               className="md:hidden shrink-0"
//               data-testid="button-menu"
//             >
//               <Menu className="h-5 w-5" />
//             </Button>
//           )}
//           <h1 className="text-lg md:text-xl font-semibold truncate">{title}</h1>
//         </div>
        
//         <div className="flex items-center gap-2 shrink-0">
//           <Button
//             variant="ghost"
//             size="icon"
//             className="relative"
//             onClick={onNotificationClick}
//             data-testid="button-notifications"
//           >
//             <Bell className="h-5 w-5" />
//             {notificationCount > 0 && (
//               <Badge 
//                 className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
//                 data-testid="badge-notification-count"
//               >
//                 {notificationCount}
//               </Badge>
//             )}
//           </Button>
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={onProfileClick}
//             data-testid="button-profile"
//           >
//             <User className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }



// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Bell, Menu, User } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

// interface AppHeaderProps {
//   title: React.ReactNode;
//   onMenuClick?: () => void;
//   notificationCount?: number;
//   notifications?: any[];
//   markAsRead?: (id: string) => void;
//   onProfileClick?: () => void;
// }

// export default function AppHeader({
//   title,
//   onMenuClick,
//   notificationCount = 0,
//   notifications = [],
//   markAsRead,
//   onProfileClick
// }: AppHeaderProps) {
//   const [showNotifications, setShowNotifications] = useState(false);

//   return (
//     <header className="sticky top-0 z-40 bg-card border-b border-card-border">
//       <div className="flex items-center justify-between h-16 px-4 gap-4">
//         <div className="flex items-center gap-3 flex-1 min-w-0">
//           {onMenuClick && (
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={onMenuClick}
//               className="md:hidden shrink-0"
//             >
//               <Menu className="h-5 w-5" />
//             </Button>
//           )}
//           <h1 className="text-lg md:text-xl font-semibold truncate">{title}</h1>
//         </div>

//         <div className="flex items-center gap-2 shrink-0 relative">
//           {/* Notification Bell */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="relative"
//             onClick={() => setShowNotifications(!showNotifications)}
//           >
//             <Bell className="h-5 w-5" />
//             {notificationCount > 0 && (
//               <Badge 
//                 className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
//               >
//                 {notificationCount}
//               </Badge>
//             )}
//           </Button>

//           {/* Notification Dropdown */}
//           {showNotifications && (
//             <div className="absolute right-0 top-12 mt-2 w-72 max-h-80 overflow-y-auto bg-white shadow-lg border rounded z-50">
//               {notifications.length === 0 ? (
//                 <div className="p-2 text-sm text-gray-500">No new notifications</div>
//               ) : (
//                 notifications.map((n) => (
//                   <div
//                     key={n.id}
//                     className="p-2 border-b cursor-pointer hover:bg-gray-100"
//                     onClick={() => {
//                       markAsRead?.(n.id);
//                     }}
//                   >
//                     {n.message}
//                   </div>
//                 ))
//               )}
//             </div>
//           )}

//           {/* Profile Icon */}
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={onProfileClick}
//           >
//             <User className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }




import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Menu, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/supabaseClient";

interface AppHeaderProps {
  title: React.ReactNode;
  onMenuClick?: () => void;
  onProfileClick?: () => void;
}

export default function AppHeader({
  title,
  onMenuClick,
  onProfileClick,
}: AppHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [userId, setUserId] = useState<string | null>(null);

  // Fetch current user
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.id) setUserId(user.id);
    };
    fetchUser();
  }, []);

  // Fetch unread notifications
  useEffect(() => {
    if (!userId) return;

    const fetchNotifications = async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("*", { count: "exact" })
        .eq("user_id", userId)
        .eq("read", false)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setNotifications(data);
        setNotificationCount(data.length);
      } else if (error) {
        console.error("Error fetching notifications:", error.message);
      }
    };

    fetchNotifications();
  }, [userId]);

  // Mark notification as read
  const markAsRead = async (id: string) => {
    if (!userId) return;

    console.log("Marking notification as read:", id);

    const { data, error } = await supabase
      .from("notifications")
      .update({ '"read"': true }) 
      .eq("id", id)
      .select();

    if (!error) {
      console.log("Notification updated successfully:", data);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
      setNotificationCount((prev) => Math.max(prev - 1, 0));
    } else {
      console.error("Failed to mark notification as read:", error.message);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-card border-b border-card-border">
      <div className="flex items-center justify-between h-16 px-4 gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {onMenuClick && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="md:hidden shrink-0"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <h1 className="text-lg md:text-xl font-semibold truncate">{title}</h1>
        </div>

        <div className="flex items-center gap-2 shrink-0 relative">
          {/* Notification Bell */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="h-5 w-5" />
            {notificationCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
              >
                {notificationCount}
              </Badge>
            )}
          </Button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-12 mt-2 w-72 max-h-80 overflow-y-auto bg-white shadow-lg border rounded z-50">
              {notifications.length === 0 ? (
                <div className="p-2 text-sm text-gray-500">No new notifications</div>
              ) : (
                notifications.map((n) => (
                  <div
                    key={n.id}
                    className="p-2 border-b cursor-pointer hover:bg-gray-100"
                    onClick={() => markAsRead(n.id)}
                  >
                    {n.message}
                  </div>
                ))
              )}
            </div>
          )}

          {/* Profile Icon */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onProfileClick}
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
