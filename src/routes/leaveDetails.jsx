 import { UserContext } from "../contexts/emp.context";
 import { useContext } from "react";

 const LeaveDetails = () => {

     const {emp}=useContext(UserContext);

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
                 <h1 className="absolute -mt-72 md:-mt-80 xl:-mt-96 ml-14 xl:ml-20 text-3xl text-blue-800">Leave details</h1>
                 <span className="absolute -mt-60 md:-mt-64 xl:-mt-72 border-b w-72 xl:w-80"/>
              
             </div>
         </div>
       </section>
     )
   }
  
   export default LeaveDetails;
  

