import { getAuth, signOut } from "firebase/auth";

const Dashboard = () => {

  async function handleSignOut() {
    const auth = getAuth;
    try { 
      await signOut(auth);
    } catch (error) {
      console.log(error)
      
    }
  }
  return(
    <div>
<button onClick={()=> handleSignOut()}>Sign Out</button>    
  </div>)
};

export default Dashboard;
