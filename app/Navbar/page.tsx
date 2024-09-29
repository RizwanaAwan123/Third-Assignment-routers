"use client" ;
import style from '@/styles/About.module.css';
import Link from 'next/link';


const Navbar =() => {
    return (
        <div className={style.container}>
        <div className={style.Navbar} >
        <h1 className='text - 5xl text-white text-bold'> Navbar</h1>
        <Link href="/">
        <div className='text-5xl text-white text bold'>
          <h2 className={style.link} >Go to Home Page</h2>
        </div>
        </Link>
        </div>
        </div>
    );
};

export default Navbar;