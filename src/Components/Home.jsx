import React from 'react'
import "./home.css"
import About from './About'
import Gallery from './Gallery'

function Home() {
  return (
    <div>
        <section className='head-section'>
            <h1>The PHOTOGRAPHER</h1>
        </section>
        <section className='middle-section'>
            <h2>WELCOME</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper auctor neque vitae tempus. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Mauris ultrices eros in cursus turpis massa tincidunt. Nibh sed pulvinar proin gravida hendrerit. Sagittis orci a scelerisque purus semper. In egestas erat imperdiet sed euismod nisi porta lorem. Morbi non arcu risus quis varius quam quisque id diam. Sagittis id consectetur purus ut faucibus pulvinar elementum. Scelerisque eleifend donec pretium vulputate. Pellentesque id nibh tortor id. Ullamcorper a lacus vestibulum sed arcu non odio euismod.</p>
        </section>
        <section className='bottom-section'>
            <h3>PORTFOLIO</h3>
            <div className='images-container'>
                <img src="./src/assets/images/img4.jpg" alt="image4" />
                <img src="./src/assets/images/img5.jpg" alt="image5" />
                <img src="./src/assets/images/img6.jpg" alt="image6" />
                <img src="./src/assets/images/img7.jpg" alt="image7" />
                <img src="./src/assets/images/img8.jpg" alt="image8" />
                <img src="./src/assets/images/img9.jpg" alt="image9" />
            </div>
        </section>
        <About/>
        <Gallery/>
    </div>
  )
}

export default Home