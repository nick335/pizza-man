import { collection, doc } from 'firebase/firestore'
import React from 'react'
import { firestore } from '../firebase/firebase'
import { useFirestoreDocumentMutation } from '@react-query-firebase/firestore'


export default function SetDefaultUserData(user: string) {
  const collectionRef = collection(firestore, 'users')
  const ref = doc(collectionRef, user)
  const mutation = useFirestoreDocumentMutation(ref)
  mutation.mutate({
    currentOrder: [],
    orderHistory: [],
    address: []
  })
}
