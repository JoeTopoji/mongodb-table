import { TableHead } from './TableHead'

export const Table = ({ data }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table table-sm table-zebra'>
        <TableHead />
        {data && (
          <tbody>
            {data.map((row) => {
              return (
                <tr key={row['_id']}>
                  <td>{row['TESTO1']}</td>
                  <td>{row['TESTO2']}</td>
                  <td>{row['EMAIL']}</td>
                  <td>{row['TLD']}</td>
                  <td>{row['DOMAIN']}</td>
                </tr>
              )
            })}
          </tbody>
        )}
      </table>
    </div>
  )
}
