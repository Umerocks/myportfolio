import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Name - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center h-screen flex items-center justify-center"
        // style={{backgroundImage: "Public/images/umer.jpg" }} // Replace with your image path
      >
        <div className="text-center text-grey">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Welcome to My Portfolio</h1>
          <p className="text-lg md:text-xl mb-2">I am an Embedded Engineer by Profession</p>
          <p className="text-lg md:text-xl mb-2">I am enrolled in Governor Sindh IT Program due to my Intereset in Programing and Development.</p>
          <p className="text-lg md:text-xl mb-2">My Educational Background is B.E. Electronics.</p>
          <p className="text-lg md:text-xl mb-2">I have worked previosuly on many Projescts such as: </p>
          <p ClassName = "text-lg md:text-xl mb-2"> HomeAutomation Using IoT </p>
          <p> 3-Phase Power Meter with Online Monitoring</p>
          <p> Furnace Temperature Monitor</p>
          <p> 3-Axis Gimbal Controller for Drone and Hand-Held devices</p>
          <p> LIDAR Based Vacuum Cleaner, etc.</p>
          <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-3 rounded transition">
            View My Work
          </a>
        </div>
      </section>
    </div>
  );
}
