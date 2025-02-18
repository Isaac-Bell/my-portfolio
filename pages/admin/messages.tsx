import Layout from '../../components/admin-dashboard/Layout'

const Messages = () => {
  return (
    <Layout>
      <h2 className="text-xl font-bold text-white mb-6">User Messages</h2>
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <div className="space-y-4">
          <div className="flex items-center text-gray-300 bg-gray-700/30 p-4 rounded-lg">
            <i className="fa-solid fa-user text-cyan-400 mr-4"></i>
            <div>
              <p className="text-sm font-semibold">Sarah Connor</p>
              <p className="text-xs text-gray-400">
                &rdquo;Hi, I need help with my account!&rdquo;
              </p>
              <p className="text-xs text-gray-500">5 minutes ago</p>
            </div>
          </div>

          <div className="flex items-center text-gray-300 bg-gray-700/30 p-4 rounded-lg">
            <i className="fa-solid fa-user text-purple-400 mr-4"></i>
            <div>
              <p className="text-sm font-semibold">John Matrix</p>
              <p className="text-xs text-gray-400">
                &rdquo;Can I get access to the admin panel?&rdquo;
              </p>
              <p className="text-xs text-gray-500">30 minutes ago</p>
            </div>
          </div>

          <div className="flex items-center text-gray-300 bg-gray-700/30 p-4 rounded-lg">
            <i className="fa-solid fa-user text-green-400 mr-4"></i>
            <div>
              <p className="text-sm font-semibold">Alice Carter</p>
              <p className="text-xs text-gray-400">
                &quot;Thanks for approving my request!&quot;
              </p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Messages
