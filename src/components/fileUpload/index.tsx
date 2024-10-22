import handleFileInput from '../../lib/mediaUpload'
const FileUploadeUplo = () => {
  const url =
    'https://m9rsao86n8.execute-api.us-east-2.amazonaws.com/signed-url-upload'
  const dirName = 'blog'
  const handleMediaInput = () => {
    handleFileInput(url, dirName)
  }
  return (
    <>
      Upload images
      <button onClick={handleMediaInput}>Upload</button>
    </>
  )
}

export default FileUploadeUplo
