import React,{Component} from 'react';
import './face.css';
import MyPic from './assets/pic.png';

class Face extends Component {
    constructor() {
        super();
        document.addEventListener("dbclick",()=>{
            document.documentElement.requestFullscreen().catch((err)=>{
                console.log(err);
            })
        })
    }
    render() { 
        return (
            <>
                <nav id="home" className='flex flex-center' style={{justifyContent:'space-between'}}> 
                    <h3> DEV-D </h3> 
                    <button onClick={()=>alert("Light Mode Colors are not decided yet, Please wait for some days")} class="fa-solid fa-sun darkmode"> </button>
                </nav>
                <header className='flex-grid flex-grid-center'>
                    <div className="grid-flex-center social grid-flex">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dhaivath_lal/"> <i class="icon fa-brands fa-instagram"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/dhaivath.lal"> <i class="icon fa-brands fa-facebook"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/DhaivathLal"> <i class="icon fa-brands fa-twitter"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/the-dev-d/"> <i class="icon fa-brands fa-github"></i></a>
                    </div>
                    <div className="mainface flex flex-center" >
                        <div className="face-container">
                            <img className='mypic' src={MyPic} alt="My Pic" />
                            <div className="flicker-tile"></div>
                        </div>
                    </div>
                    <div className="text"> <h4> &nbsp; ----THE DEV-D</h4> </div>
                </header>
            </>
        );
    }
}
 
export default Face;