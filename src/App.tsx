import PageTemplate from "./components/PageTemplate"
import { auth } from "./components/firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"




function App() {
  onAuthStateChanged(auth, (user) => {
    if(user){
      console.log('problem solved')
    }else{
      console.log('problem persist')
    }
  })
  return (
    <div className="App">
      <PageTemplate />
    </div>
  )
}

export default App
