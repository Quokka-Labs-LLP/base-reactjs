import axios from 'axios'
const handleFileInput = (
  url: string,
  dirName: string
): Promise<File | null> => {
  return new Promise((resolve, reject) => {
    const inputElement: HTMLInputElement = document.createElement('input')
    inputElement.type = 'file'
    inputElement.accept = 'image/*,video/*'
    inputElement.style.display = 'none'
    inputElement.id = 'mediaInput'

    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement
      if (target.files && target.files.length > 0) {
        const file: File = target.files[0]
        const validationResult = validateMediaFile(file)
        if (validationResult.isValid) {
          resolve(file)
          fetchMediaUrl(file, url, dirName)
        } else {
          console.log(validationResult.message)
          reject(new Error(validationResult.message))
        }
      } else {
        resolve(null)
      }
    }

    inputElement.addEventListener('change', handleChange)
    document.body.appendChild(inputElement)
    inputElement.click()
  })
}

const fetchMediaUrl = async (file: File, url: string, dirName: string) => {
  await axios
    .get(`${url}?filename=${dirName}/${file.name}`)
    .then((res) => {
      console.log('This is response', res)
      addMediaTos3(file, res.data.signed_url)
    })
    .catch((er) => {
      console.log('Error please try again', er)
    })
}
const addMediaTos3 = async (media: File, url: string) => {
  await axios.put(url, media)
}
const validateMediaFile = (
  file: File
): { isValid: boolean; message: string } => {
  const maxSizeInMB: number = 10
  const allowedTypes: string[] = ['image/jpeg', 'image/png', 'video/mp4']
  if (file.size > maxSizeInMB * 1024 * 1024) {
    return {
      isValid: false,
      message: 'File is too large. Maximum size is 10MB.',
    }
  }
  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      message:
        'Unsupported file type. Only JPEG, PNG images, and MP4 videos are allowed.',
    }
  }
  return { isValid: true, message: 'File is valid.' }
}
export default handleFileInput
