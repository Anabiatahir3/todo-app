import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
export const Form=()=>{
    const schema=yup.object().shape({
        fullName:yup.string().required(),
        email:yup.string().email().required(),
        age: yup.number().positive().integer().required().min(18),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null],"passwords dont match").required(),
    })
const {register,handleSubmit,formState:{errors}}=useForm(
    {
        resolver:yupResolver(schema),
    }
);
const onSubmit=(data)=>{
    console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="FullName" {...register("fullName")} />
            <p> {errors.fullName?.message}</p>
            <input type="text" placeholder="email"  {...register("email")} />
            <p> {errors.email?.message}</p>
            <input type="number" placeholder="age" {...register("age")} />
            <p> {errors.age?.message}</p>
            <input type="text" placeholder="password" {...register("password")} />
            <p> {errors.password?.message}</p>
            <input type="text" placeholder="confirm password" {...register("confirmPassword")} />
            <p> {errors.confirmPassword?.message}</p>
            <input type="submit" placeholder="Submit" />
        </form>
    )
}