
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
}

const DashboardCard = ({
  title,
  description,
  icon: Icon,
  onClick,
  className,
}: DashboardCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "p-6 rounded-xl bg-white shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-lg bg-gray-50">
          <Icon className="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <h3 className="font-medium text-lg text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
