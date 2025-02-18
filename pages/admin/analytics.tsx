import Layout from "../../components/admin-dashboard/Layout";

const Analytics = () => {
  return (
    <Layout>
      <h2 className="text-xl font-bold text-white mb-6">Website Analytics</h2>
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <div className="h-64 bg-gray-700/50 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Analytics Chart Placeholder</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all">
            <h3 className="text-gray-400">Page Views</h3>
            <p className="text-3xl font-bold text-white mt-2">45,678</p>
            <p className="text-green-400 text-sm mt-2">
              <i className="fa-solid fa-arrow-up"></i> +15% from last month
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-400 transition-all">
            <h3 className="text-gray-400">New Users</h3>
            <p className="text-3xl font-bold text-white mt-2">3,456</p>
            <p className="text-purple-400 text-sm mt-2">
              <i className="fa-solid fa-arrow-up"></i> +10% from last month
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all">
            <h3 className="text-gray-400">Bounce Rate</h3>
            <p className="text-3xl font-bold text-white mt-2">32.5%</p>
            <p className="text-red-400 text-sm mt-2">
              <i className="fa-solid fa-arrow-down"></i> -5% from last month
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
