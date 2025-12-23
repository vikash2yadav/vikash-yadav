import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Projects = (props) => {
    return (
        <>
            <Header />
            <div style={styles.maindiv}>
                <h1 className='text-xl mb-10 font-serif text-gray-100 font-semibold '>Projects</h1>
                <div style={styles.seconddiv}>

                </div>
            </div>
            <Footer/>
        </>
    )
}

const styles = {
    maindiv: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#444',
        padding: "120px 100px",
        color: "white",
    },
    seconddiv: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-around',

    }
}

export default Projects