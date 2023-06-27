import logo from 'Images/Logo.svg'
import Navbar from 'Layout/Navbar';
const Login = () => {
    return (<>
        <Navbar />
        <main className="xl:container mx-auto xl:px-0 px-4">
            <div className="xl:w-10/12 lg:w-10/12 md:w-full mx-auto">
                <div className="grid grid-cols-2">
                    <div className='flex flex-col gap-4 h-full justify-center'>
                        <h3 className='font-bold text-3xl'>Welcome back</h3>
                        <span className='font-light text-gray-500 text-sm'>Welcome back! Please enter your details</span>
                        <form className='mt-6 flex flex-col gap-4'>
                            <div>
                                <label className='block mb-1 text-gray-600 font-medium'>Email</label>
                                <input className='py-2 px-3 w-1/2 rounded-md placeholder:text-sm outline-none' placeholder='Enter your email' type='email'/>
                            </div>
                            <div>
                                <label className='block mb-1 text-gray-600 font-medium'>Password</label>
                                <input className='py-2 px-3 w-1/2 rounded-md placeholder:text-sm outline-none' type='password' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </>);
}

export default Login;