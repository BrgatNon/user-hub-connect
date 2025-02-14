
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, PlusCircle, Edit, Trash, Check, X } from "lucide-react";

const AdminDashboard = () => {
  // Mock data for initial UI development
  const tickets = [
    {
      id: "1",
      type: "File Complaint",
      status: "Pending",
      user: {
        profilePic: "/placeholder.svg",
        firstName: "John",
        lastName: "Doe",
        middleName: "Smith",
        email: "john@example.com",
        contactNumber: "123-456-7890",
      },
      content: "Complaint about noise pollution",
      createdAt: "2024-03-15",
    },
    // Add more mock tickets as needed
  ];

  const announcements = [
    {
      id: "1",
      title: "Community Meeting",
      thumbnail: "/placeholder.svg",
      content: "Monthly community meeting this Saturday",
      createdAt: "2024-03-15",
    },
    // Add more mock announcements
  ];

  const pendingUsers = [
    {
      id: "1",
      profilePic: "/placeholder.svg",
      firstName: "Jane",
      lastName: "Smith",
      middleName: "",
      email: "jane@example.com",
      contactNumber: "098-765-4321",
      status: "Pending",
    },
    // Add more mock pending users
  ];

  const users = [
    {
      id: "1",
      profilePic: "/placeholder.svg",
      firstName: "Alice",
      lastName: "Johnson",
      middleName: "",
      email: "alice@example.com",
      contactNumber: "111-222-3333",
      role: "user",
    },
    // Add more mock users
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <Tabs defaultValue="tickets" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="approval">User Approval</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        {/* Tickets Tab */}
        <TabsContent value="tickets">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
            <Accordion type="single" collapsible className="w-full">
              {tickets.map((ticket) => (
                <AccordionItem key={ticket.id} value={ticket.id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between w-full pr-4">
                      <span>{ticket.type}</span>
                      <span>{ticket.status}</span>
                      <span>{ticket.createdAt}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={ticket.user.profilePic} />
                          <AvatarFallback>
                            {ticket.user.firstName[0]}
                            {ticket.user.lastName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {ticket.user.firstName} {ticket.user.middleName}{" "}
                            {ticket.user.lastName}
                          </p>
                          <p className="text-sm text-gray-500">
                            {ticket.user.email}
                          </p>
                          <p className="text-sm text-gray-500">
                            {ticket.user.contactNumber}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-700">{ticket.content}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </TabsContent>

        {/* Announcements Tab */}
        <TabsContent value="announcements">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Announcements</h2>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Announcement
              </Button>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {announcements.map((announcement) => (
                <AccordionItem key={announcement.id} value={announcement.id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <img
                        src={announcement.thumbnail}
                        alt={announcement.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <span>{announcement.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-4">
                      <img
                        src={announcement.thumbnail}
                        alt={announcement.title}
                        className="w-full max-h-64 object-cover rounded"
                      />
                      <p className="text-gray-700">{announcement.content}</p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </TabsContent>

        {/* User Approval Tab */}
        <TabsContent value="approval">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Pending Approvals</h2>
            <Accordion type="single" collapsible className="w-full">
              {pendingUsers.map((user) => (
                <AccordionItem key={user.id} value={user.id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={user.profilePic} />
                        <AvatarFallback>
                          {user.firstName[0]}
                          {user.lastName[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span>
                        {user.firstName} {user.lastName}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={user.profilePic} />
                          <AvatarFallback>
                            {user.firstName[0]}
                            {user.lastName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {user.firstName} {user.middleName} {user.lastName}
                          </p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                          <p className="text-sm text-gray-500">
                            {user.contactNumber}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" className="w-full">
                          <Check className="mr-2 h-4 w-4" />
                          Approve
                        </Button>
                        <Button variant="destructive" className="w-full">
                          <X className="mr-2 h-4 w-4" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">All Users</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={user.profilePic} />
                          <AvatarFallback>
                            {user.firstName[0]}
                            {user.lastName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span>
                          {user.firstName} {user.lastName}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Role
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
