export const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>
          <Input name={'testo1'} />
        </th>
        <th>
          <Input name={'testo2'} />
        </th>
        <th>
          <Input name={'email'} />
        </th>
        <th>
          <Input name={'tld'} />
        </th>
        <th>
          <Input name={'domain'} />
        </th>
      </tr>
      <tr>
        <th className='text-xl'>TESTO1</th>
        <th className='text-xl'>TESTO2</th>
        <th className='text-xl'>EMAIL</th>
        <th className='text-xl'>TLD</th>
        <th className='text-xl'>DOMAIN</th>
      </tr>
    </thead>
  )
}

const Input = ({ name }) => {
  return (
    <input
      type='text'
      id={name}
      name={name}
      className='w-full px-4 py-2 bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-blue-500'
    />
  )
}
