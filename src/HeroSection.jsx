import Analytic from './analytics.PNG';

const HeroSection = () => {

  return (
    <div className="w-[50%] h-full flex flex-col px-8 py-8">
    <div className="flex items-center py-4 border-b-neutral-200 border-b-2 w-full">
      <span><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg></span>
      <span className="text-gray-400 font-normal text-[16px] ml-6">Search</span>
    </div>

    <div className="flex flex-col py-3 w-full">
      <div className="flex text-[55px] font-bold">
        <span className="text-neutral-300">Welcome,</span>
        <span className="pl-2">William</span>
      </div>
      <div className="text-lg">
        You have <span className="underline underline-offset-2">9 free rooms</span> at Saint denis
      </div>
    </div>

    <div className="flex w-full space-x-6 justify-between p-1">
      <div className="flex flex-col items-center">
        
        <div className=" w-[184px] h-[175px] bg-orange-100 rounded-3xl flex flex-col">
          <div className="flex justify-center items-center w-full h-[43%] font-bold text-3xl text-orange-400 relative">
            4%
            <div className="absolute top-4 right-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
              </svg>
            </div>
          </div>
          <div className="flex">
            <div className="pl-[16px] pr-2">
              <div className="rounded-xl bg-white h-14 w-[68px] flex justify-center items-center font-semibold text-xl mb-1"> 31 </div>
              <span className="text-sm pl-2 mt-2">Booked</span>
              
            </div>
            <div className="pl-2 pr-2">
              <div className="rounded-xl bg-white h-14 w-[68px] flex justify-center items-center font-semibold text-xl mb-1"> 19 </div>
              <span className="text-sm pl-[10px] mt-2">Chek in</span>
            </div>
          </div>
        </div>
          <p className="pt-2">
            Saint Denis
          </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-[184px] h-[175px] bg-indigo-100 rounded-3xl flex flex-col">
          <div className="flex justify-center items-center w-full h-[43%] font-bold text-3xl text-indigo-600 relative">
            6%
            <div className="absolute top-4 right-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
              </svg>
            </div>
          </div>
          <div className="flex">
            <div className="pl-[16px] pr-2">
              <div className="rounded-xl bg-white h-14 w-[68px] flex justify-center items-center font-semibold text-xl mb-1"> 8 </div>
              <span className="text-sm pl-2 mt-2">Booked</span>
              
            </div>
            <div className="pl-2 pr-2">
              <div className="rounded-xl bg-white h-14 w-[68px] flex justify-center items-center font-semibold text-xl mb-1"> 5 </div>
              <span className="text-sm pl-[10px] mt-2">Chek in</span>
            </div>
          </div>
        </div>
          <p className="pt-2">
            Blackwater
          </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center w-[184px] h-[175px] border-dashed border-2 border-gray-300 rounded-3xl">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#64748b" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </div>
          <div className="text-slate-500">
            Add new object
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col w-full bg-white shadow-lg rounded-3xl h-56 mt-4">
      <div className="flex justify-between px-8 h-12 items-center w-full my-2">
        <span className="font-semibold">
          Object Overview
        </span>
        <div className="flex items-center">
          <span className="rounded-3xl p-3 px-4 bg-gray-100  text-indigo-500">Overview</span>
          <span className="flex items-center pl-3 text-slate-500">
            <p className="pr-1">Nov 15 - Nov 20</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </span>
        </div>
      </div>
      <div className="bg-cover bg-center h-full w-full flex justify-center items-center ">
        <img src={Analytic} alt="image" width="350" height="100"/>
      </div>
    </div>
  </div>
  )
}

export default HeroSection