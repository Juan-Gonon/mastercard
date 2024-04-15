import {useForm} from 'react-hook-form';
import style from './MyInfo.module.css'
import { json } from 'react-router-dom';



const USER_DATA = 'userData';

const MyInfo = ()=>{
    const {handleSubmit, register, formState:{errors}} = useForm();

    const handleFormSubmit = (data)=>{
        try{
            localStorage.setItem(USER_DATA, JSON.stringify(data))
            alert('Usuario actualizado')
        }catch(e){
            alert('Ha ocurrido un error');
        }
    }


    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={style.form}>
            <label htmlFor="" className={style.label}>
                Name
                <input className={style.input} type="text" {...register('name', {required: true, minLength:1, maxLength:120})} />
            </label >
   
            <label htmlFor="" className={style.label}>
                Email
                <input className={style.input} type="text" {...register('email', {required: true, minLength:1, maxLength: 120})} />
            </label>
        
            <label htmlFor="" className={style.label}>
                Edad
                <input className={style.input} type="number" {...register('age', {required: true, min : 1, max: 120, valueAsNumber:true})} />
            </label>

            <button type="submit" className={style.submitButton} >Save</button>


        </form>
    )


}


export default MyInfo;