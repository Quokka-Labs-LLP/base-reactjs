import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className="flex-col h-screen">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
