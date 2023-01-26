import { HiOutlineStar } from 'react-icons/hi2'
const Loader = () => {
    return (
        <div className="loader h-screen w-screen text-slate-100 grid place-items-center justify-center">
            <span>
                <p className='inline-block'>Loading </p>
                <p className='animate-pulse inline-block'>...</p>
                <span className="grid place-items-center pt-1"><HiOutlineStar className='animate-spin' /></span>
            </span>
        </div>
    )
}

export default Loader