import Layout from "../../components/admin-dashboard/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-400">Active Users</h3>
            <i className="fa-solid fa-users text-cyan-400"></i>
          </div>
          <p className="text-3xl font-bold text-white mt-2">1,234</p>
          <p className="text-green-400 text-sm mt-2">
            <i className="fa-solid fa-arrow-up"></i> +12% from last week
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-400 transition-all">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-400">Pending Requests</h3>
            <i className="fa-solid fa-clock text-purple-400"></i>
          </div>
          <p className="text-3xl font-bold text-white mt-2">23</p>
          <p className="text-purple-400 text-sm mt-2">
            <i className="fa-solid fa-arrow-down"></i> -5% from last week
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-400">System Status</h3>
            <i className="fa-solid fa-server text-blue-400"></i>
          </div>
          <p className="text-3xl font-bold text-white mt-2">99.9%</p>
          <p className="text-blue-400 text-sm mt-2">All systems operational</p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
