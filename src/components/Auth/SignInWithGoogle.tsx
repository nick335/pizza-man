import { useAuthSignInWithPopup } from "@react-query-firebase/auth";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";

const mutation = useAuthSignInWithPopup(auth)
export default function SignInWithGoogle() {
  mutation.mutate({
    provider: new GoogleAuthProvider(),
  }, {
    onSuccess(response){
      console.log(response)
    }
  })
}
