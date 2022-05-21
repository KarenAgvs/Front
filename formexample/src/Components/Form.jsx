import { useForm } from "react-hook-form";

//to intstall the package npm install react-hook-form
export const Form=()=>{

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit=(data)=>{
        console.log(data)
    }


    return(
        <>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <h2>Write ur name</h2>
            <input className='inputs' type="text" name='name'




            // ref={
            //     register({
            //         required:{value:true, message:'Campo obligatorio'}

            //     })}
            placeholder='Name' />
            <button className="btn-Send">Send</button>
        </form>
        </>

    )
}
