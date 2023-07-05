import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { number, z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { collection, doc } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import { useFirestoreDocumentMutation, useFirestoreDocument } from '@react-query-firebase/firestore'
import { toast } from 'react-hot-toast'
import { setAddressData, userAddress } from '../../store/Features/User/UserSlice'
interface props {
  cancel: () => void
}

export default function AddressForm({cancel}: props) {
  const { uid} = useSelector((state: RootState) => state.user.auth)
  const collectionref = collection(firestore, 'users')
  const docref = doc(collectionref, uid)
  const dispatch = useDispatch()
  const mutation = useFirestoreDocumentMutation(docref, {
    merge: true
  }, {
    onSuccess(){
      cancel()
    },
    onError(error){
      toast.error(error.message, {
        duration: 4000,
        position: 'top-left'
      })
    }
  })
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    number: z.string().min(1, "address number is required"),
    street:z
            .string()
            .min(1, 'street name is required'),
    city:z
          .string()
          .min(1, 'city name is required'),
    state:z
          .string()
          .min(1, 'state name is required'),
    country:z
          .string()
          .min(1, 'country name is required'),
    pin: z
         .string()
         .min(1, "pin is required")
         .min(7, 'pin must have more than 7 numbers')  
  })

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data)
    mutation.mutate({
      address: {
        isAdded: true,
        number: data.number,
        street: data.street,
        city: data.city,
        state: data.state,
        country: data.country,
        pinCode: data.pin
      }
    }, {
      onSuccess(){
        const addressData: userAddress = {
          isAdded: true,
          number:data.number,
          street: data.street,
          city: data.city,
          state: data.state,
          country: data.country,
          pinCode: data.pin
        }
        dispatch(setAddressData({addressData}))
      },
      onError(error){
        console.log(error.message)
      }
    })
    
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input type="number" placeholder='Building Number' className="input" {...register("number")}/>
            {
              errors.number && (
                <span className='text-red-800 block mt-1 ml-1'>{errors.number?.message}</span>
              )
            }
          </div>
          <div>
            <input type="text" placeholder='Street Name' className="input" {...register("street")}/>
            {
              errors.street && (
                <span className='text-red-800 block mt-1 ml-1'>{errors.street?.message}</span>
              )
            }
          </div>
          <div>
            <input type="text" placeholder='City' className="input" {...register('city')}/>
            {
              errors.city && (
                <span className='text-red-800 block mt-1 ml-1'>{errors.city?.message}</span>
              )
            }
          </div>
          <div>
            <input type="text" placeholder='State' className="input" {...register('state')} />
            {
              errors.state && (
                <span className='text-red-800 block mt-1 ml-1'>{errors.state?.message}</span>
              )
            }
          </div>
          <div>
            <input type="text" placeholder='Country' className="input" {...register('country')} />
            {
              errors.country && (
                <span className='text-red-800 block mt-1 ml-1'>{errors.country?.message}</span>
              )
            }
          </div>
          <div>
            <input type="number" placeholder='Pin' className="input" {...register('pin')}/>
            {
              errors.pin && (
                <span className='text-red-800 block mt-1 ml-1'>{errors.pin?.message}</span>
              )
            }
          </div>
          <div className='flex gap-2 my-4'>
            <button className='btn-sec' onClick={cancel}>Cancel</button>
            <button type='submit' disabled={isSubmitting} className='btn'>Update</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}
