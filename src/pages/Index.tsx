
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Services Section */}
          <div className="lg:col-span-1 space-y-6">
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
          <div className="lg:col-span-2 space-y-6">
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
        </div>
      </div>
    </div>
  );
};

export default Index;
