import React from 'react'
import { Link } from 'react-router-dom'
import google from '../../assets/google.svg'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthCreateUserWithEmailAndPassword } from '@react-query-firebase/auth'
import { auth, firestore } from '../firebase/firebase'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import { setUid } from '../../store/Features/User/UserSlice'
import toast from 'react-hot-toast';
import { collection, doc, setDoc } from 'firebase/firestore'
import { useFirestoreDocumentMutation } from '@react-query-firebase/firestore'

export default function Register() {
  const mutation = useAuthCreateUserWithEmailAndPassword(auth)
  const { uid } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const collectionRef = collection(firestore, 'users')
  // if(mutation.isSuccess){
  //   console.log(uid)
  //   const ref = doc(collectionRef, 'tftfytyy')
  //   const firestoreMutation = useFirestoreDocumentMutation(ref)
  //   firestoreMutation.mutate({
  //     currentOrder: [],
  //     orderHistory: [],
  //     address: []
  //   })
  //   console.log('working')
  // }

  const pageMotion = {
    initial: {opacity: 0, },
    animate: {opacity: 1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: {duration: 0.8}}
  };
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z
              .string()
              .min(1, 'password is required')
              .min(8, "password must have more than 8 characters"),
    confirmPassword: z.string().min(1, "password confirmation is reaquired")
  })
  .refine((data) => data.password === data.confirmPassword, {
    path:["confirmPassword"],
    message: "Passwords do not match"
  })

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })
  const onSubmit: SubmitHandler<FormSchemaType> = (data) =>{
    console.log(data)
    mutation.mutate({
      email: data.email,
      password: data.password
    }, {
      onError(error){
        console.log(error.message)
        toast.error(error.message, {
          duration: 4000,
          position: 'top-left'
        })
      },
      onSuccess(user){
        console.log(user)
        dispatch(setUid(user.user.uid))
        const docName = user.user.uid
        const layout = {
          currentOrder: [],
          orderHistory: [],
          address: []
        }
        setDoc(doc(firestore, "users", docName), layout).catch((error) =>
        toast.error(error.message, {
          duration: 4000,
          position: 'top-left'
        })
        )
      }
    })

  }
  return (
    <motion.section className='heightLayout' initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <div className='layout'>
        <div className='border-b-2 border-headerColor'>
          <h2 className='header'>Register</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mt-1'>
            <div>
              <input type="email" placeholder='Email' className="input" {...register("email")}/>
              {errors.email && (
                <span className="text-red-800 block mt-1 ml-3">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div>
              <input type="password" placeholder='password' className="input" {...register("password")}/>
              {
                errors.password && (
                  <span className='text-red-800 block mt-1 ml-1'>{errors.password?.message}</span>
                )
              }
            </div>
            <div>
              <input type="password" placeholder='confirm password' className="input" {...register("confirmPassword")} />
              {
                errors.confirmPassword && (
                  <span className='text-red-800 block mt-1 ml-1'>{errors.confirmPassword?.message}</span>
                )
              }
            </div>
          </div>
          <div className='pt-2 font-bold text-base text-headerColor font-sans pb-24'>
            <p className='pl-1'>Already registered<span className='text-registerLink underline pl-1'><Link to="/register">Login</Link></span></p>
            <button type='submit' className='btn mt-2.5' disabled={isSubmitting}>Register</button>
            <div className='flexCenter flex-col mt-2 gap-1'> 
              <strong className='uppercase font-semibold'>or</strong>
              <div className='flex items-center w-[220px] bg-white shadow-lg py-3 pl-4 gap-3'>
                <img src={google} alt='google_logo' className='google'/>
                <strong className='text-goggle text-sm font-medium '>Sign in With Google</strong>
              </div>
            </div>
          </div>
        </form>
      </div>
    </motion.section>
  )
}
