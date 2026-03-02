import React from 'react'

function SupportPortal() {
  return (
    <div className='container-fluid bg-light px-5'>
      <div className='row'>
        <div className='col d-flex justify-content-between align-items-center pt-5'>
          <div>
            <h1 className='fw-semibold'>Support Portal</h1>
          </div>
          <div>
            <button className='btn btn-primary fw-medium'>My Tickets</button>
          </div>
        </div>
      </div>
      <div className='row mt-4 pb-5'>
       <div className='col'>
         <input class="form-control py-3 text-muted" type="text" placeholder="Eg:How do I open my account, How do i activate my acount F&Q..." aria-label="readonly input example" readonly></input>
         </div>
      </div>
    </div>
  )
}

export default SupportPortal;