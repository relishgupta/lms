import { UserContext } from "../contexts/emp.context";
import { useContext } from "react";

const LeaveDetails = () => {

    const {emp}=useContext(UserContext);

    return (
      <section className='relative font-serif bg-gradient-to-r from-green-400 to-blue-500 min-h-screen'>
          <div className=" flex flex-col justify-between">
              <div className=" flex flex-row pt-5 md:pt-32 md:ml-20 lg:mx-44 xl:ml-72 sz:ml-96 text-2xl">
                  <i className="fa-solid fa-user fa-beat"/>
                  <div className="ml-1">
                    <h1 className="md:border-b">{emp}</h1>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  
  export default LeaveDetails;
  