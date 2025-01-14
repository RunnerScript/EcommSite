const Loader = () => {
    return (
        <div className="flex justify-around text-center py-10 h-[100vh] items-center">
            <div className="animate-bounce-slow  bg-blue-600  border-blue-700 rounded-full w-[5rem] h-[5rem] duration-100"></div>
            <div className="animate-bounce-medium bg-blue-600  border-blue-700 rounded-full w-[5rem] h-[5rem] duration-200"></div>
            <div className="animate-bounce-fast bg-blue-600  border-blue-700 rounded-full w-[5rem] h-[5rem] duration-300"></div>
        </div>
    )

}
export default Loader;