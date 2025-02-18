import Link from 'next/link'
import { useRouter } from 'next/router'

interface SidebarProps {
  activeTab?: string
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>
}
const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const router = useRouter()
  console.log(activeTab, setActiveTab)
  const navItems = [
    { name: 'Dashboard', href: '/', icon: 'fa-chart-line' },
    { name: 'User Access', href: '/admin/user-access', icon: 'fa-users' },
    { name: 'Messages', href: '/admin/messages', icon: 'fa-envelope' },
    { name: 'Analytics', href: '/admin/analytics', icon: 'fa-chart-bar' },
    { name: 'System Logs', href: '/admin/system-logs', icon: 'fa-terminal' },
  ]

  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          CyberDash
        </h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`p-2 rounded-lg ${
                router.pathname === item.href
                  ? 'bg-gray-700 text-cyan-400'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Link href={item.href} className="flex items-center">
                <i className={`fa-solid ${item.icon} mr-3`}></i>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
