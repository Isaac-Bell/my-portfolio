import Layout from "../../components/admin-dashboard/Layout";

const UserAccess = () => {
  return (
    <Layout>
      <h2 className="text-xl font-bold text-white mb-6">User Access Requests</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="text-left py-3">User</th>
              <th className="text-left py-3">Role</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700 text-gray-300">
              <td className="py-3 flex items-center">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" className="w-8 h-8 rounded-full mr-3" />
                <span>Sarah Connor</span>
              </td>
              <td className="py-3">Developer</td>
              <td className="py-3"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm">Pending</span></td>
              <td className="py-3">
                <button className="text-green-400 hover:text-green-500 mr-3"><i className="fa-solid fa-check"></i></button>
                <button className="text-red-400 hover:text-red-500"><i className="fa-solid fa-times"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default UserAccess;
