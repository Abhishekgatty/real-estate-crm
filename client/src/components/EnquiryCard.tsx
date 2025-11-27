// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Phone,
//   MapPin,
//   DollarSign,
//   Calendar,
//   User,
//   Pencil,
//   Trash2,
// } from "lucide-react";

// interface EnquiryCardProps {
//   id: string;
//   name: string;
//   listing_type: string;
//   mobile_number: string;
//   location: string;
//   budget?: string;
//   type: "buy" | "sell";
//   selling_rate?: string;
//   sellingRate?: string;
//   date: string;
//   referred_by?: string;
//   remarks?: string;
//   onEdit: (id: string) => void;
//   onDelete: (id: string) => void;
//   onCall: (mobile: string) => void;
// }

// export default function EnquiryCard({
//   id,
//   name,
//   mobile_number,
//   location,
//   type,
//   budget,
//   selling_rate,
//   date,
//   referred_by,
//   listing_type,
//   remarks,
//   onEdit,
//   onDelete,
//   onCall,
// }: EnquiryCardProps) {
//   return (
//     <Card>
//       <CardContent className="p-4">
//         <div className="space-y-3">
//           <div className="flex items-start justify-between gap-4">
//             <div className="flex-1 min-w-0">
//               <div className="flex items-center gap-2 mb-2">
//                 <h3
//                   className="font-semibold text-base"
//                   data-testid={`enquiry-name-${id}`}
//                 >
//                   {name}
//                 </h3>
//                 <Badge variant={type === "buy" ? "default" : "secondary"}>
//                   {(type || listing_type)?.toUpperCase()}
//                 </Badge>
//               </div>
//             </div>
//             <div className="flex gap-1 shrink-0">
//               <Button
//                 size="icon"
//                 variant="ghost"
//                 onClick={() => onEdit(id)}
//                 data-testid={`button-edit-${id}`}
//               >
//                 <Pencil className="h-4 w-4" />
//               </Button>
//               <Button
//                 size="icon"
//                 variant="ghost"
//                 onClick={() => onDelete(id)}
//                 data-testid={`button-delete-${id}`}
//               >
//                 <Trash2 className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
//             <div className="flex items-center gap-2 text-muted-foreground">
//               <Phone className="h-3 w-3 shrink-0" />
//               <span className="truncate">{mobile_number}</span>
//             </div>
//             <div className="flex items-center gap-2 text-muted-foreground">
//               <MapPin className="h-3 w-3 shrink-0" />
//               <span className="truncate">{location}</span>
//             </div>
//             {(budget || selling_rate) && (
//               <div className="flex items-center gap-2 text-muted-foreground">
//                 <DollarSign className="h-3 w-3 shrink-0" />
//                 <span className="truncate">
//                   {type === "buy" ? budget : selling_rate}
//                 </span>
//               </div>
//             )}

//             <div className="flex items-center gap-2 text-muted-foreground">
//               <Calendar className="h-3 w-3 shrink-0" />
//               <span>{date}</span>
//             </div>
//             {referred_by && (
//               <div className="flex items-center gap-2 text-muted-foreground sm:col-span-2">
//                 <User className="h-3 w-3 shrink-0" />
//                 <span className="truncate">Referred by {referred_by}</span>
//               </div>
//             )}
//           </div>

//           {remarks && (
//             <p className="text-sm text-muted-foreground line-clamp-2">
//               {remarks}
//             </p>
//           )}

//           <Button
//             onClick={() => onCall(mobile_number)}
//             className="w-full"
//             size="sm"
//             data-testid={`button-call-${id}`}
//           >
//             <Phone className="h-4 w-4 mr-2" />
//             Call Now
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import { supabase } from "@/supabaseClient";
// import {
//   Phone,
//   MapPin,
//   DollarSign,
//   Calendar,
//   User,
//   Pencil,
//   Trash2,
// } from "lucide-react";

// interface EnquiryCardProps {
//   id: string;
//   user_id?: string | null;
//   name: string;
//   listing_type: string;
//   mobile_number: string;
//   location: string;
//   budget?: string;
//   type: "buy" | "sell";
//   selling_rate?: string;
//   sellingRate?: string;
//   date: string;
//   referred_by?: string;
//   remarks?: string;
//   onEdit: (id: string) => void;
//   onDelete: (id: string) => void;
//   onCall: (mobile: string) => void;
// }

// export default function EnquiryCard({
//   id,
//   user_id,
//   name,
//   mobile_number,
//   location,
//   type,
//   budget,
//   selling_rate,
//   date,
//   referred_by,
//   listing_type,
//   remarks,
//   onEdit,
//   onDelete,
//   onCall,
// }: EnquiryCardProps) {

//   // top of component
// const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);

// useEffect(() => {
//   const loadUser = async () => {
//     const { data } = await supabase.auth.getUser();
//     setLoggedInUserId(data?.user?.id ?? null);
//   };
//   loadUser();
// }, []);

//   return (
//     <Card>
//       <CardContent className="p-4">
//         <div className="space-y-3">
//           <div className="flex items-start justify-between gap-4">
//             <div className="flex-1 min-w-0">
//               <div className="flex items-center gap-2 mb-2">
//                 <h3
//                   className="font-semibold text-base"
//                   data-testid={`enquiry-name-${id}`}
//                 >
//                   {name}
//                 </h3>
//                 <Badge variant={type === "buy" ? "default" : "default"}>
//                   {(type || listing_type)?.toUpperCase()}
//                 </Badge>
//               </div>
//             </div>
//            <div className="flex gap-1 shrink-0">
//   {loggedInUserId && loggedInUserId === user_id ? (
//     <>
//       <Button
//         size="icon"
//         variant="ghost"
//         onClick={() => onEdit(id)}
//         data-testid={`button-edit-${id}`}
//       >
//         <Pencil className="h-4 w-4" />
//       </Button>
//       <Button
//         size="icon"
//         variant="ghost"
//         onClick={() => onDelete(id)}
//       >
//         <Trash2 className="h-4 w-4" />
//       </Button>
//     </>
//   ) : null}
// </div>

//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
//             <div className="flex items-center gap-2 text-muted-foreground">
//               <Phone className="h-3 w-3 shrink-0" />
//               <span className="truncate">{mobile_number}</span>
//             </div>
//             <div className="flex items-center gap-2 text-muted-foreground">
//               <MapPin className="h-3 w-3 shrink-0" />
//               <span className="truncate">{location}</span>
//             </div>
//             {(budget || selling_rate) && (
//               <div className="flex items-center gap-2 text-muted-foreground">
//                 <DollarSign className="h-3 w-3 shrink-0" />
//                 <span className="truncate">
//                   {type === "buy" ? budget : selling_rate}
//                 </span>
//               </div>
//             )}

//             <div className="flex items-center gap-2 text-muted-foreground">
//               <Calendar className="h-3 w-3 shrink-0" />
//               <span>{date}</span>
//             </div>
//             {referred_by && (
//               <div className="flex items-center gap-2 text-muted-foreground sm:col-span-2">
//                 <User className="h-3 w-3 shrink-0" />
//                 <span className="truncate">Referred by {referred_by}</span>
//               </div>
//             )}
//           </div>

//           {remarks && (
//             <p className="text-sm text-muted-foreground line-clamp-2">
//               {remarks}
//             </p>
//           )}

//           <Button
//             onClick={() => onCall(mobile_number)}
//             className="w-full"
//             size="sm"
//             data-testid={`button-call-${id}`}
//           >
//             <Phone className="h-4 w-4 mr-2" />
//             Call Now
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// import { Button } from "@/components/ui/button";
// import { supabase } from "@/supabaseClient";
// import { useState, useEffect } from "react";
// import { Phone, Pencil, Trash2 } from "lucide-react";

// interface EnquiryRowProps {
//   id: string;
//   user_id?: string | null;
//   name: string;
//   listing_type: string;
//   mobile_number: string;
//   location: string;
//   budget?: string;
//   type: "buy" | "sell";
//   selling_rate?: string;
//   date: string;
//   referred_by?: string;
//   remarks?: string;
//   onEdit: (id: string) => void;
//   onDelete: (id: string) => void;
//   onCall: (mobile: string) => void;
// }

// export default function EnquiryRow({
//   id,
//   user_id,
//   name,
//   mobile_number,
//   location,
//   type,
//   budget,
//   selling_rate,
//   date,
//   referred_by,
//   listing_type,
//   remarks,
//   onEdit,
//   onDelete,
//   onCall,
// }: EnquiryRowProps) {
//   const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);

//   useEffect(() => {
//     const loadUser = async () => {
//       const { data } = await supabase.auth.getUser();
//       setLoggedInUserId(data?.user?.id ?? null);
//     };
//     loadUser();
//   }, []);

//   return (
//     <div className="grid grid-cols-12 gap-2 items-center py-2 border-b border-gray-300 text-sm">
//       {/* Name */}
//       <div className="col-span-2 font-medium truncate border-r border-gray-300 px-2">
//         {name}
//       </div>

//       {/* Type / Listing */}
//       <div className="col-span-1 truncate border-r border-gray-300 px-2">
//         {(type || listing_type).toUpperCase()}
//       </div>

//       {/* Mobile */}
//       <div className="col-span-2 truncate border-r border-gray-300 px-2">
//         {mobile_number}
//       </div>

//       {/* Location */}
//       <div className="col-span-2 truncate border-r border-gray-300 px-2">
//         {location}
//       </div>

//       {/* Budget / Selling Rate */}
//       <div className="col-span-1 truncate border-r border-gray-300 px-2">
//         {listing_type === "buy" ? budget || "-" : selling_rate || "-"}
//       </div>

//       {/* Date */}
//       <div className="col-span-2 truncate border-r border-gray-300 px-2">
//         {date}
//       </div>

//       {/* Referred By */}
//       <div className="col-span-1 truncate border-r border-gray-300 px-2">
//         {referred_by || "-"}
//       </div>

//       {/* Actions */}
//       <div className="col-span-1 flex gap-1 justify-end px-2">
//         {loggedInUserId && loggedInUserId === user_id && (
//           <>
//             <Button
//               size="icon"
//               variant="ghost"
//               onClick={() => onEdit(id)}
//               title="Edit"
//             >
//               <Pencil className="h-4 w-4" />
//             </Button>
//             <Button
//               size="icon"
//               variant="ghost"
//               onClick={() => onDelete(id)}
//               title="Delete"
//             >
//               <Trash2 className="h-4 w-4" />
//             </Button>
//           </>
//         )}
//         <Button
//           size="icon"
//           variant="outline"
//           onClick={() => onCall(mobile_number)}
//           title="Call"
//         >
//           <Phone className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   );
// }

// src/components/EnquiryCard.tsx



import { Button } from "@/components/ui/button";
import { Phone, Pencil, Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";

interface EnquiryCardProps {
  id: string;
  user_id?: string | null;
  name: string;
  listing_type?: string;
  property_id?: string | null;
  property_name?: string | null;
  mobile_number?: string;
  location?: string;
  budget?: string | null;
  selling_rate?: string | null;
  date?: string;
  referred_by?: string | null;
  remarks?: string | null;
  status_name?: string | null;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onCall?: (mobile: string) => void;
}

export default function EnquiryCard({
  id,
  name,
  listing_type,
  property_name,
  property_id,
  mobile_number,
  location,
  budget,
  selling_rate,
  date,
  referred_by,
  status_name,
  onEdit,
  onDelete,
  onCall,
}: EnquiryCardProps) {
  const [propertyTitle, setPropertyTitle] = useState<string | null>(null);

  // Fetch property title automatically when property_id changes
  useEffect(() => {
    const fetchPropertyTitle = async () => {
      if (!property_id) return;
      const { data, error } = await supabase
        .from("properties") // your table name
        .select("title")
        .eq("id", property_id)
        .single();

      if (error) {
        console.error("Error fetching property title:", error.message);
        setPropertyTitle("-");
      } else {
        setPropertyTitle(data?.title ?? "-");
      }
    };

    fetchPropertyTitle();
  }, [property_id]);

  return (
    <div className="grid grid-cols-12 gap-2 items-center py-3 border-b text-sm hover:bg-gray-50 transition">
      {/* Name */}
     
        <div className="col-span-1 px-2 overflow-x-auto scrollbar-hide">
  <div className="whitespace-nowrap">{name || "-"}</div>
</div>


 

      {/* Listing */}
       <div className="col-span-1 px-2 overflow-x-auto scrollbar-hide">
         <div className="whitespace-nowrap">
          {(listing_type || "-").toString()}
        </div>
      </div>

      {/* Property */}
       <div className="col-span-2 px-2 overflow-x-auto scrollbar-hide">
        <div className="whitespace-nowrap">
          {propertyTitle ?? property_name ?? property_id ?? "-"}
        </div>
      </div>

      {/* Mobile */}
      {/* <div className="col-span-2 px-2">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-green-600" />
          <button
            onClick={() => onCall?.(mobile_number || "")}
            className="truncate text-left whitespace-nowrap"
            style={{ textDecoration: "underline", color: "#16a34a" }}
          >
            {mobile_number || "-"}
          </button>
        </div>
      </div> */}

      <div className="col-span-1 px-2 overflow-x-auto scrollbar-hide">
       <div className="whitespace-nowrap">
          {mobile_number || "-"}
        </div>
      </div>

      {/* Location */}
      <div className="col-span-2 px-2 overflow-x-auto scrollbar-hide">
       <div className="whitespace-nowrap">{location || "-"}</div>
      </div>

      {/* Budget */}
      <div className="col-span-1 px-2 overflow-x-auto scrollbar-hide">
       <div className="whitespace-nowrap">
          {budget ?? selling_rate ?? "-"}
        </div>
      </div>

      {/* Date */}
       <div className="col-span-1 px-2 overflow-x-auto scrollbar-hide">
        <div className="whitespace-nowrap">
          {date ? date.split("T")[0] : "-"}
        </div>
      </div>

      {/* Referred */}
      <div className="col-span-1 px-2 overflow-x-auto scrollbar-hide">
          <div className="whitespace-nowrap">{referred_by || "-"}</div>
      </div>
      {/* Status */}
      <div className="col-span-1 px-2 overflow-x-auto scrollbar-hide">
        <div className="whitespace-nowrap">{status_name || "-"}</div>
      </div>

      {/* Actions */}
      {/* Actions */}
      <div className="col-span-1 px-2 flex justify-end items-center gap-2">
        <Button size="icon" variant="ghost" onClick={() => onEdit?.(id)}>
          <Pencil className="h-4 w-4 text-blue-600" />
        </Button>

        <Button size="icon" variant="ghost" onClick={() => onDelete?.(id)}>
          <Trash2 className="h-4 w-4 text-red-600" />
        </Button>
      </div>
    </div>
  );
}
