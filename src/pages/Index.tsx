
import { useState } from "react";
import { motion } from "framer-motion";
import DashboardCard from "@/components/DashboardCard";
import { FileText, HelpCircle, Award, Megaphone, Newspaper } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleCardClick = (section: string) => {
    setSelectedSection(section);
    toast({
      title: `${section} selected`,
      description: "This feature will be implemented in the next iteration.",
    });
  };

  const dashboardItems = [
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
    {
      title: "Announcements",
      description: "View latest updates and announcements",
      icon: Megaphone,
      onClick: () => handleCardClick("Announcements"),
    },
    {
      title: "News & Reports",
      description: "Access recent news and detailed reports",
      icon: Newspaper,
      onClick: () => handleCardClick("News & Reports"),
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Index;
