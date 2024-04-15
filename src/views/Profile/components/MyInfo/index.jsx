import {useForm} from 'react-hook-form';
import style from './MyInfo.module.css'


const MyInfo = ()=>{
    const {handleSubmit, register} = useForm();

    const handleFormSubmit = (data)=>{
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={style.form}>
            <label htmlFor="" className={style.label}>
                Name
                <input className={style.input} type="text" {...register('name', {required: true})} />
            </label >
   
            <label htmlFor="" className={style.label}>
                Email
                <input className={style.input} type="text" {...register('email', {required: true})} />
            </label>
        
            <label htmlFor="" className={style.label}>
                Edad
                <input className={style.input} type="text" {...register('age', {required: true})} />
            </label>

            <button type="submit" className={style.submitButton} >Save</button>


        </form>
    )


}


export default MyInfo;