import formcss from '../Components/form.module.css'



const Form=()=>{
    return(
        <>

        <h2>Form</h2>

        <div className={formcss.container}> 

        <form className={formcss.fom}>
            <div className={formcss.input}>
                <label>First Name</label><br></br>
                <input type="text" value="" placeholder="Enter First Name" name="odea" className={formcss.input1}/>
            </div>

            <div className={formcss.input}>
                <label>Last Name</label><br></br>
                <input type="text" value="" placeholder="Enter Surname" name="surname1" className={formcss.input1}/>

            </div>

            <div className={formcss.input}>
                <label>Email</label><br></br>
                <input type="email" value="" placeholder="example@gmail.com" name="" className={formcss.input1}/>
            </div>

            <div className={formcss.input}>
                <label>Password</label><br></br>
                <input type="password" value="" placeholder="Enter your Password" name="" className={formcss.input1}/>
            </div>

            <div className={formcss.input}>
                <label>Select Image</label><br></br>
                <input type="file" value="" placeholder="" name="img" className={formcss.input1}/>
            </div>

            <button className={formcss.btn}>Submit</button>


        </form>

        </div>

        
        </>
    )
}

export default Form