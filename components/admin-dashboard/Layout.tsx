import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Sidebar from "./SideBar";
import Header from "./Header";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session) router.push("/api/auth/signin"); // Redirect if no session
    if (session && !["admin@example.com", "your-email@example.com"].includes(session.user?.email || "")) {
      router.push("/unauthorized"); // Redirect unauthorized users
    }
  }, [session, status, router]);

  if (status === "loading" || !session) {
    return <p className="text-white text-center mt-10">Loading...</p>; // Show loading state
  }

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
