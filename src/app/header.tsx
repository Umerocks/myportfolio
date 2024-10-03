import Head from 'next/head';
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <Head>
        <title>Syed Umer Ali - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-900 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}

      <div className="flex flex-col pb-3 justify-center align-center">
      <div className="flex justify-center items-center w-full">
      <Image
        className="flex justify-center items-center w-[4rem]"
        src={
          // "/images/abcd.jpg" 
          "/images/umer.jpg" 
        }
        alt="logo"
        width={100}
        height={100}
    />
   
  </div>
  </div>
  <p class="text-black-700 text-5xl"> Syed Umer Ali</p>
          <nav className="space-x-12">
            <a href="#home" className="hover:text-gray-400 text-xl">Home</a>
            <a href="#about" className="hover:text-gray-400 text-xl">About</a>
            <a href="#projects" className="hover:text-gray-400 text-xl">Projects</a>
            <a href="#contact" className="hover:text-gray-400 text-xl">Contact Us</a>
          </nav>
        </div>
      </header>
    </div>




  );
}