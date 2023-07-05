import AddressSummary from './AddressSummary'


interface props{
  addAddress: () => void
}


export default function Location({addAddress}: props) {
  return (
    <div className='mb-8'>
      <div className='y-flex mb-1'>
        <h3 className='checkout-header'>Location</h3>
        <div className='checkout-bar'></div>
      </div>
      <div>
        <strong>Address: </strong>
        <AddressSummary addAddress = {addAddress} />
      </div>
    </div>
  )
}
