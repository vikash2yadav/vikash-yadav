import React from 'react'
import SkillBox from '../../../components/SkillBox'

const Skills = () => {
  return (
    <>
      <div style={styles.maindiv} id="skill">
        <h1 style={{fontSize: '40px'}} className='text-xl mb-4 text-center font-serif text-gray-700 font-semibold '>My </h1>
          
        <div className='w-full h-1 mb-8 flex justify-center '>
          <div className='w-8 h-1 bg-red-700 mb-20 text-center rounded-lg'>
          </div>
        </div>
        <p className='mb-20 text-center text-gray-400 text-m'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>

        <div style={styles.seconddiv}>
        <SkillBox className={'mx-0.5 text-gray-100 bg-gray-500  hover:text-gray-300 hover:shadow-md hover:-translate-x-0.5'} title="React Js" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" />
        <SkillBox className={'mx-0.5 text-gray-100 bg-gray-500  hover:text-gray-300 hover:shadow-md hover:-translate-x-0.5'} title="Node Js" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUEmiMSokRp7NEVnoYhL4b9Mbbdw9s-Wah0CZkE9O5g&s"/>
        <SkillBox className={'mx-0.5 text-gray-100 bg-gray-500  hover:text-gray-300 hover:shadow-md hover:-translate-x-0.5'} title="Express Js" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMoKObVKbBk_R7Ga4cZ7uTa1R8aHbhse0zUlOVen87Q&s"/>
        <SkillBox className={'mx-0.5 text-gray-100 bg-gray-500  hover:text-gray-300 hover:shadow-md hover:-translate-x-0.5'}  title="MongoDB" logo="https://e7.pngegg.com/pngimages/216/509/png-clipart-mongodb-node-js-npm-open-source-model-angularjs-leaf-leaf-logo.png"/>
        <SkillBox className={'mx-0.5 text-gray-100 bg-gray-500  hover:text-gray-300 hover:shadow-md hover:-translate-x-0.5'} title="My Sql" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEERgTHycB_bBwPpoVQLbDfplHfXwyLB5RJjo6v3VRQ&s"/>
        <SkillBox className={'mx-0.5 text-gray-100 bg-gray-500  hover:text-gray-300 hover:shadow-md hover:-translate-x-0.5'} title="Swagger" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmlSaX4Fh1fqxmM-5MvIQOSZA8t0Fl5UybGVdYElZagg&s"/>
        
        </div>
      </div>
    </>
  )
}

const styles = {
  maindiv: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    padding: "120px 100px",
    color: "white",
    marginBottom: "200px"
  },
  seconddiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: "wrap",

  }
}

export default Skills