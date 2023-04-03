import React from 'react'

export default function AddressForm() {
  return (
    <div>
      <div>
        <form>
          <div>
            <input type="number" placeholder='Building Number' className="input" />
          </div>
          <div>
            <input type="text" placeholder='Street Name' className="input" />
          </div>
          <div>
            <input type="text" placeholder='City' className="input" />
          </div>
          <div>
            <input type="text" placeholder='State' className="input" />
          </div>
          <div>
            <input type="text" placeholder='Country' className="input" />
          </div>
          <div>
            <input type="text" placeholder='Pin' className="input" />
          </div>

        </form>
      </div>
      <div className='flex gap-2 mt-3'>
        <button className='btn-sec'>Cancel</button>
        <button className='btn'>Update</button>
      </div>
    </div>
  )
}
