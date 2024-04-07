import { useState } from "react";


const SignupForm = ()=>{

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');

    const handleClearClick = (e)=>{
        // e.preventDefault()
        console.log('clear')
        setName('');
        setAge('');
        setAddress('');
        setZipCode('');
        setPhone('');
    };

    const handleSubmitForm = (e)=>{
        e.preventDefault()
        console.log('submit',{
            name,
            age,
            address,
            zipCode,
            phone
        })

    }


    return <>
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="">
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label htmlFor="">
                Age
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
            </label>
            <br />
            <label htmlFor="">
                Address
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <br />
            <label htmlFor="">
                ZipCode
                <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
            </label>
            <br />
            <label htmlFor="">
                Phone
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
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