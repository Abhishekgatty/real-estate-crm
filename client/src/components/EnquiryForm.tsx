// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// interface EnquiryFormProps {
//   onSubmit: (data: any) => void;
//   onCancel?: () => void;
// }

// export default function EnquiryForm({ onSubmit, onCancel }: EnquiryFormProps) {
//   const [enquiryType, setEnquiryType] = useState<"buy" | "sell">("buy");
//   const [formData, setFormData] = useState({
//     date: new Date().toISOString().split('T')[0],
//     name: "",
//     referredBy: "",
//     mobile: "",
//     location: "",
//     budget: "",
//     sellingRate: "",
//     remarks: ""
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit({ ...formData, type: enquiryType });
//   };

//   const updateField = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Add New Enquiry</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <Tabs value={enquiryType} onValueChange={(v) => setEnquiryType(v as "buy" | "sell")}>
//           <TabsList className="grid w-full grid-cols-2 mb-6">
//             <TabsTrigger value="buy" data-testid="tab-buy">Buy</TabsTrigger>
//             <TabsTrigger value="sell" data-testid="tab-sell">Sell</TabsTrigger>
//           </TabsList>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="date">Date</Label>
//               <Input
//                 id="date"
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => updateField("date", e.target.value)}
//                 data-testid="input-date"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="name">Name *</Label>
//               <Input
//                 id="name"
//                 value={formData.name}
//                 onChange={(e) => updateField("name", e.target.value)}
//                 required
//                 data-testid="input-name"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="referredBy">Referred By</Label>
//               <Input
//                 id="referredBy"
//                 value={formData.referredBy}
//                 onChange={(e) => updateField("referredBy", e.target.value)}
//                 data-testid="input-referred-by"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="mobile">Mobile Number *</Label>
//               <Input
//                 id="mobile"
//                 type="tel"
//                 value={formData.mobile}
//                 onChange={(e) => updateField("mobile", e.target.value)}
//                 required
//                 data-testid="input-mobile"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="location">Location *</Label>
//               <Input
//                 id="location"
//                 value={formData.location}
//                 onChange={(e) => updateField("location", e.target.value)}
//                 required
//                 data-testid="input-location"
//               />
//             </div>

//             <TabsContent value="buy" className="mt-0 space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="budget">Budget</Label>
//                 <Input
//                   id="budget"
//                   value={formData.budget}
//                   onChange={(e) => updateField("budget", e.target.value)}
//                   placeholder="e.g., $500,000"
//                   data-testid="input-budget"
//                 />
//               </div>
//             </TabsContent>

//             <TabsContent value="sell" className="mt-0 space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="sellingRate">Selling Rate</Label>
//                 <Input
//                   id="sellingRate"
//                   value={formData.sellingRate}
//                   onChange={(e) => updateField("sellingRate", e.target.value)}
//                   placeholder="e.g., $750,000"
//                   data-testid="input-selling-rate"
//                 />
//               </div>
//             </TabsContent>

//             <div className="space-y-2">
//               <Label htmlFor="remarks">Remarks</Label>
//               <Textarea
//                 id="remarks"
//                 value={formData.remarks}
//                 onChange={(e) => updateField("remarks", e.target.value)}
//                 rows={3}
//                 data-testid="input-remarks"
//               />
//             </div>

//             <div className="flex gap-2 pt-4">
//               {onCancel && (
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={onCancel}
//                   className="flex-1"
//                   data-testid="button-cancel"
//                 >
//                   Cancel
//                 </Button>
//               )}
//               <Button type="submit" className="flex-1" data-testid="button-submit">
//                 Create Enquiry
//               </Button>
//             </div>
//           </form>
//         </Tabs>
//       </CardContent>
//     </Card>
//   );
// }

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { supabase } from "@/supabaseClient";

// interface EnquiryFormProps {
//   onSubmit: (data: any) => void;
//   onCancel?: () => void;
// }

// export default function EnquiryForm({ onSubmit, onCancel }: EnquiryFormProps) {
//   const [enquiryType, setEnquiryType] = useState<"buy" | "sell">("buy");
//   const [formData, setFormData] = useState({
//     date: new Date().toISOString().split('T')[0],
//     name: "",
//     referredBy: "",
//     mobile: "",
//     location: "",
//     budget: "",
//     sellingRate: "",
//     remarks: ""
//   });

//  const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   try {
//     const { data: userData } = await supabase.auth.getUser();
//     const user_id = userData?.user?.id;

//     if (!user_id) {
//       alert("Please log in to create an enquiry.");
//       return;
//     }

//     const { error } = await supabase
//       .from("enquiries")
//       .insert([
//         {
//           user_id,
//           listing_type: enquiryType,
//           date: formData.date,
//           name: formData.name,
//           referred_by: formData.referredBy,
//           mobile_number: formData.mobile,
//           location: formData.location,
//           // budget: formData.budget || null,
//           selling_rate: formData.sellingRate || null,
//           remarks: formData.remarks || null,
//         },
//       ]);

//     if (error) {
//       console.error("Error creating enquiry:", error.message);
//       alert("Failed to create enquiry. Please try again.");
//     } else {
//       alert("Enquiry created successfully!");
//       onSubmit && onSubmit({ ...formData, type: enquiryType }); // optional callback
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Something went wrong.");
//   }
// };

//   const updateField = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Add New Enquiry</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <Tabs value={enquiryType} onValueChange={(v) => setEnquiryType(v as "buy" | "sell")}>
//           <TabsList className="grid w-full grid-cols-2 mb-6">
//             <TabsTrigger value="buy" data-testid="tab-buy">Buy</TabsTrigger>
//             <TabsTrigger value="sell" data-testid="tab-sell">Sell</TabsTrigger>
//           </TabsList>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="date">Date</Label>
//               <Input
//                 id="date"
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => updateField("date", e.target.value)}
//                 data-testid="input-date"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="name">Name *</Label>
//               <Input
//                 id="name"
//                 value={formData.name}
//                 onChange={(e) => updateField("name", e.target.value)}
//                 required
//                 data-testid="input-name"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="referredBy">Referred By</Label>
//               <Input
//                 id="referredBy"
//                 value={formData.referredBy}
//                 onChange={(e) => updateField("referredBy", e.target.value)}
//                 data-testid="input-referred-by"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="mobile">Mobile Number *</Label>
//               <Input
//                 id="mobile"
//                 type="tel"
//                 value={formData.mobile}
//                 onChange={(e) => updateField("mobile", e.target.value)}
//                 required
//                 data-testid="input-mobile"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="location">Location *</Label>
//               <Input
//                 id="location"
//                 value={formData.location}
//                 onChange={(e) => updateField("location", e.target.value)}
//                 required
//                 data-testid="input-location"
//               />
//             </div>

//             <TabsContent value="buy" className="mt-0 space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="budget">Budget</Label>
//                 <Input
//                   id="budget"
//                   value={formData.budget}
//                   onChange={(e) => updateField("budget", e.target.value)}
//                   placeholder="e.g., $500,000"
//                   data-testid="input-budget"
//                 />
//               </div>
//             </TabsContent>

//             <TabsContent value="sell" className="mt-0 space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="sellingRate">Selling Rate</Label>
//                 <Input
//                   id="sellingRate"
//                   value={formData.sellingRate}
//                   onChange={(e) => updateField("sellingRate", e.target.value)}
//                   placeholder="e.g., $750,000"
//                   data-testid="input-selling-rate"
//                 />
//               </div>
//             </TabsContent>

//             <div className="space-y-2">
//               <Label htmlFor="remarks">Remarks</Label>
//               <Textarea
//                 id="remarks"
//                 value={formData.remarks}
//                 onChange={(e) => updateField("remarks", e.target.value)}
//                 rows={3}
//                 data-testid="input-remarks"
//               />
//             </div>

//             <div className="flex gap-2 pt-4">
//               {onCancel && (
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={onCancel}
//                   className="flex-1"
//                   data-testid="button-cancel"
//                 >
//                   Cancel
//                 </Button>
//               )}
//               <Button type="submit" className="flex-1" data-testid="button-submit">
//                 Create Enquiry
//               </Button>
//             </div>
//           </form>
//         </Tabs>
//       </CardContent>
//     </Card>
//   );
// }


import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/supabaseClient";

interface EnquiryFormProps {
  defaultValues?: any; // ✅ added this
  onSubmit: (data: any) => void;
  onCancel?: () => void;
}

export default function EnquiryForm({
  defaultValues,
  onSubmit,
  onCancel,
}: EnquiryFormProps) {
  const [enquiryType, setEnquiryType] = useState<"buy" | "sell">("buy");
  const [products, setProducts] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    name: "",
    referred_by: "",
    mobile_number: "",
    location: "",
    budget: "",
    selling_rate: "",
    remarks: "",
    property_id: "",
    
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
      if (userError || !user) return console.error(userError);

      const userId = user.id;

      const { data: userProfile, error: profileError } = await supabase
        .from("users")
        .select("company_id")
        .eq("id", userId)
        .single();

      if (profileError || !userProfile) return console.error(profileError);

      const companyId = userProfile.company_id;
      console.log("Logged-in user's company_id:", companyId);

      const { data: properties, error } = await supabase
        .from("properties")
        .select("*")
        .eq("company_id", companyId) // match company
        .neq("user_id", userId); // exclude current user

      console.log("Properties for company excluding current user:", properties);
      if (error) console.error(error);

      setProducts(properties || []);
    };

    fetchProducts();
  }, []);

  // ✅ populate form when editing
  useEffect(() => {
    if (defaultValues) {
      console.log("Received defaultValues:", defaultValues);
      setEnquiryType(defaultValues.listing_type || "buy");
      setFormData({
        date: defaultValues.date || "",
        name: defaultValues.name || "",
        property_id: formData.property_id,
        referred_by: defaultValues.referred_by || "",
        mobile_number: defaultValues.mobile_number || "",
        location: defaultValues.location || "",
        budget: defaultValues.budget || "",
        selling_rate: defaultValues.selling_rate || "",
        remarks: defaultValues.remarks || "",
      });
    }
  }, [defaultValues]);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 1️⃣ Get logged-in user
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData?.user?.id;

      console.log("USER ID:", userId);

      if (!userId) {
        alert("Please log in.");
        return;
      }

      // 2️⃣ Get company_id where created_by = userId
      const { data: userProfile, error: profileError } = await supabase
        .from("users")
        .select("company_id")
        .eq("id", userId)
        .single();

      if (profileError || !userProfile) {
        console.error("User profile not found", profileError);
        alert("❌ User profile not found. Please contact support.");
        return;
      }

      const companyId = userProfile.company_id;
      console.log("COMPANY ID:", companyId);

      // 3️⃣ UPDATE ENQUIRY
      if (defaultValues?.id) {
        const { error } = await supabase
          .from("enquiries")
          .update({
            listing_type: enquiryType,
            date: formData.date,
            name: formData.name,
            property_id: formData.property_id,
            budget: formData.budget || null,
            referred_by: formData.referred_by,
            mobile_number: formData.mobile_number,
            location: formData.location,
            selling_rate: formData.selling_rate || null,
            remarks: formData.remarks || null,
            updated_at: new Date().toISOString(),
          })
          .eq("id", defaultValues.id)
          .eq("user_id", userId);

        if (error) {
          console.error("Error updating enquiry:", error.message);
          alert("Failed to update enquiry");
        } else {
          alert("Enquiry updated successfully!");
          onSubmit({ ...formData, id: defaultValues.id });
        }

        return;
      }

      // 4️⃣ CREATE NEW ENQUIRY
     const { data: newEnquiry, error } = await supabase
        .from("enquiries")
        .insert([
          {
            user_id: userId,
            company_id: companyId, // REQUIRED FIELD
            listing_type: enquiryType,
            date: formData.date,
            name: formData.name,
            property_id: formData.property_id,
            budget: enquiryType === "buy" ? formData.budget || null : null,
            selling_rate:
              enquiryType === "sell" ? formData.selling_rate || null : null,
            referred_by: formData.referred_by,
            mobile_number: formData.mobile_number,
            location: formData.location,
            remarks: formData.remarks || null,
            created_at: new Date().toISOString(),
          },
        ])
        .select() // fetch inserted row
        .single();

      if (error) {
        console.error("Error creating enquiry:", error.message);
        alert("Failed to create enquiry");
        return;
      }
const description =
  enquiryType === "buy"
    ? `Enquiry details: Buy | Budget: ${formData.budget || "N/A"}`
    : `Enquiry details: Sell | Selling Rate: ${
        formData.selling_rate || "N/A"
      }`;

     
      await supabase.from("activity_feed").insert([
        {
          user_id: userId,
          company_id: companyId,
          action_type: "enquiry", // Type of activity
          title: `New Enquiry from ${formData.name}`,
          description: description,
          related_id: newEnquiry.id, // optionally link to enquiry id
          created_at: new Date().toISOString(),
        },
      ]);

      alert("Enquiry created successfully!");
      onSubmit(formData);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {defaultValues ? "Edit Enquiry" : "Add New Enquiry"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          value={enquiryType}
          onValueChange={(v) => setEnquiryType(v as "buy" | "sell")}
        >
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => updateField("date", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="property">Property *</Label>
              <select
                id="property"
                className="border rounded-md p-2 w-full"
                value={formData.property_id}
                onChange={(e) => updateField("property_id", e.target.value)}
                required
              >
                <option value="">Select Property</option>

                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} — {p.location}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="referredBy">Referred By</Label>
              <Input
                id="referredBy"
                value={formData.referred_by}
                onChange={(e) => updateField("referred_by", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input
                id="mobile"
                type="tel"
                value={formData.mobile_number}
                onChange={(e) => updateField("mobile_number", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => updateField("location", e.target.value)}
                required
              />
            </div>

            <TabsContent value="buy" className="mt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                  placeholder="e.g., ₹10,00,000"
                />
              </div>
            </TabsContent>

            <TabsContent value="sell" className="mt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sellingRate">Selling Rate</Label>
                <Input
                  id="sellingRate"
                  value={formData.selling_rate}
                  onChange={(e) => updateField("selling_rate", e.target.value)}
                  placeholder="e.g., ₹15,00,000"
                />
              </div>
            </TabsContent>

            <div className="space-y-2">
              <Label htmlFor="remarks">Remarks</Label>
              <Textarea
                id="remarks"
                value={formData.remarks}
                onChange={(e) => updateField("remarks", e.target.value)}
                rows={3}
              />
            </div>

            <div className="flex gap-2 pt-4">
              {onCancel && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  className="flex-1"
                >
                  Cancel
                </Button>
              )}
              <Button type="submit" className="flex-1">
                {defaultValues ? "Update Enquiry" : "Create Enquiry"}
              </Button>
            </div>
          </form>
        </Tabs>
      </CardContent>
    </Card>
  );
}
