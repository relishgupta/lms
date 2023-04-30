import { useState } from "react";

const RemoveEmp = () => {
  const [name, setName] = useState('');

  const removed=(()=>{
    if(name!==""){
      let result=window.confirm(`Are you sure you want to delete ${name} from the system`);
      if(result){
        alert(`Successfully removed : ${name}`);
      }
    }
  })


  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <section className='relative font-serif bg-gradient-to-r from-green-400 to-blue-500 h-[30.1rem] sm:h-[50rem] xl:h-[37.9rem] sz:h-[51.3rem]'>
      <div className="absolute -inset-1.5 mx-auto h-80 xl:h-96 sz:h-96 mt-8 md:mt-20 xl:mt-24 sz:mt-40 w-60 xl:w-72 sz:w-62 rounded-md flex flex-col justify-evenly bg-yellow-500 bg-opacity-90">
        <i className="fa-solid fa-user-minus fa-beat flex justify-center text-xl xl:text-3xl"/>
          <h1 className="pb-6 text-xl xl:text-2xl text-center">
            REMOVE EMPLOYEE
          </h1>
          <span className="border-b"></span>
        <form action="https://getform.io/f/cc72a437-e99e-4735-adb2-74f9a4ba4aaf" method="post" className="p-2 xl:w-64 mx-auto">
          <div className="mt-8 flex flex-col">
            <input type="text" onChange={handleInputChange} name="name" value={name} placeholder="Enter name" required className="class w-full border-b border-black focus:placeholder-transparent text-black focus:outline-none bg-transparent bg-opacity-90 placeholder-white opacity-80" />
            <br/>
            <input type="text" placeholder="Enter designation" className="border-b border-black focus:placeholder-transparent text-black focus:outline-none bg-transparent bg-opacity-90 placeholder-white opacity-80" />
            <br/>
            <input type="text" placeholder="Enter year of joining" className="border-b border-black focus:placeholder-transparent text-black focus:outline-none bg-transparent bg-opacity-90 placeholder-white opacity-80" />
          </div>
          <button onClick={removed} className="flex mx-auto w-24 xl:w-36 mt-5 xl:mt-16 sz:mt-12 p-1 text-lg px-6 xl:px-12 rounded-full border-2 border-none bg-gradient-to-r from-green-400 to-blue-500 hover:scale-125 duration-150">
            Done
          </button>

        </form>
      </div>
    </section>
  )
}

export default RemoveEmp;
