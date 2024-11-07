import { useEffect } from 'react';
import NavBar from '../components/NavBar'
import Terminal from '../components/Terminal'
import { Meteors } from '../components/ui/meteor'
import '../styles.scss'

function App() {

    useEffect(() => {
        // Disable scrolling when this component is mounted
        document.body.style.overflow = 'hidden';
    
        return () => {
          // Re-enable scrolling when this component is unmounted
          document.body.style.overflow = 'auto';
        };
      }, []);

    return (
        <>
            <Meteors number={20} />
            <div className='hero-page no-scroll'>
                <NavBar />
                <div className='hero-content'>
                    <div className='title-name'>
                        Rehan<br />Dinal<br />Samaratunga
                    </div>
                    <Terminal />
                </div>
            </div>
        </>
    )
}

export default App
