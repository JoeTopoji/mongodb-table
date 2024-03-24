import { TableHead } from './TableHead'
import { FIELDS as field } from '../FIELDS.json'

export const Table = ({ data, handleInputChange }) => {
  return (
    <table className='table table-xs table-zebra table-fixed '>
      <TableHead handleInputChange={handleInputChange} />
      {data && (
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row['_id']} style={{ height: 12 }}>
                <td>{row[field[0]]}</td>
                <td>{row[field[1]]}</td>
                <td>{row[field[2]]}</td>
                <td>{row[field[3]]}</td>
                <td>{row[field[4]]}</td>
              </tr>
            )
          })}
        </tbody>
      )}
    </table>
  )
}
