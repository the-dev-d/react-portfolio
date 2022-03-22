import React,{Component} from 'react';
import './face.css';
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
                    <div className="mainface grid grid-center" style={{alignContent:'flex-end',marginBottom: '5%'}} >
                        <div className="floater"></div>
                        <img src={"/assets/alphabgpic.png"} alt="my pic" />
                        <h3>Hi.. I'm Dhaivath</h3>
                    </div>
                    <div className="text"> <h4> &nbsp; ----THE DEV-D</h4> </div>
                </header>
            </>
        );
    }
}
 
export default Face;