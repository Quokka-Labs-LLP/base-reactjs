import { ModeToggle } from '@/components/mode-toggle'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-primary p-2">
      <Link to="/">Header</Link>
      <Link to="posts">Post</Link>
      <Link to="blog">Blog</Link>
      <ModeToggle />
    </div>
  )
}

export default Header
