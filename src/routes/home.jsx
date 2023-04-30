import { useContext } from 'react';
import { UserContext } from '../contexts/emp.context';

import { useNavigate } from 'react-router';
import home from '../assets/home.jpg';

import { useState } from 'react';

const Home = () => {
  const [empName,setEmpName]=useState('');
  const navigate=useNavigate();

  const {setEmp}=useContext(UserContext);

  const profs=[
    {
      id:1,
      'title':'Select an Employee...',
      'designation':'',
      'value':'',
    },
    {
      id:2,
      'title':'Dr. Baijnath Kaushik',
      'designation':'Associate Professor',
      'value':'Dr. Baijnath Kaushik',
    },
    {
      id:3,
      'title':'Dr. Manoj Kumar Gupta',
      'designation':'Associate Professor',
      'value':'Dr. Manoj Kumar Gupta',
    },
    {
      id:4,
      'title':'Dr. Ajay Koul',
      'designation':'Associate Professor',
      'value':'Dr. Ajay Koul',
    },
    {
      id:5,
      'title':'Mr. Manoj Kumar',
      'designation1':'Assistant Professor',
      'value':'Mr. Manoj Kumar',
    },
    {
      id:6,
      'title':'Ms. Sonika Gupta',
      'designation1':'Assistant Professor',
      'value':'Ms. Sonika Gupta',
    },
    {
      id:7,
      'title':'Dr. Sunanda',
      'designation1':'Assistant Professor',
      'value':'Dr. Sunanda',
    },
    {
      id:8,
      'title':'Ms. Pooja Sharma',
      'designation1':'Assistant Professor',
      'value':'Ms. Pooja Sharma',
    },
    {
      id:9,
      'title':'Mr. Deo Parkash',
      'designation1':'Assistant Professor',
      'value':'Mr. Deo Parkash',
    },
    {
      id:10,
      'title':'Dr. Sakshi Arora',
      'designation1':'Assistant Professor',
      'value':'Dr. Sakshi Arora',
    },
    {
      id:11,
      'title':'Mr. Sanjay Kumar Sharma',
      'designation1':'Assistant Professor',
      'value':'Mr. Sanjay Kumar Sharma',
    },
    {
      id:12,
      'title':'Dr. Naveen Kumar Gondhi',
      'designation1':'Assistant Professor',
      'value':'Dr. Naveen Kumar Gondhi',
    },
    {
      id:13,
      'title':'Mr. Anuj Mahajan',
      'designation1':'Assistant Professor',
      'value':'Mr. Anuj Mahajan',
    },
    {
      id:14,
      'title':'Mr. Sudesh Kumar',
      'designation1':'Assistant Professor',
      'value':'Mr. Sudesh Kumar',
    },
    {
      id:15,
      'title':'Mr. Sushil Kumar Trisal',
      'designation':'Senior Technical Assistant',
      'value':'Mr. Sushil Kumar Trisal',
    },
    {
      id:16,
      'title':'Mr. Naveen Kumar',
      'designation':'Technical Assistant',
      'value':'Mr. Naveen Kumar',
    },
    {
      id:17,
      'title':'Dr. Deepak Sharma',
      'designation':'Technical Assistant',
      'value':'Dr. Deepak Sharma',
    },
    {
      id:18,
      'title':'Ms. Priyanka Sharma',
      'designation':'Laboratory Assistant',
      'value':'Ms. Priyanka Sharma',
    },
    {
      id:19,
      'title':'Ms. Nisha Satpal Gupta',
      'designation':'Laboratory Assistant',
      'value':'Ms. Nisha Satpal Gupta',
    },
    {
      id:20,
      'title':'Mr. Himmat Raj Sharma',
      'designation':'Laboratory Assistant',
      'value':'Mr. Himmat Raj Sharma',
    },
    {
      id:21,
      'title':'Mr. Sanjeev',
      'designation':'Office Assistant',
      'value':'Mr. Sanjeev',
    },
    {
      id:22,
      'title':'Mr. Mohit',
      'designation':'Office Assistant',
      'value':'Mr. Mohit',
    },
  ];

  const selectHandler=((e)=>{
    setEmpName(e.target.value);
    setEmp(e.target.value);
  })

  const redirectToLeave=(()=>{
    if(empName!==''){
      navigate('/leave');
    }
    else{
      alert("Please select an employee !")
    }
  })

  const redirectToDetails=(()=>{
    if(empName!==''){
      navigate('/details');
    }
    else{
      alert("Please select an employee !")
    }
  })

    return (
      <section className='relative font-serif overflow-hidden min-h-screen'> 
            <img src={home} alt='smvdu' className='h-[30rem] md:absolute md:top-0 md:left-0 md:w-full md:h-screen' />
          <div className=' absolute mx-auto -inset-1.5 top-8 md:top-24 h-80 xl:h-96 sz:h-[35rem] sz:mt-7 w-64 xl:w-96 sz:w-[30rem] border-2 border-yellow-500 rounded-lg flex flex-col justify-evenly items-center bg-yellow-500 bg-opacity-80'>
            <div className='flex flex-col text-center items-center'>
            <h1 className='text-2xl xl:text-4xl sz:text-5xl xl:mb-1'>Welcome to the SMVDU LMS</h1>
              <select onChange={selectHandler} value={empName} className='border border-gray-300 rounded-full text-gray-600 xl:text-xl h-14 pl-5 xl:pl-10 xl:pr-5 sz:pl-14 sz:pr-8 bg-white hover:border-gray-400 focus:outline-none appearance-none hover:cursor-pointer'>
                  {profs.map(({id,title,designation,value})=>(
                    <option id={id}>
                      {title}
                    </option>
                  ))}
              </select>
            </div>
              <div className='text-2xl xl:text-4xl sz:text-5xl flex flex-col text-center'>
                <button onClick={redirectToLeave} className='rounded-full p-1 mb-1 border-2 border-green-500 bg-green-500 bg-opacity-70 hover:scale-125 hover:bg-opacity-100 duration-150'>
                  Apply leave
                </button>
                <button onClick={redirectToDetails} className='rounded-full p-1 border-2 border-green-500 bg-green-500 bg-opacity-70 hover:scale-125 hover:bg-opacity-100 duration-150'>
                  Get details
                </button>
            </div>
          </div>
        </section>
       
         
    )
  }
  
  export default Home;