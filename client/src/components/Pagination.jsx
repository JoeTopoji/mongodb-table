export const Pagination = ({
  changePage,
  page,
  pageCount,
  docCount,
  setPageInput,
}) => {
  return (
    <div className='mb-2'>
      <div className='join mt-2'>
        {page !== 1 ? (
          <button
            className='join-item btn btn-sm'
            name='-'
            onClick={changePage}
          >
            «
          </button>
        ) : (
          <button className='join-item btn btn-sm btn-disabled'>«</button>
        )}

        <button className='join-item btn btn-sm'>{page}</button>

        {page < pageCount ? (
          <button
            className='join-item btn btn-sm'
            name='+'
            onClick={changePage}
          >
            »
          </button>
        ) : (
          <button
            className='join-item btn btn-sm'
            name='+'
            onClick={changePage}
            disabled
          >
            »
          </button>
        )}
      </div>
      <input
        type='text'
        className='w-14 h-8 ml-2 p-2 input mt-2 mr-2 input-primary text-sm'
        defaultValue={page}
        onChange={(e) => {
          setPageInput(Math.ceil(Number(e.target.value)))
        }}
        name='pageInput'
      />
      <button
        className='btn btn-sm mt-2'
        onClick={changePage}
        name='pageButton'
      >
        select page
      </button>
      <br />
      <span className='badge badge-lg ml-2'>{pageCount} pages</span>
      <span className='badge badge-lg ml-2 mt-2'>{docCount} documents</span>
    </div>
  )
}
