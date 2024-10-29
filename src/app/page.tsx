export default function figma() {
  return (
    <div className="bg-[#1D1E2C] min-h-screen">
      <nav className="M-full py-0 flex justify-between items-center px-12">
        <div className="text-white font-bold text-xl">BrandName</div>
        <div className="text-white flex space-x-8">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">Product</a>
        <a href="#" className="hover:text-blue-400">Pricing</a>
        <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
        <div className="flex space-x-8">
          <a href="#"className="text-white ">Login</a>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800">Join Us</button>
        </div>
      </nav>
      <div className="text-center wt-16 justify-center">
        <p className="text-blue-400 text-size-15-px hover:text-blue-600 mt-20">Welcome</p>
        <h1 className="text-white text-5xl font-bold mt-5 ">Selling on the</h1>
        <h1 className="text-white text-5xl font-bold mt-4">Internet like a pro</h1>
        <p className="text-gray-300 text-lg mt-5 ">We know how large objects will act, but things on a <br/>small scale just do not act that way. </p>
        <div className="flex justify-center space-x-4"> 
          <button className="bg-blue-500 text-white py-5 px-0 rounded hover:bg-blue-600 text-justify-center mt-3 w-36 ">Get Quote Now</button>
          <button className="text-blue-500 border border-blue-500 py-3 px-1 rounded-lg hover:bg-blue-600  hover:text-white mt-3 w-36">Learn More</button>
        </div>
      </div>
      <div className="flex justify-center space-x-8 mt-20 ml-4">
        <div className="bg-white p-5  w-25 mb-6 hover:scale-[0.85] cursor-pointer ">
          <div className="w-14 h-14 bg-red-200 m-3 rounded-lg"></div>
          <h2 className="text-gray-800 font-bold text-xl mt-4 ml-2">training courses</h2>
          <div className="w-12 h-1  bg-red-500 m-4"></div>
          <p className="text-gray-600 m-4">The gradual accumulation of <br />
          information about atomic and <br />
           small-scale behaviour...</p>
        </div>
    
        <div className="bg-white p-5  w-25 mb-6 hover:scale-[0.85] cursor-pointer">
          <div className="w-14 h-14 bg-green-400 m-3 rounded-lg"></div>
          <h2 className="text-gray-800 font-bold text-xl mt-4 ml-2">2,769 online courses</h2>
          <div className="w-12 h-1 bg-red-500 m-4"></div>
          <p className="text-gray-600 m-4">The gradual accumulation of <br /> 
          information about atomic and <br /> 
          small-scale behaviour...</p>
        </div>
        
        <div className="bg-blue-500 p-5 w-25 mb-6  hover:scale-[0.85] cursor-pointer">
          <div className="w-14 h-14 bg-white m-3 rounded-lg"></div>
          <h2 className="text-white font-bold text-xl mt-4 ml-2">training courses</h2>
          <div className="w-12 h-1 bg-white m-4"></div>
          <p className="text-white m-4">The gradual accumulation of <br />
            information about atomic and <br />
             small-scale behaviour...</p>
        </div>
      </div>
    </div>
  )
            
}      
            