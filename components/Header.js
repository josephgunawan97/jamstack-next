import Carousel from 'react-bootstrap/Carousel'
import HeaderStyle from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
    return (
        <>
            <div className={HeaderStyle.bgWrap, HeaderStyle.waveContainer}>
                <h1 className={HeaderStyle.h1Title}>Welcome!</h1>
                <p className={HeaderStyle.pTitle}> John Doe at your service!</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FFF" d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,122.7C672,96,768,96,864,128C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                {/* <Image
                className={HeaderStyle.imgPos}
                alt="Avatar"
                src="/assets/avatar2.png"
                layout="fill"
                objectFit="contain"
                quality={100}
            /> */}
            </div>
            {/* <div className={bgWrap, waveContainer}>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFF" d="…"></path>
            </svg>
        </div>
        <p className={bgText}>
           Welcome to my page
            <br />
            John Doe
        </p> */}
        </>
    )
}

export default Header