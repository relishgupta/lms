import { useContext } from "react"
import { UserContext } from "../contexts/emp.context"

const ApplyLeave = () => {
  const {emp}=useContext(UserContext);

  const leaveTypes=[
    {
      id:1,
      'type':'Click it...'
    },
    {
      id:2,
      'type':'Casual leave - 1st Half',
      'value':'Casual leave - 1st Half'
    },
    {
      id:2,
      'type':'Casual leave - 2nd Half',
      'value':'Casual leave - 2nd Half'
    },
    {
      id:3,
      'type':'Earned leave',
      'value':'Earned leave'
    },
    {
      id:4,
      'type':'Duty leave',
      'value':'Duty leave'
    },
    {
      id:5,
      'type':'Child Care leave',
      'value':'Child Care leave'
    },
    {
      id:6,
      'type':'Compensatory-off',
      'value':'Compensatory-off'
    },
    {
      id:7,
      'type':'Paternity leave',
      'value':'Paternity leave'
    },
    {
      id:8,
      'type':'Maternity leave',
      'value':'Maternity leave'
    },
    {
      id:9,
      'type':'Half Pay leave',
      'value':'Half Pay leave'
    },
    {
      id:10,
      'type':'Special Casual leave',
      'value':'Special Casual leave'
    },
]

  const submitHandler=(()=>{
    alert("Successfully applied")
  })

  return (
    <section className='relative font-serif bg-gradient-to-r from-green-400 to-blue-500 min-h-screen'>
        <div className=" flex flex-col justify-between ">
            <div className=" flex flex-row pt-5 md:pt-32 md:ml-20 lg:mx-44 xl:ml-72 sz:ml-96 text-2xl sm:text-4xl ">
                <i className="fa-solid fa-user fa-beat ml-3"/>
                <div className="ml-2 -mt-2 sm:mt-0">
                  <h1 className="md:border-b">{emp}</h1>
                </div>
            </div>
            <div className="absolute -inset-1.5 mx-auto h-80 md:h-96 xl:h-[29rem] sm:mt-28 mt-16 md:mt-16 xl:mt-12 sz:mt-20 md:mr-20 lg:mr-60 xl:mr-[22rem] sz:mr-[39rem] w-72 xl:w-80 rounded-md flex flex-col justify-evenly bg-yellow-500 bg-opacity-90">
                <h1 className="absolute -mt-72 md:-mt-80 xl:-mt-96 ml-14 xl:ml-20 text-3xl text-blue-800">Apply Leave</h1>
                <span className="absolute -mt-60 md:-mt-64 xl:-mt-72 border-b w-72 xl:w-80"/>
              <span className="flex flex-col text-xl mt-28 md:mt-36 xl:mt-44">
                <h5 className="text-md pl-1">From</h5>
                <input type="date" className="border border-gray-300 rounded-full bg-sky-200 mx-auto w-60 text-gray-600 h-8 pl-5 hover:border-gray-400 focus:outline-none appearance-none hover:cursor-pointer"/>
                <h5 className="text-md mt-3 pl-1">To</h5>
                <input type="date" className="border border-gray-300 rounded-full bg-sky-200 mx-auto w-60 text-gray-600 h-8 pl-5 hover:border-gray-400 focus:outline-none appearance-none hover:cursor-pointer" />
                <span className="border-b border-black w-72 xl:w-80 mt-2 xl:mt-5"/>
              </span>
              <span className="flex flex-col text-xl mt-4 xl:mt-3">
                <h4 className="pl-1">Leave type</h4>
                <select required className='border border-gray-300 bg-sky-200 mx-auto w-60 rounded-full text-gray-600 h-8 pl-5 hover:border-gray-400 focus:outline-none appearance-none hover:cursor-pointer'>
                  {leaveTypes.map(({id,value,type})=>
                    <option value={value}>{type}</option>
                  )}
                </select>
                <span className="border-b border-black w-72 xl:w-80 mt-2 xl:mt-5"/>
              </span>
              <span className="flex flex-row justify-around mt-3 mb-20">
                <button className="w-20 md:w-28 xl:w-32 xl:mt-10 p-1 pl-2 text-lg rounded-full border-2 border-none bg-gradient-to-r from-green-400 to-blue-500 hover:scale-125 duration-150">
                  Modify
                </button>
                <button onClick={submitHandler} className="w-20 md:w-28 xl:w-32 xl:mt-10 p-1 pl-2 md:pl-1 text-lg rounded-full border-2 border-none bg-gradient-to-r from-green-400 to-blue-500 hover:scale-125 duration-150">
                  Submit
                </button>
              </span>
            </div>
        </div>
    </section>
  )
}

export default ApplyLeave;
