// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import EnquiryCard from "@/components/EnquiryCard";
// import EnquiryForm from "@/components/EnquiryForm";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Plus } from "lucide-react";
// import { supabase } from "@/supabaseClient";

// interface Enquiry {
//   id: string;
//   user_id?: string;
//   name: string;
//   mobile: string;
//   location: string;
//   type: "buy" | "sell";
//   budget?: string;
//   selling_rate?: string;
//   date: string;
//   referred_by?: string;
//   remarks?: string;
// }

// const mockEnquiries = [
//   {
//     id: "1",
//     name: "John Smith",
//     mobile: "+1 (555) 123-4567",
//     location: "Beverly Hills, CA",
//     type: "buy" as const,
//     budget: "$1,500,000",
//     date: "Nov 10, 2025",
//     referredBy: "Sarah Johnson",
//     remarks: "Looking for a luxury villa with pool"
//   },
//   {
//     id: "2",
//     name: "Mike Davis",
//     mobile: "+1 (555) 987-6543",
//     location: "Manhattan, NY",
//     type: "sell" as const,
//     sellingRate: "$850,000",
//     date: "Nov 12, 2025",
//     remarks: "Downtown apartment, urgent sale"
//   },
//   {
//     id: "3",
//     name: "Emma Wilson",
//     mobile: "+1 (555) 456-7890",
//     location: "Austin, TX",
//     type: "buy" as const,
//     budget: "$600,000 - $700,000",
//     date: "Nov 14, 2025",
//     referredBy: "Tom Anderson",
//     remarks: "Family house with garden"
//   },
//   {
//     id: "4",
//     name: "Robert Brown",
//     mobile: "+1 (555) 234-5678",
//     location: "Miami, FL",
//     type: "sell" as const,
//     sellingRate: "$1,200,000",
//     date: "Nov 13, 2025",
//     remarks: "Beachfront condo"
//   }
// ];

// export default function Enquiries() {
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [activeTab, setActiveTab] = useState("all");

//   const handleAddEnquiry = (data: any) => {
//     console.log("Enquiry added:", data);
//     setShowAddForm(false);
//   };

//   const buyEnquiries = mockEnquiries.filter(e => e.type === "buy");
//   const sellEnquiries = mockEnquiries.filter(e => e.type === "sell");

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between gap-4 flex-wrap">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold text-primary">Enquiries</h2>
//           <p className="text-muted-foreground">Manage your leads and enquiries</p>
//         </div>
//         <Button onClick={() => setShowAddForm(true)} data-testid="button-add-enquiry">
//           <Plus className="h-4 w-4 mr-2" />
//           Add Enquiry
//         </Button>
//       </div>

//       <Tabs value={activeTab} onValueChange={setActiveTab}>
//         <TabsList className="grid w-full grid-cols-3 max-w-md">
//           <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
//           <TabsTrigger value="buy" data-testid="tab-buy">Buy</TabsTrigger>
//           <TabsTrigger value="sell" data-testid="tab-sell">Sell</TabsTrigger>
//         </TabsList>

//         <TabsContent value="all" className="mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {mockEnquiries.map(enquiry => (
//               <EnquiryCard
//                 key={enquiry.id}
//                 {...enquiry}
//                 onEdit={(id) => console.log("Edit enquiry:", id)}
//                 onDelete={(id) => console.log("Delete enquiry:", id)}
//                 onCall={(mobile) => console.log("Call:", mobile)}
//               />
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="buy" className="mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {buyEnquiries.map(enquiry => (
//               <EnquiryCard
//                 key={enquiry.id}
//                 {...enquiry}
//                 onEdit={(id) => console.log("Edit enquiry:", id)}
//                 onDelete={(id) => console.log("Delete enquiry:", id)}
//                 onCall={(mobile) => console.log("Call:", mobile)}
//               />
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="sell" className="mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {sellEnquiries.map(enquiry => (
//               <EnquiryCard
//                 key={enquiry.id}
//                 {...enquiry}
//                 onEdit={(id) => console.log("Edit enquiry:", id)}
//                 onDelete={(id) => console.log("Delete enquiry:", id)}
//                 onCall={(mobile) => console.log("Call:", mobile)}
//               />
//             ))}
//           </div>
//         </TabsContent>
//       </Tabs>

//       <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
//         <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle>Add New Enquiry</DialogTitle>
//           </DialogHeader>
//           <EnquiryForm
//             onSubmit={handleAddEnquiry}
//             onCancel={() => setShowAddForm(false)}
//           />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// after connect supabase



// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import EnquiryCard from "@/components/EnquiryCard";
// import EnquiryForm from "@/components/EnquiryForm";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Plus } from "lucide-react";
// import { supabase } from "@/supabaseClient";
// import EnquiryRow from "./EnquiryRow";

// interface Enquiry {
//   id: string;
//   user_id?: string;
//   name: string;
//   mobile_number: string;
//   listing_type: string;
//   location: string;
//   type: "buy" | "sell";
//   budget?: string;
//   selling_rate?: string;
//   date: string;
//   referred_by?: string;
//   remarks?: string;
// }

// export default function Enquiries() {
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [activeTab, setActiveTab] = useState("all");
//   const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

//   const fetchEnquiries = async () => {
//     setLoading(true);
//     try {
//       // Get the logged-in user
//       const { data: userData } = await supabase.auth.getUser();
//       const userId = userData?.user?.id;

//       if (!userId) {
//         console.error("No logged-in user found");
//         setEnquiries([]);
//         setLoading(false);
//         return;
//       }

//       // Fetch enquiries filtered by user_id
//       const { data, error } = await supabase
//         .from("enquiries")
//         .select("*")
//         .eq("user_id", userId) // filter by logged-in user's id
//         .order("date", { ascending: false });

//       if (error) {
//         console.error("Error fetching enquiries:", error.message);
//       } else if (data) {
//         setEnquiries(data as Enquiry[]);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEnquiries();
//   }, []);

//   const handleAddEnquiry = (newEnquiry: any) => {
//     console.log("Enquiry added:", newEnquiry);
//     // Re-fetch enquiries to include the new one
//     fetchEnquiries();
//     setShowAddForm(false);
//   };

//   const handleEdit = (id: string) => {
//     console.log("Editing enquiry ID:", id);
//     console.log(
//       "Available enquiry IDs:",
//       enquiries.map((e) => e.id)
//     );

//     const enquiry = enquiries.find((e) => e.id === id);
//     console.log("Matched enquiry:", enquiry);

//     if (enquiry) {
//       setSelectedEnquiry(enquiry);
//       setShowEditForm(true);
//     } else {
//       console.warn("No enquiry found for this ID!");
//     }
//   };

//   const handleDelete = async (id: string) => {
//     const confirmDelete = confirm(
//       "Are you sure you want to delete this enquiry?"
//     );
//     if (!confirmDelete) {
//       console.log("Deletion cancelled by user");
//       return;
//     }

//     console.log("Attempting to delete enquiry with ID:", id);

//     const { error } = await supabase.from("enquiries").delete().eq("id", id);

//     if (error) {
//       console.error("Failed to delete enquiry:", error.message);
//     } else {
//       setEnquiries((prev) => prev.filter((e) => e.id !== id));
//       console.log("Enquiry deleted successfully!");
//     }
//   };



//   const handleUpdateEnquiry = async (updatedData: any) => {
//     if (!selectedEnquiry) return;

//     // Get logged-in user from Supabase
//     const { data, error: userError } = await supabase.auth.getUser();

//     if (userError) {
//       alert("Failed to get user");
//       return;
//     }

//     const userId = data?.user?.id; // <-- THIS is the userId
//     if (!userId) {
//       alert("User not logged in");
//       return;
//     }

//     console.log("Logged-in user:", userId);

//     // Update only if the enquiry belongs to the user
//     const { error } = await supabase
//       .from("enquiries")
//       .update(updatedData)
//       .eq("id", selectedEnquiry.id) // enquiry ID
//       .eq("user_id", userId); // user ID

//     if (error) {
//       alert("Failed to update enquiry: " + error.message);
//     } else {
//       alert("Enquiry updated successfully!");
//       fetchEnquiries();
//       setShowEditForm(false);
//     }
//   };

//   const filteredBuyEnquiries = enquiries.filter(
//     (e) => e.listing_type === "buy"
//   );
//   const filteredSellEnquiries = enquiries.filter(
//     (e) => e.listing_type === "sell"
//   );

//   const HeaderRow = () => (
//     <div className="grid grid-cols-12 gap-2 items-center py-3 font-semibold text-white bg-primary border-b border-gray-300 text-sm">
//       <div className="col-span-1 px-2">Name</div>
//       <div className="col-span-1 px-2">Listing</div>
//       <div className="col-span-2 px-2">Property</div>
//       <div className="col-span-2 px-2">Mobile</div>
//       <div className="col-span-2 px-2">Location</div>
//       <div className="col-span-1 px-2">Budget</div>
//       <div className="col-span-1 px-2">Date</div>
//       <div className="col-span-1 px-2">Referred</div>
//       <div className="col-span-1 px-2 text-right">Actions</div>
//     </div>
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between gap-4 flex-wrap">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold text-primary">
//             Enquiries
//           </h2>
//           <p className="text-muted-foreground">
//             Manage your leads and enquiries
//           </p>
//         </div>
//         <Button
//           onClick={() => setShowAddForm(true)}
//           data-testid="button-add-enquiry"
//         >
//           <Plus className="h-4 w-4 mr-2" />
//           Add Enquiry
//         </Button>
//       </div>

//       <Tabs value={activeTab} onValueChange={setActiveTab}>
//         <TabsList className="grid w-full grid-cols-3 max-w-md">
//           <TabsTrigger value="all" data-testid="tab-all">
//             All
//           </TabsTrigger>
//           <TabsTrigger value="buy" data-testid="tab-buy">
//             Buy
//           </TabsTrigger>
//           <TabsTrigger value="sell" data-testid="tab-sell">
//             Sell
//           </TabsTrigger>
//         </TabsList>

//         {/* ALL TAB */}
//         <TabsContent value="all" className="mt-6 w-full">
//           <div className="w-full overflow-x-auto">
//             <HeaderRow />
//             <div className="space-y-2 w-full">
//               {enquiries.map((enquiry) => (
//                 <EnquiryCard
//                   key={enquiry.id}
//                   {...enquiry}
//                   onEdit={handleEdit}
//                   onDelete={handleDelete}
//                   onCall={(mobile) => console.log("Call:", mobile)}
//                 />
//               ))}
//             </div>
//           </div>
//         </TabsContent>

//         {/* BUY TAB */}
//         <TabsContent value="buy" className="mt-6 w-full">
//           <div className="w-full overflow-x-auto">
//             <HeaderRow />
//             <div className="space-y-2 w-full">
//               {filteredBuyEnquiries.map((enquiry) => (
//                 <EnquiryCard
//                   key={enquiry.id}
//                   {...enquiry}
//                   onEdit={handleEdit}
//                   onDelete={handleDelete}
//                   onCall={(mobile) => console.log("Call:", mobile)}
//                 />
//               ))}
//             </div>
//           </div>
//         </TabsContent>

//         {/* SELL TAB */}
//         <TabsContent value="sell" className="mt-6 w-full">
//           <div className="w-full overflow-x-auto">
//             <HeaderRow />
//             <div className="space-y-2 w-full">
//               {filteredSellEnquiries.map((enquiry) => (
//                 <EnquiryCard
//                   key={enquiry.id}
//                   {...enquiry}
//                   onEdit={handleEdit}
//                   onDelete={handleDelete}
//                   onCall={(mobile) => console.log("Call:", mobile)}
//                 />
//               ))}
//             </div>
//           </div>
//         </TabsContent>
//       </Tabs>

//       <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
//         <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle>Add New Enquiry</DialogTitle>
//           </DialogHeader>
//           <EnquiryForm
//             onSubmit={handleAddEnquiry}
//             onCancel={() => setShowAddForm(false)}
//           />
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showEditForm} onOpenChange={setShowEditForm}>
//         <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle>Edit Enquiry</DialogTitle>
//           </DialogHeader>
//           {selectedEnquiry && (
//             <EnquiryForm
//               defaultValues={selectedEnquiry}
//               onSubmit={handleUpdateEnquiry}
//               onCancel={() => setShowEditForm(false)}
//             />
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EnquiryCard from "@/components/EnquiryCard";
import EnquiryForm from "@/components/EnquiryForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { supabase } from "@/supabaseClient";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface Enquiry {
  id: string;
  user_id?: string;
  name: string;
  mobile_number: string;
  listing_type: string;
  location: string;
  type: "buy" | "sell";
  budget?: string;
  selling_rate?: string;
  date: string;
  referred_by?: string;
  remarks?: string;
   property_id?: string;
    status_name?: string;
}

export default function Enquiries() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  // ---- Pagination State (Changed) ----
const [page, setPage] = useState(1); // for "All" tab
const [buyPage, setBuyPage] = useState(1);
const [sellPage, setSellPage] = useState(1);
const [rentPage, setRentPage] = useState(1);
const [pageSize] = useState(6); // rows per page, changed from 10 to 5
const [totalRows, setTotalRows] = useState(0); // total rows for "All" tab

  // ---- Fetch Enquiries with pagination (Changed) ----
  // const fetchEnquiries = async () => {
  //   setLoading(true);
  //   try {
  //     const { data: userData } = await supabase.auth.getUser();
  //     const userId = userData?.user?.id;

  //     if (!userId) {
  //       setEnquiries([]);
  //       setLoading(false);
  //       return;
  //     }

  //       const { data: userProfile, error: profileError } = await supabase
  //     .from("users")
  //     .select("company_id")
  //     .eq("id", userId)
  //     .single();

  //   if (profileError || !userProfile) {
  //     console.error("User profile not found", profileError);
  //     setEnquiries([]);
  //     setLoading(false);
  //     return;
  //   }

  //   const companyId = userProfile.company_id;

  //     const from = (page - 1) * pageSize;
  //     const to = from + pageSize - 1;

  //     const { data, count, error } = await supabase
  //       .from("enquiries")
  //       .select("*", { count: "exact" }) // needed for total rows
  //       .eq("company_id", companyId)
  //       .order("date", { ascending: false })
  //       .range(from, to);

  //     if (error) {
  //       console.error("Error fetching enquiries:", error.message);
  //     } else if (data) {
  //       setEnquiries(data as Enquiry[]);
  //       setTotalRows(count || 0);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchEnquiries = async () => {
  setLoading(true);
  try {
    // 1️⃣ Get logged-in user
    const { data: userData } = await supabase.auth.getUser();
    const userId = userData?.user?.id;
    if (!userId) {
      setEnquiries([]);
      setLoading(false);
      return;
    }

    // 2️⃣ Get company_id
    const { data: userProfile, error: profileError } = await supabase
      .from("users")
      .select("company_id")
      .eq("id", userId)
      .single();

    if (profileError || !userProfile) {
      console.error("User profile not found", profileError);
      setEnquiries([]);
      setLoading(false);
      return;
    }

    const companyId = userProfile.company_id;

    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    // 3️⃣ Fetch enquiries with status_name via foreign key
    const { data, count, error } = await supabase
      .from("enquiries")
      .select(`
        *,
        enquiry_status:status_id(status_name)
      `, { count: "exact" })  // status_id is FK
      .eq("company_id", companyId)
      .order("date", { ascending: false })
      .range(from, to);

    if (error) {
      console.error("Error fetching enquiries:", error.message);
      setEnquiries([]);
    } else if (data) {
      // Map status_name directly for easier rendering
      const enriched = (data as any[]).map((e) => ({
        ...e,
        status_name: e.enquiry_status?.status_name || "-",
      }));

      setEnquiries(enriched);
      setTotalRows(count || 0);
    }
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchEnquiries();
  }, [page]); // Re-fetch when page changes

  const handleAddEnquiry = (newEnquiry: any) => {
    fetchEnquiries();
    setShowAddForm(false);
  };

  const handleEdit = (id: string) => {
    const enquiry = enquiries.find((e) => e.id === id);
    if (enquiry) {
      setSelectedEnquiry(enquiry);
      setShowEditForm(true);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this enquiry?");
    if (!confirmDelete) return;

    const { error } = await supabase.from("enquiries").delete().eq("id", id);
    if (!error) setEnquiries((prev) => prev.filter((e) => e.id !== id));
  };

  const handleUpdateEnquiry = async (updatedData: any) => {
    if (!selectedEnquiry) return;
    const { data, error: userError } = await supabase.auth.getUser();
    const userId = data?.user?.id;
    if (!userId) return;

    const { error } = await supabase
      .from("enquiries")
      .update(updatedData)
      .eq("id", selectedEnquiry.id)
      .eq("user_id", userId);

    if (!error) {
      fetchEnquiries();
      setShowEditForm(false);
    }
  };

  const exportToExcel = async () => {
  // Prepare array to hold rows with property titles
  const exportData = await Promise.all(
    enquiries.map(async (e) => {
      let propertyTitle = "-";

      if (e.property_id) {
        const { data, error } = await supabase
          .from("properties")
          .select("title")
          .eq("id", e.property_id)
          .single();

        if (!error && data) {
          propertyTitle = data.title;
        }
      }

      return {
        Name: e.name,
        Listing: e.listing_type,
        Property: propertyTitle,
        Mobile: e.mobile_number,
        Location: e.location,
        Budget: e.budget ?? e.selling_rate ?? "-",
        Date: e.date.split("T")[0],
        Referred: e.referred_by ?? "-",
      };
    })
  );

  // Create worksheet
  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");

  // Export
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, "Enquiries.xlsx");
};

  // ---- Filter and paginate tabs (Changed) ----
  const filteredBuyEnquiries = enquiries.filter((e) => e.listing_type === "buy");
  const filteredSellEnquiries = enquiries.filter((e) => e.listing_type === "sell");
  const filteredRentEnquiries = enquiries.filter((e) => e.listing_type === "rent");

  const paginatedBuyEnquiries = filteredBuyEnquiries.slice(
    (buyPage - 1) * pageSize,
    buyPage * pageSize
  );

  const paginatedSellEnquiries = filteredSellEnquiries.slice(
    (sellPage - 1) * pageSize,
    sellPage * pageSize
  );
  const paginatedRentEnquiries = filteredRentEnquiries.slice(
  (rentPage - 1) * pageSize,
  rentPage * pageSize
);


const HeaderRow = () => (
  <div className="grid grid-cols-12 gap-2 items-center py-3 font-semibold text-white bg-primary border-b border-gray-300 text-sm">
    <div className="col-span-1 px-2">Name</div>
    <div className="col-span-1 px-2">Type</div>
    <div className="col-span-2 px-2">Property</div>
    <div className="col-span-1 px-2">Mobile</div>
    <div className="col-span-2 px-2">Location</div>
    <div className="col-span-1 px-2">Amount</div>
    <div className="col-span-1 px-2">Date</div>
    <div className="col-span-1 px-2">Referred</div>
    <div className="col-span-1 px-2">Status</div>  {/* ✅ New Status column */}
    <div className="col-span-1 px-2 text-right">Actions</div>
  </div>
);


  return (
    <div className="space-y-6">
      {/* Header */}
    <div className="flex items-center justify-between gap-4 flex-wrap">
  <div>
    <h2 className="text-2xl md:text-3xl font-bold text-primary">
      Enquiries
    </h2>
    <p className="text-muted-foreground">
      Manage your leads and enquiries
    </p>
  </div>
  <div className="flex gap-2">
    <Button
      onClick={() => setShowAddForm(true)}
      data-testid="button-add-enquiry"
    >
      <Plus className="h-4 w-4 mr-2" />
      Add Enquiry
    </Button>
    <Button onClick={exportToExcel}>Export to Excel</Button>
  </div>
</div>


      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 max-w-md">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
           <TabsTrigger value="rent">Rent</TabsTrigger>
        </TabsList>

        {/* ALL TAB */}
        <TabsContent value="all" className="mt-6 w-full">
          <div className="w-full overflow-x-auto">
            <HeaderRow />
            <div className="space-y-2 w-full">
              {enquiries.map((enquiry) => (
                <EnquiryCard
                  key={enquiry.id}
                  {...enquiry}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onCall={(mobile) => console.log("Call:", mobile)}
                />
              ))}
            </div>
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-end items-center gap-2 mt-4">
            <Button onClick={() => setPage(page - 1)} disabled={page === 1} size="sm">
              Previous
            </Button>
            <span>Page {page} of {Math.ceil(totalRows / pageSize)}</span>
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page >= Math.ceil(totalRows / pageSize)}
              size="sm"
            >
              Next
            </Button>
          </div>
        </TabsContent>

        {/* BUY TAB */}
        <TabsContent value="buy" className="mt-6 w-full">
          <div className="w-full overflow-x-auto">
            <HeaderRow />
            <div className="space-y-2 w-full">
              {paginatedBuyEnquiries.map((enquiry) => (
                <EnquiryCard
                  key={enquiry.id}
                  {...enquiry}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onCall={(mobile) => console.log("Call:", mobile)}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-end items-center gap-2 mt-4">
            <Button onClick={() => setBuyPage(buyPage - 1)} disabled={buyPage === 1} size="sm">
              Previous
            </Button>
            <span>Page {buyPage} of {Math.ceil(filteredBuyEnquiries.length / pageSize)}</span>
            <Button
              onClick={() => setBuyPage(buyPage + 1)}
              disabled={buyPage >= Math.ceil(filteredBuyEnquiries.length / pageSize)}
              size="sm"
            >
              Next
            </Button>
          </div>
        </TabsContent>

        {/* SELL TAB */}
        <TabsContent value="sell" className="mt-6 w-full">
          <div className="w-full overflow-x-auto">
            <HeaderRow />
            <div className="space-y-2 w-full">
              {paginatedSellEnquiries.map((enquiry) => (
                <EnquiryCard
                  key={enquiry.id}
                  {...enquiry}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onCall={(mobile) => console.log("Call:", mobile)}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-end items-center gap-2 mt-4">
            <Button onClick={() => setSellPage(sellPage - 1)} disabled={sellPage === 1} size="sm">
              Previous
            </Button>
            <span>Page {sellPage} of {Math.ceil(filteredSellEnquiries.length / pageSize)}</span>
            <Button
              onClick={() => setSellPage(sellPage + 1)}
              disabled={sellPage >= Math.ceil(filteredSellEnquiries.length / pageSize)}
              size="sm"
            >
              Next
            </Button>
          </div>
        </TabsContent>
{/* RENT TAB */}
<TabsContent value="rent" className="mt-6 w-full">
  <div className="w-full overflow-x-auto">
    <HeaderRow />
    <div className="space-y-2 w-full">
      {paginatedRentEnquiries.map((enquiry) => (
        <EnquiryCard
          key={enquiry.id}
          {...enquiry}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCall={(mobile) => console.log("Call:", mobile)}
        />
      ))}
    </div>
  </div>

  {/* Pagination */}
  <div className="flex justify-end items-center gap-2 mt-4">
    <Button onClick={() => setRentPage(rentPage - 1)} disabled={rentPage === 1} size="sm">
      Previous
    </Button>
    <span>
      Page {rentPage} of {Math.ceil(filteredRentEnquiries.length / pageSize)}
    </span>
    <Button
      onClick={() => setRentPage(rentPage + 1)}
      disabled={rentPage >= Math.ceil(filteredRentEnquiries.length / pageSize)}
      size="sm"
    >
      Next
    </Button>
  </div>
</TabsContent>


      </Tabs>

      

      {/* Add/Edit Dialogs */}
      <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Enquiry</DialogTitle>
          </DialogHeader>
          <EnquiryForm onSubmit={handleAddEnquiry} onCancel={() => setShowAddForm(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={showEditForm} onOpenChange={setShowEditForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Enquiry</DialogTitle>
          </DialogHeader>
          {selectedEnquiry && (
            <EnquiryForm
              defaultValues={selectedEnquiry}
              onSubmit={handleUpdateEnquiry}
              onCancel={() => setShowEditForm(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
