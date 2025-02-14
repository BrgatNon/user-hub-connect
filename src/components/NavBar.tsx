
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogIn, LogOut, Upload } from "lucide-react";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic
    setIsSignUpOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfilePicture(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed top-0 right-0 p-4">
      {!isLoggedIn ? (
        <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
          <DialogTrigger asChild>
            <Button>
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">Login</Button>
              <p className="text-center text-sm">
                Don't have an account?{" "}
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => {
                    setIsLoginOpen(false);
                    setIsSignUpOpen(true);
                  }}
                >
                  Sign up
                </Button>
              </p>
            </form>
          </DialogContent>
        </Dialog>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-full p-0">
              <Avatar>
                <AvatarImage src={profilePicture || undefined} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Sign Up</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profilePicture || undefined} />
                  <AvatarFallback>
                    <Upload className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required />
              </div>
            </div>
            <div>
              <Label htmlFor="middleName">Middle Name (Optional)</Label>
              <Input id="middleName" />
            </div>
            <div>
              <Label htmlFor="signUpEmail">Email Address</Label>
              <Input id="signUpEmail" type="email" required />
            </div>
            <div>
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input id="contactNumber" type="tel" required />
            </div>
            <div>
              <Label htmlFor="signUpPassword">Password</Label>
              <Input id="signUpPassword" type="password" required />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" required />
            </div>
            <Button type="submit" className="w-full">Sign Up</Button>
            <p className="text-center text-sm">
              Already have an account?{" "}
              <Button
                variant="link"
                className="p-0"
                onClick={() => {
                  setIsSignUpOpen(false);
                  setIsLoginOpen(true);
                }}
              >
                Login
              </Button>
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavBar;
