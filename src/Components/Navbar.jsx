import { Link } from "react-router-dom"
import Button from "./Button"
import navbarcss from '../Components/navbar.module.css'

const Navbar =()=>{

    return(
        <>

        <div className={navbarcss.navigationbar}>

            <div className={navbarcss.connect}>
                <Link className={navbarcss.ab} to="/">Home</Link>
                <Link className={navbarcss.ab} to="/About">About</Link>
                <Link className={navbarcss.ab} to="/Contact">Contact</Link>
                <Link className={navbarcss.ab} to="/Settings">Settings</Link>
            </div>

            <div className={navbarcss.right}>
                <Button name="login"/>
                <Button name="logout"/> 
                <div className={navbarcss.avatar}>
                    <img src="data:image/png;base64,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" alt="" />
                </div>
            </div>
           
            </div>

            

        
    
        </>
    )
}

export default Navbar