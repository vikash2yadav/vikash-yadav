import React, { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = (props) => {
    return (
        <>
            <footer style={styles.footer}>

                <div style={styles.secondDiv}>
                    <div style={styles.secondContainer}>

                        <div style={styles.secondColumns} >
                            <h1 className='text-2xl font-semibold mb-10'>About</h1>
                            <div className='flex text-m' style={{ flexDirection: "column" }}>
                                <div className='mb-20 text-m' style={styles.aboutinfo}> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </div>
                                <div className='flex justify-start align-start mb-10'>
                                    <span className='mx-2 bg-gray-600 p-3' style={{ borderRadius: "50%" }}>
                                       <Link> <WhatsAppIcon /></Link>
                                    </span>

                                    <span className='mx-2 bg-gray-600 p-3' style={{ borderRadius: "50%" }}>
                                        <Link> <InstagramIcon /></Link>
                                    </span>

                                    <span className='mx-2 bg-gray-600 p-3' style={{ borderRadius: "50%" }}>
                                       <Link> <XIcon /></Link>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div style={styles.secondColumns}>
                            <h1 className='text-2xl font-semibold mb-10'>Links</h1>
                            <ul className='text-m' style={styles.linkList}>
                                <li className='mb-2'> <Link className='hover:text-gray-300'> &#8594; <span className='mx-1'>Home</span> </Link> </li>
                                <li className='mb-2'> <Link className='hover:text-gray-300'> &#8594; <span className='mx-1'>About</span>  </Link> </li>
                                <li className='mb-2'> <Link className='hover:text-gray-300'> &#8594; <span className='mx-1'>Services</span>  </Link> </li>
                                <li className='mb-2'> <Link className='hover:text-gray-300'> &#8594; <span className='mx-1'> Blog</span> </Link> </li>
                                <li className='mb-2'> <Link className='hover:text-gray-300'> &#8594; <span className='mx-1'>Projects</span> </Link> </li>
                                <li className='mb-2'> <Link className='hover:text-gray-300'> &#8594; <span className='mx-1'>Contact</span> </Link> </li>
                            </ul>
                        </div>

                        <div style={styles.secondColumns}>
                            <h1 className='text-2xl font-semibold mb-10'>Services</h1>
                            <ul className='text-m' style={styles.linkList}>
                                <li className='mb-2'> <Link className='hover:text-gray-300'>&#8594; <span className='mx-1'> Projects</span></Link> </li>
                                <li className='mb-2'> <Link className='hover:text-gray-300'>&#8594; <span className='mx-1'> For our society</span></Link> </li>
                                <li className='mb-2'> <Link className='hover:text-gray-300'>&#8594; <span className='mx-1'> For us</span></Link></li>
                            </ul>
                        </div>

                        <div style={styles.secondColumns}>
                            <h1 className='text-2xl font-semibold mb-10'>Have a Questions?</h1>
                            <ul className='text-m' style={styles.linkList}>
                                <li className='mb-4'> <Link className='hover:text-gray-300'><LocationOnIcon /><span className='mx-1'> 203 Fake St. Mountain View, San Francisco, California, USA</span></Link> </li>
                                <li className='mb-4'> <Link className='hover:text-gray-300'> <CallIcon />	<span className='mx-1'>+2 392 3929 210</span></Link> </li>
                                <li className='mb-4'> <Link className='hover:text-gray-300'> <MailIcon /><span className='mx-1'>  info@yourdomain.com</span></Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className=' w-full mt-5 flex mb-10 text-m justify-center text-center'>
                    <p className='text-m w-full' style={styles.linkList}>copyright © 2024 | All rights reserved | This is made with &#9829; by
                        <Link className='hover:text-gray-300'> Vikash Yadav </Link> </p>
                </div>

            </footer>
        </>
    )
}
const styles = {
    footer: {
        backgroundColor: '#111',
        color: '#fff',
        padding: ' 60px 40px',
        fontFamily: 'Arial, sans-serif',

    },
    secondDiv: {
        color: '#fff',
    },
    secondContainer: {
        padding: '50px 0px',
        marginLeft: "0px",
        display: 'flex',
        flexWrap: 'wrap',
    },
    secondColumns: {
        flex: '1',
        margin: '0 10px',

    },
    column: {
        flex: '1',
        margin: '0 20px',
    },
    aboutinfo: {
        color: 'rgb(166, 168, 169)',
        lineHeight: "30px"
    },
    linkList: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
        color: 'rgb(166, 168, 169)',
        '&:hover': {
            color: 'red'
        }
    },
    socialIcons: {
        fontSize: '24px',
        marginLeft: '10px'
    },
    subsButton: {
        backgroundColor: 'blue',
        color: 'white',
    }
};
export default Footer;
