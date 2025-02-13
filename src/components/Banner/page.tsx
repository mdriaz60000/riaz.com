
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaWhatsapp  } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

export default function Banner() {
  return (
    <section className=" relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center bg-gray-900 text-white">
      <Image
        src="https://i.ibb.co.com/dwbYL9Qs/xx-removebg-preview.png" 
        alt="Portfolio Banner"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-60"
      />
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 mb-3 text-lg md:text-xl text-gray-300 file:">
          Showcasing my web development skills and projects.
        </p>
        <Link
          href='/'
      className=" m px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500"
        >
          Resume Download
        </Link>
        
        <div className='flex justify-center  gap-3 text-3xl py-4'>
            <Link href="https://github.com/mdriaz60000"><FaGithub /></Link>
            <Link href="https://www.facebook.com/riaz60000/"><CiFacebook /></Link>
            <Link href="https://wa.me/+8801601595684?text=hello how can help you ?"><FaWhatsapp  /></Link>
        </div>
      </div>
    </section>
  );
}
