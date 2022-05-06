import { Link } from "react-router-dom";
import { Avatar } from 'antd';
import { IoSearchOutline } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    search: string,
};
const Header = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)
    console.log("dmm")
    return (
        <div className="bg-[#444791] h-[4.8rem] flex justify-between items-center text-white px-6">
            <Link to="/">English Teams</Link>
            <form onSubmit={handleSubmit(onSubmit)} className="w-2/4 relative flex justify-center items-center">
                <IoSearchOutline className="absolute text-black text-lg left-2 z-10" />
                <input type="text" placeholder="Search" {...register("search")} className="w-full h-10 rounded px-8 text-black outline-none" />
            </form>
            <div className="flex justify-center items-center h-full">
                <ul className="flex justify-center items-center cursor-pointer group w-12 h-full">
                    <li className="h-[3px] w-[3px] bg-white mr-1 group-hover:h-[5px] group-hover:w-[5px] group-hover: rounded-full transition-all"></li>
                    <li className="h-[3px] w-[3px] bg-white mr-1 group-hover:h-[5px] group-hover:w-[5px] group-hover: rounded-full transition-all"></li>
                    <li className="h-[3px] w-[3px] bg-white mr-1 group-hover:h-[5px] group-hover:w-[5px] group-hover: rounded-full transition-all"></li>
                </ul>
                <Avatar src="https://joeschmoe.io/api/v1/random" className="bg-white" />
            </div>

        </div>
    );
};

export default Header;