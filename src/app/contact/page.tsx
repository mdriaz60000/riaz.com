import React from 'react';


const ContactPage = () => {
    return (
        <div className='w-[90%] mx-auto py-10'>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2'>
                    <p className='text-4xl font-bold'>Lets Talk</p>
                    <p className='mt-4 text-gray-600'>
                        Have some big idea or brand to develop and need help? Then reach out! Wed love to hear about your project and provide help.
                    </p>
                    <p className='text-2xl font-semibold mt-6'>Email</p>
                    <p className='text-gray-600'>mohammadriaz6000@gmail.com</p>
                    <p className='text-2xl font-semibold mt-6'>Connect on Socials</p>
                    <div className='flex gap-4 mt-2'>
                        <p className='text-blue-600 cursor-pointer hover:underline'>Facebook</p>
                        <p className='text-blue-600 cursor-pointer hover:underline'>Twitter</p>
                    </div>
                </div>
                <div className='md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md'>
                    <form className='flex flex-col gap-4'>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
                            required
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
                            required
                        />
                        <textarea 
                            placeholder="Your Message" 
                            rows={5} 
                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
                            required
                        ></textarea>
                        <button 
                            type="submit" 
                            className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
