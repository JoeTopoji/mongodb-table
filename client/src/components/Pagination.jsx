export const Pagination = () => {
  return (
    <div className='join mt-2'>
      <button className='join-item btn btn-sm'>«</button>
      <button className='join-item btn btn-sm'>1</button>
      <button className='join-item btn btn-sm btn-active'>2</button>
      <button className='join-item btn btn-sm btn-disabled'>...</button>
      <button className='join-item btn btn-sm'>3</button>
      <button className='join-item btn btn-sm'>4</button>
      <button className='join-item btn btn-sm'>»</button>
    </div>
  )
}
