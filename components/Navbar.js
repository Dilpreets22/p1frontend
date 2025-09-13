'use client';
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className=" bg-transparent ">
      <header className="text-gray-300 body-font bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl -mt-32 mr-4 ml-4">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link href={'/'}>
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Logo"
            />
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-200" href='/about'>About</Link>
            <Link className="mr-5 hover:text-gray-200" href='/Networks'>Networks</Link>
            <Link className="mr-5 hover:text-gray-200" href='https://osto.bettermode.io/changelog'>Documentations</Link>
          </nav>

          <Link href='/link2'>
            <button className="inline-flex items-center text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded-3xl text-base mt-4 md:mt-0">
              Get Demo
            </button>
          </Link>

        </div>
      </header>
    </div>
  );
};

export default Navbar;