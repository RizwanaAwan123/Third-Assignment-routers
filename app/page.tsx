"use client"
import styles from './styles/Home.module.css';
import link from 'next/link';
import { Router } from 'next/router' ;

const Home = () => {
    const NavigationItems = [
      { name: "Navbar", path: "/navbar" },
      { name: "Contact" , path: "/contact" } ,
      { name:  "About" , path: "/about" },
      { name:  "Footer" , path: "/footer" },
    ];

    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Welcome to the Navigation Home page</h1>
      <div className={styles.navLinks}>
         {NavigationItems.map(item => (
            <link href={item.path} key={item.path}>
              <button className={styles.button }>{item.name}</button>
            </link>
         ))}
            </div>
         </div>
    ) ;
} ;
    
     export default Home;