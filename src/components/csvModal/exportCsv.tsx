import React from 'react'
import downloadCsv from '../../lib/exportCsv'

function ExportCsv() {
  // Sample data to download.
  const data = [
    { name: 'Kamal', age: 28, email: 'john@example.com' },
    { name: 'Raman Smith', age: 32, email: 'jane@example.com' },
  ]
  // use this function for download csv downloadCsv().
  const getFiles = () => {
    //data is csv data (use your csv data instead sample data )  and samplecsv (second argument) is name of csv.
    downloadCsv(data, 'samplecsv')
  }
  return (
    <div>
      <button onClick={getFiles}>CSV</button>
    </div>
  )
}

export default ExportCsv
