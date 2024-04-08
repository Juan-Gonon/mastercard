import { useForm } from "react-hook-form";


const SignupForm = ()=>{

    const {register, handleSubmit, reset, formState: {errors}} = useForm();


    const handleClearClick = ()=>{
        reset();
      
    };

    const handleSubmitForm = (dato)=>{
  
        console.log(dato)
     

    }

    console.log(errors)


    return <>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label htmlFor="">
                Name
                <input type="text" {...register('name', {required: true})} />
            </label>
            <br />
            <label htmlFor="">
                Age
                <input type="text" {...register('age', {required:true})} />
            </label>
            <br />
            <label htmlFor="">
                Address
                <input type="text" {...register('address', {required:true})}/>
            </label>
            <br />
            <label htmlFor="">
                ZipCode
                <input type="text" {...register('zipCode', {required:true})}/>
            </label>
            <br />
            <label htmlFor="">
                Phone
                <input type="text" {...register('Phone', {required:true})} />
            </label>
            <br />
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">submit</button>
            </div>
        </form>
    </>

}


export default SignupForm;