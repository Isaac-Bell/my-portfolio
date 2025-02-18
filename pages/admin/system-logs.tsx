import Layout from "../../components/admin-dashboard/Layout";

const SystemLogs = () => {
  return (
    <Layout>
      <h2 className="text-xl font-bold text-white mb-6">System Logs</h2>
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-3">
        <div className="flex items-center text-gray-300 bg-gray-700/30 p-4 rounded-lg">
          <i className="fa-solid fa-circle-info text-blue-400 mr-4"></i>
          <div>
            <p className="text-sm">System update completed</p>
            <p className="text-xs text-gray-400">2 minutes ago</p>
          </div>
        </div>

        <div className="flex items-center text-gray-300 bg-gray-700/30 p-4 rounded-lg">
          <i className="fa-solid fa-triangle-exclamation text-yellow-400 mr-4"></i>
          <div>
            <p className="text-sm">High CPU usage detected</p>
            <p className="text-xs text-gray-400">15 minutes ago</p>
          </div>
        </div>

        <div className="flex items-center text-gray-300 bg-gray-700/30 p-4 rounded-lg">
          <i className="fa-solid fa-shield text-green-400 mr-4"></i>
          <div>
            <p className="text-sm">Firewall rules updated</p>
            <p className="text-xs text-gray-400">1 hour ago</p>
          </div>
        </div>

        <div className="flex items-center text-gray-300 bg-gray-700/30 p-4 rounded-lg">
          <i className="fa-solid fa-server text-purple-400 mr-4"></i>
          <div>
            <p className="text-sm">Database backup completed</p>
            <p className="text-xs text-gray-400">3 hours ago</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SystemLogs;
