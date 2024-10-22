import { Typography } from '@mui/material'
import FileUpload from '../components/fileUpload/index'

const Dashboard = () => {
  return (
    <Typography variant="body1">
      Dashboard
      <div>
        <FileUpload />
      </div>
    </Typography>
  )
}

export default Dashboard
