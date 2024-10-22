import React, { useState } from 'react'
import uploadCsv from '../../lib/uploadCsv'

export interface CSVData {
  name: string
  age: number
  email: string
  realname: string
}

const requiredFields = ['name', 'email']
export { requiredFields }

const CSVUploader: React.FC = () => {
  const [data, setData] = useState<CSVData[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileUpload = async () => {
    // Create the input element dynamically
    const inputElement: HTMLInputElement = document.createElement('input')
    inputElement.type = 'file'
    inputElement.accept = '.csv, .xlsx'

    // Attach the change event listener
    inputElement.addEventListener('change', async (event) => {
      const target = event.target as HTMLInputElement // Type assertion
      const file = target.files?.[0] // Access files safely

      if (file) {
        try {
          const data = await uploadCsv(file)
          setData(data)
          console.log('9090', data)
          setError(null) // Reset any previous error
        } catch (err) {
          console.error('Error processing file:', err)
          setError('Failed to process file')
        }
      }
    })

    // Programmatically click the input element
    inputElement.click()
  }

  return (
    <div>
      <button onClick={handleFileUpload}>Upload CSV</button>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Uploaded Data:</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>real name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.email}</td>
                  <td>{row.realname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default CSVUploader
