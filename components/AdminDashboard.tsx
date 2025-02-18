import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Sidebar from "./admin-dashboard/SideBar";
import Dashboard from "@/pages/admin";
import UserAccess from "@/pages/admin/user-access";
import Messages from "@/pages/admin/messages";
import Analytics from "@/pages/admin/analytics";
import SystemLogs from "@/pages/admin/system-logs";

interface Message {
  id: string;
  name: string;
  email: string;
  content: string;
}

const AdminDashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeTab, setActiveTab] = useState('dashboard');


  useEffect(() => {
    fetchMessages();
   
  }, []);

  const fetchMessages = async () => {
    const { data } = await axios.get("/api/messages");
    setMessages(data);
  };

  const deleteMessage = async (id: string) => {
    await axios.delete(`/api/messages/${id}`);
    fetchMessages();
  };

  const replyToMessage = async (id: string, email: string, replyText: string) => {
    await axios.post(`/api/messages/reply`, { id, email, replyText });
    fetchMessages();
  };
  
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-auto p-6">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'user-access' && <UserAccess />}
        {activeTab === 'messages' && <Messages />}
        {activeTab === 'analytics' && <Analytics />}
        {activeTab === 'system-logs' && <SystemLogs />}
      </main>
    </div>
  );
};

export default AdminDashboard;
