import logo from '../assets/logo.png';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTelegram} from 'react-icons/fa';

const Header=(()=>{
    const links=[
        {
            id:1,
            icon:<FaFacebook size={20} />,
            style:'rounded-full h-5 m-1 bg-white text-sky-600',
            url:"https://www.facebook.com/SMVDUniversity/",
        },
        {
            id:2,
            icon:<FaTwitter size={20} />,
            style:'rounded-full h-5 m-1 bg-white text-sky-500',
            url:"https://twitter.com/SMVDU_mediacell",
        },
        {
            id:3,
            icon:<FaInstagram size={20} className="rounded-full bg-white"/>,
            style:'rounded-full h-5 m-1 bg-white text-pink-600',
            url:"https://www.instagram.com/smvdumediacell/",
        },
        {
            id:4,
            icon:<FaYoutube size={20} className="rounded-full bg-white" />,
            style:'rounded-full h-5 m-1 text-red-600',
            url:"https://www.youtube.com/SMVDUniversity",
        },
        {
            id:5,
            icon:<FaLinkedin size={20} className="rounded-full" />,
            style:'rounded-full h-5 m-1 bg-white text-sky-700',
            url:"https://www.linkedin.com/school/shri-mata-vaishno-devi-university/",
        },
        {
            id:6,
            icon:<FaTelegram size={20} />,
            style:'rounded-full h-5 m-1 bg-white text-sky-600',
            url:"https://t.me/shrimatavaishnodeviuniversity",
        },
    ];

    return(
        <>
            <header className="left-0 top-0 z-50 w-screen h-38 bg-gradient-to-b from-black to-red-700 ">
                <div className="flex flex-row justify-center sm:justify-end pr-8 text-xl">
                    <h1 className="pl-2 sm:p-0 w-56 sm:w-40 mx-90 text-white text-xl">Connect with us:</h1>
                    {links.map(({id,icon,style,url})=>(
                        <div key={id} className={`cursor-pointer ${style}`}>
                            <a href={url}>{icon}</a>
                        </div>
                    ))}
                </div>
                <div className="pt-0 text-2xl sm:text-3xl font-serif flex flex-col sm:flex-row text-center sm:justify-start text-white">
                    <img src={logo} alt="logo" className="w-20 mx-auto block md:mx-0 md:ml-6" />
                    <h1 className="m-4">Shri Mata Vaishno Devi University</h1>
                </div>
                <div>
                    <h1 className="pb-1 text-2xl md:text-4xl font-serif text-center text-white">Leave Management System</h1>
                </div>
            </header>
        </>
    )
})

export default Header;