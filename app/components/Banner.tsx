import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-[80%] mx-auto my-8 rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-[300px]">
        <Image
          src="/beach_1.jpg"
          alt="Beach view"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Perfect Getaway</h1>
          <p className="text-lg md:text-xl mb-6">Explore unique stays and experiences</p>
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-medium rounded-lg shadow-md">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
