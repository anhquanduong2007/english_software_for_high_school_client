import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    username: string,
    password: string
};
const Login = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        axios.post('http://localhost:8888/api/loginUser', {
            username: data.username,
            password: data.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="border border-black" {...register("username")} />
                <input type="password" className="border border-black" {...register("password")} />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;