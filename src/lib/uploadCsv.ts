import * as XLSX from 'xlsx'
import { CSVData, requiredFields } from '../components/csvModal/uploadCsv'

function uploadCsv(file: File): Promise<CSVData[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const bufferArray = e.target?.result
        const workbook = XLSX.read(bufferArray, { type: 'array' })
        const sheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetName]
        const jsonData = XLSX.utils.sheet_to_json(worksheet)
        const validatedData: CSVData[] = jsonData.map(
          (row: any, index: number) => {
            if (requiredFields.length > 0) {
              requiredFields.forEach((data: string) => {
                if (row[data] == undefined) {
                  alert(`Missing required field in ${data} row ${index + 1}`)
                  throw new Error(
                    `Missing required field in ${data} row ${index + 1}`
                  )
                }
              })
            }
            return row
          }
        )
        resolve(validatedData)

        console.log('roews', validatedData)
      } catch (error) {
        console.error('Error in uploadCsv:', error)
        reject(error)
      }
    }
    reader.onerror = (error) => {
      console.error('FileReader error:', error)
      reject(error)
    }
    reader.readAsArrayBuffer(file)
  })
}

export default uploadCsv
