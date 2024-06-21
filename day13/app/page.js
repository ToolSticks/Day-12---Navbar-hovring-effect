import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className=" p-24">
       <nav className="bg-[#BFE293] shadow">
        <div className="max-w-7xl mx-auto p-3">
          
            
            <div className="flex flex items-center justify-between ">
              <div className="flex-shrink-0">
              <h1>Logo</h1>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                    <h1 className="text-gray-900 px-3 py-2 rounded-md text-md font-medium  hover:underline">Home</h1>
                    <h1 className="text-gray-900 px-3 py-2 rounded-md text-md font-medium  hover:underline">About</h1>
                    <h1 className="text-gray-900 px-3 py-2 rounded-md text-md font-medium  hover:underline">Services</h1>
                    <h1 className="text-gray-900 px-3 py-2 rounded-md text-md font-medium hover:underline">Contact</h1>
                </div>
              </div>
              <div className="">
                <button className=" p-2 rounded-md bg-[#83A1CF]">Signup</button>
              </div>
            </div>
       
        </div>
      </nav>
    </main>
  );
}





