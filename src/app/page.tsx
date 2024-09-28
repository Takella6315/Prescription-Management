import Image from "next/image";

const hero = "/assets/images/photo.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-[#bff582d9] text-gray-800">
      {/* Header */}
      <header className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-extrabold tracking-tighter text-green-600 transform skew-x-6">
            <span className="inline-block hover:animate-pulse transition-transform duration-300">M</span>
            <span className="inline-block hover:animate-pulse transition-transform duration-300 delay-100">P</span>
            <span className="inline-block hover:animate-pulse transition-transform duration-300 delay-200">M</span>
            <span className="inline-block hover:animate-pulse transition-transform duration-300 delay-300">S</span>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-green-600 hover:text-green-800 transition-colors">
              <a href="/login">Login</a>
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
            <a href="/signup">Signup</a>
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col md:flex-row">
        {/* Left column: Image */}
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0">
            <Image
              src={hero}
              alt="MPMS logo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
        </div>

        {/* Right column: Text content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 text-green-600">Welcome to MPMS</h1>
          <p className="mb-6 text-xl">Your trusted partner in modern healthcare management.</p>
          <ol className="list-inside list-decimal text-lg mb-8">
            <li className="mb-4">
              Streamline your medical practice with our intuitive software.
            </li>
            <li className="mb-4">
              Improve patient care with our integrated health management tools.
            </li>
          </ol>
          <div className="flex gap-6 items-center flex-col sm:flex-row">
            <a
              className="w-full sm:w-auto rounded-full transition-colors flex items-center justify-center bg-green-500 text-white gap-2 hover:bg-green-600 text-lg h-12 px-8"
              href="#"
            >
              Get Started
            </a>
            <a
              className="w-full sm:w-auto rounded-full border border-solid border-green-200 transition-colors flex items-center justify-center hover:bg-green-50 text-lg h-12 px-8"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white bg-opacity-30 p-4">
        <div className="container mx-auto flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-green-600"
            href="#"
          >
            About Us
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-green-600"
            href="#"
          >
            Services
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-green-600"
            href="#"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}