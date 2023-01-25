import {HiOutlineStar} from 'react-icons/hi2'
const Loader = () => {
    return (
            <div className="loader h-screen w-screen text-slate-100 grid place-items-center">
                <span className=" animate-spin"><HiOutlineStar /></span>
            </div>
    )
}

export default Loader