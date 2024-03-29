import PageTemplate from "./components/PageTemplate"
import { auth } from "./components/firebase/firebase"
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { LoggedOut, Loggedin } from "./store/Features/User/UserSlice"
import { ErrorBoundary } from "react-error-boundary"
import Error from "./components/Error"
import Fallback from "./components/Error"


function App() {

  const dispatch = useDispatch()
// on auth state changed handles loggin and logut function, helps persist user logging on refresh  
  onAuthStateChanged(auth, (user) => {
    if(user){
      dispatch(Loggedin(user.uid))
    }else{
      dispatch(LoggedOut())
    }
  })
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback}>
        <PageTemplate />
      </ErrorBoundary>
    </div>
  )
}

export default App
