import axios from "axios";
import { Link } from "react-router-dom";
import { CgFacebook, CgGoogle } from "react-icons/cg";

import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    username: string,
    password: string
};
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        axios.post('http://localhost:8888/api/loginUser', {
            username: data.username,
            password: data.password
        }, { withCredentials: true })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="py-28">
            <div className="px-4 w-full mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
                <div className="flex">
                    <div className="flex-1 px-4">
                        <img src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg" alt="login-img" className="max-w-full h-auto object-cover object-center" />
                    </div>
                    <div className="flex-1 px-4 justify-center flex">
                        <div className="justify-center flex-col items-start flex w-3/4" >
                            <h1 className="mb-2 text-2xl">Sign In</h1>
                            <h6 className="mb-4 text-xl text-[#b3b3b3]">Welcome to English team.</h6>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
                                <div className="mb-5 flex-col flex">
                                    <input
                                        type="text"
                                        className="border border-[#e6edf1] bg-[#edf2f5] mb-1 py-4 px-3 rounded-md outline-0"
                                        {...register("username", { required: true })}
                                        placeholder="Username"
                                    />
                                    <span className="text-red-500">{errors?.username?.type && "Username is required"}</span>
                                </div>
                                <div className="mb-5 flex-col flex">
                                    <input
                                        type="password"
                                        className="border border-[#e6edf1] bg-[#edf2f5] mb-1 py-4 px-3 rounded-md outline-0"
                                        {...register("password", { required: true })}
                                        autoComplete="on"
                                        placeholder="Password"
                                    />
                                    <span className="text-red-500">{errors?.password?.type === "required" && "Password is required"}</span>
                                </div>
                                <div className="text-right">
                                    <Link to="/" className="text-[#888] underline transition-all hover:no-underline">Forgot Password</Link>
                                </div>
                                <input type="submit" value="Login" className="bg-[#6c63ff] rounded-md text-white py-4 mt-5 transition-colors hover:bg-[#483dff] cursor-pointer" />
                                <div className="text-center mt-3">
                                    <span >Bạn chưa có tài khoản <Link to="/" className="text-[#f47425] no-underline font-bold hover:text-[#f47425e3]">Đăng ký</Link></span>
                                </div>
                            </form>
                            <div className="w-full text-center my-5 text-[#999999]">or sign up using</div>
                            <div className="flex w-full justify-center">
                                <div className="h-9 w-9 rounded-full bg-[#3b5998] flex justify-center items-center text-white cursor-pointer mx-1 hover:bg-[#344e86] transition-colors">
                                    <CgFacebook />
                                </div>
                                <div className="h-9 w-9 rounded-full bg-[#ea4335] flex justify-center items-center text-white cursor-pointer mx-1 hover:bg-[#e82e1e] transition-colors">
                                    <CgGoogle />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;