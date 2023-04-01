import React from 'react'
import "./about.css"

function About() {
  const [readMore, setReadMore]= React.useState(false)
  function handleReadMore(){
    setReadMore((prevReadMore)=> !prevReadMore)
    
  }
  let buttonText = ""
  if(readMore){
    buttonText = 'Read Less'
  }else{
    buttonText = 'Read More...'

  }
  return (
    <div style={{padding:'0', margin: '0', width:'100%'}}>
      <div className='about-container'>
        <h1 className='about'>About ME!</h1>
        <div className='outer-about-info'>
          <div className='about-info'>
            <img src="./src/assets/images/img31.jpg" alt='img31'/>
            <h2>Herman Athor</h2>
            <p>Photographer</p>
          </div>
          {/* <div className='details-container'> */}
          <p className='details'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque, dicta atque sapiente officiis ea vero sint. Iure aut cumque tenetur sapiente necessitatibus, unde eaque qui quae animi natus non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque, dicta atque sapiente officiis ea vero sint. Iure aut cumque tenetur sapiente necessitatibus, unde eaque qui quae animi natus non!
            {readMore && 
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque, dicta atque sapiente officiis ea vero sint. Iure aut cumque tenetur sapiente necessitatibus, unde eaque qui quae animi natus non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque, dicta atque sapiente officiis ea vero sint. Iure aut cumque tenetur sapiente necessitatibus, unde eaque qui quae animi natus non!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque, dicta atque sapiente officiis ea vero sint. Iure aut cumque tenetur sapiente necessitatibus, unde eaque qui quae animi natus non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque, dicta atque sapiente officiis ea vero sint. Iure aut cumque tenetur sapiente necessitatibus, unde eaque qui quae animi natus non!
                </span>}
            <span><button className='read-more-button' onClick={()=>handleReadMore()}>{buttonText}</button></span>
          </p>
          {/* </div> */}
        </div>
      </div>
      <div className='worked-with'>
            <h2 className='heading'>People i have worked with</h2>
            <div className='people-container'>
              <div className='people'>
                <img src="./src/assets/images/img31.jpg" alt="img31" />
                <h3>Anthony</h3>
              </div>
              <div className='people'>
                <img src="./src/assets/images/img32.jpg" alt="img32" />
                <h3>Gerald</h3>
              </div>
              <div className='people'>
                <img src="./src/assets/images/img33.jpg" alt="img33" />
                <h3>Asadi</h3>
              </div>
              <div className='people'>
                <img src="./src/assets/images/img34.jpg" alt="img34" />
                <h3>David</h3>
              </div>
              
            </div>
      </div>
    </div>
  )
}

export default About