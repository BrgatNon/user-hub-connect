import { useState } from "react";
import { motion } from "framer-motion";
import DashboardCard from "@/components/DashboardCard";
import { FileText, HelpCircle, Award, Megaphone, Newspaper } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the form schema
const formSchema = z.object({
  reason: z.string().min(1, "Reason is required"),
  description: z.string().min(1, "Description is required"),
});

type FormData = z.infer<typeof formSchema>;

const Index = () => {
  const { toast } = useToast();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason: "",
      description: "",
    },
  });

  const handleCardClick = (section: string) => {
    setSelectedSection(section);
    setIsDialogOpen(true);
  };

  const handleSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast({
      title: `${selectedSection} submitted`,
      description: "Your request has been received.",
    });
    setIsDialogOpen(false);
    form.reset();
  };

  // Sample data for demonstration
  const announcements = [
    { id: 1, title: "System Maintenance", date: "2024-03-15", content: "Scheduled maintenance on March 20th" },
    { id: 2, title: "Holiday Notice", date: "2024-03-14", content: "Office closed on upcoming holidays" },
  ];

  const news = [
    { id: 1, title: "Q1 Report Released", date: "2024-03-13", content: "First quarter performance results are now available" },
    { id: 2, title: "New Policy Update", date: "2024-03-12", content: "Important changes to service policies" },
  ];

  const serviceItems = [
    {
      title: "File Complaint",
      description: "Submit a formal complaint or grievance",
      icon: FileText,
      onClick: () => handleCardClick("File Complaint"),
    },
    {
      title: "Request Assistance",
      description: "Get help with your queries or concerns",
      icon: HelpCircle,
      onClick: () => handleCardClick("Request Assistance"),
    },
    {
      title: "Request Certificate",
      description: "Apply for official certificates and documents",
      icon: Award,
      onClick: () => handleCardClick("Request Certificate"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medium text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-500 mb-8">
            Welcome to your service dashboard. Select a service to begin.
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {serviceItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <DashboardCard {...item} />
            </motion.div>
          ))}
        </div>

        {/* Announcements and News Section */}
        <div className="space-y-8">
          {/* Announcements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Megaphone className="w-6 h-6 text-gray-600" />
              <h2 className="text-xl font-medium text-gray-900">Announcements</h2>
            </div>
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="border-b border-gray-100 pb-4 last:border-0">
                  <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{announcement.content}</p>
                  <span className="text-xs text-gray-400 mt-2 block">{announcement.date}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* News & Reports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Newspaper className="w-6 h-6 text-gray-600" />
              <h2 className="text-xl font-medium text-gray-900">News & Reports</h2>
            </div>
            <div className="space-y-4">
              {news.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.content}</p>
                  <span className="text-xs text-gray-400 mt-2 block">{item.date}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dialog */}
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent className="sm:max-w-[425px]">
            <AlertDialogHeader>
              <AlertDialogTitle>{selectedSection}</AlertDialogTitle>
              <AlertDialogDescription>
                Please provide the following information:
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="py-4">
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reason for {selectedSection?.toLowerCase()}</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your reason" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Provide more details"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => form.reset()}>Cancel</AlertDialogCancel>
                  <Button type="submit">Submit</Button>
                </AlertDialogFooter>
              </form>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Index;
