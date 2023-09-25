
const ProfileBar = () => {
  return (
    <div className="w-[28%] h-[650px] m-8">

        <div className="flex justify-between items-center h-12">
          <div className="relative h-12 w-12 flex items-center justify-center bg-white rounded-full border-solid border-2">
            <div className="bg-red-400 h-3 w-3 absolute rounded-full top-0 right-0">
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg>
          </div>
          <div className="flex items-center">
            <div className="font-semibold">William Dawson</div>
            <div className=" h-12 w-12 rounded-full flex items-center bg-cover bg-center justify-center pl-2"><img className="rounded-full h-10 w-10 bg-cover" src="https://randomuser.me/api/portraits/men/75.jpg" alt="person"/></div>
          </div>
        </div>


        <div className="mt-3 flex flex-col h-[400px] w-full rounded-[35px] border-solid border-2 p-5">
          <div className="h-40 w-full rounded-[28px] border-solid border-2">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="purple image" className="rounded-[28px] w-full h-full object-cover"/>
          </div>
          <div className="flex justify-between my-3 px-1">
            <span>
              Booking list
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
          </div>

          <div className="flex justify-between h-24 w-full items-center px-2 border-b-2 ">
           <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <img src="https://randomuser.me/api/portraits/men/25.jpg" alt="Your Image" className="w-12 h-12 rounded-full" />
            </div>
            <div className="flex flex-col justify-between p-2 pl-4">
              <span className="font-semibold">
                Wade warren
              </span> 
              <span className="text-slate-500">
                #SGL · 0 guests
              </span>
            </div>
           </div>
           <div className="flex flex-col justify-between">
            <span className="text-slate-500">01.12-01.14</span>
            <div className="bg-indigo-200 w-fit rounded-3xl px-2 py-1 ml-10 text-xs text-indigo-400 font-semibold">Paid</div>
           </div>
          </div>

          <div className="flex justify-between h-24 w-full items-center px-2 ">
           <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Your Image" className="w-12 h-12 rounded-full" />
            </div>
            <div className="flex flex-col justify-between p-2 pl-4">
              <span className="font-semibold">
                Jacob Jones
              </span> 
              <span className="text-slate-500">
                #QDPL · 3 guests
              </span>
            </div>
           </div>
           <div className="flex flex-col justify-between">
            <span className="text-slate-500">01.12-01.13</span>
            <div className="bg-orange-200 w-fit rounded-3xl px-2 py-1 ml-5 text-xs text-orange-400 font-semibold">Pending</div>
           </div>
          </div>
          <div className="flex justify-center font-semibold text-indigo-500">View All</div>
        </div>

        <div className="mt-4 h-[170px] w-full bg-indigo-50 rounded-[35px] flex flex-col justify-center items-center space-y-4">
          <div className="font-semibold text-lg">UNLOCK NEW FEATURES</div>
          <div className="bg-blue-500 rounded-3xl px-5 py-2 font-medium text-white relative">Get Pro Now
          <div className="absolute top-[-8px] right-[-8px] rounded-full p-[6px] text-indigo-400 shadow-xl bg-neutral-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className=" bi bi-unlock" viewBox="0 0 16 16">
  <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
</svg>
          </div>
          </div>
        </div>

      </div>
  )
}

export default ProfileBar