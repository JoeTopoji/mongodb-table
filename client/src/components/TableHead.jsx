import { FIELDS as field } from '../FIELDS.json'

export const TableHead = ({ handleInputChange }) => {
  return (
    <thead>
      <tr>
        <th>
          <Input name={field[0]} handleInputChange={handleInputChange} />
        </th>
        <th>
          <Input name={field[1]} handleInputChange={handleInputChange} />
        </th>
        <th>
          <Input name={field[2]} handleInputChange={handleInputChange} />
        </th>
        <th>
          <Input name={field[3]} handleInputChange={handleInputChange} />
        </th>
        <th>
          <Input name={field[4]} handleInputChange={handleInputChange} />
        </th>
      </tr>
      <tr>
        <th className='text-xl'>{field[0]}</th>
        <th className='text-xl'>{field[1]}</th>
        <th className='text-xl'>{field[2]}</th>
        <th className='text-xl'>{field[3]}</th>
        <th className='text-xl'>{field[4]}</th>
      </tr>
    </thead>
  )
}

const Input = ({ name, handleInputChange }) => {
  return (
    <input
      type='text'
      id={name}
      name={name}
      className='w-full px-4 py-2 bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-blue-500'
      onChange={handleInputChange}
    />
  )
}
