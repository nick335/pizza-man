import React from 'react'
import { Link } from 'react-router-dom'
import google from '../../assets/google.svg'
import { motion } from 'framer-motion'
import { z} from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthSignInWithEmailAndPassword } from '@react-query-firebase/auth'
import { useAuthSignInWithPopup } from "@react-query-firebase/auth";
import { GoogleAuthProvider, getAdditionalUserInfo } from "firebase/auth";
import { auth } from '../firebase/firebase'
import { toast } from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { setDoc, doc } from 'firebase/firestore'
import { Loggedin } from '../../store/Features/User/UserSlice'
import { useNavigate } from 'react-router-dom'
import { firestore } from '../firebase/firebase'
export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // login using react query firebase with email and password
  const mutation  = useAuthSignInWithEmailAndPassword(auth, {
    onError(error){
      toast.error(error.message, {
        duration: 8000,
        position: 'top-right'
      },
      )
    },
    onSuccess(response){
      // dispatch(Loggedin(response.user.uid))
      navigate('/menu')
    }
  })
  // login using react query firebase with google sign in
  const googlemutation = useAuthSignInWithPopup(auth, {
    onError(error){
      toast.error(error.message, {
        duration: 8000,
        position: 'top-right'
      },)
    },
    onSuccess(response){
      // checking for new users
      const info = getAdditionalUserInfo(response)
      const docName = response.user.uid
      const newUser = info?.isNewUser
      // setting up a database layout for new users
      if(newUser){
        const layout = {
          currentOrder: [],
          orderHistory: [],
          address: {
            isAdded: false,
            number: 0,
            street: '',
            city: '',
            state: '',
            country: '',
            pinCode: 0,
          }
        }
        setDoc(doc(firestore, "users", docName), layout).catch((error) =>
        toast.error(error.message, {
          duration: 4000,
          position: 'top-left'
        })
        ).then(() => {
          navigate('/menu')
        })
      }else{
        navigate('/menu')
      }
    }
  })
  // page transition
  const pageMotion = {
    initial: {opacity: 0, },
    animate: {opacity: 1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: {duration: 0.8}}
  };

//form validation using zod
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z
              .string()
              .min(1, 'password is required')
              .min(8, "password must have more than 8 characters")
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
      email:data.email,
      password:data.password
    })
  }
  // handle google sign
  function handleGoogleSignIn(){
    googlemutation.mutate({
      provider: new GoogleAuthProvider(),
    },)
  }
  return (
    <motion.section className='heightLayout' initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <div className='layout'>
        <div className='border-b-2 border-headerColor'>
          <h2 className='header'>Login</h2>
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
              {errors.password && (
                <span className="text-red-800 block mt-1 ml-3">
                  {errors.password?.message}
                </span>
              )}
            </div>
          </div>
          <div className='pt-2 font-bold text-base text-headerColor font-sans pb-24'>
            <p className='pl-1'>Not yet registered?<span className='text-registerLink underline pl-1'><Link to="/register">Register</Link></span></p>
            <button type='submit' disabled={isSubmitting} className='btn mt-2.5'>Login</button>
            <div className='flexCenter flex-col mt-2 gap-1'>
              <strong className='uppercase font-semibold'>or</strong>
              <div className='flex items-center w-[220px] bg-white shadow-lg py-3 pl-4 gap-3' onClick={handleGoogleSignIn}>
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
