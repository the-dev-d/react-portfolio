import React, { Component } from 'react';
import './face.css';

class Face extends Component {
    constructor(props) {
        super(props);
        document.addEventListener("dbclick", () => {
            document.documentElement.requestFullscreen().catch((err) => {
                console.log(err);
            })
        })
    }
    render() {
        return (
            <>
                <nav id="home" className='flex flex-center' style={{ justifyContent: 'space-between' }}>
                    <h3> DEV-D </h3>
                    <button onClick={() => alert("Light Mode Colors are not decided yet, Please wait for some days")} className="fa-solid fa-sun darkmode"> </button>
                </nav>
                <header className='flex-grid flex-grid-center'>
                    <div className="grid-flex-center social grid-flex">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dhaivath_lal/"> <i className="icon fa-brands fa-instagram"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/dhaivath.lal"> <i className="icon fa-brands fa-facebook"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/DhaivathLal"> <i className="icon fa-brands fa-twitter"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/the-dev-d/"> <i className="icon fa-brands fa-github"></i></a>
                    </div>
                    <div className="mainface flex flex-center" >
                        <div id="face-container" className="face-container">
                            <img id="mypic" className='mypic' src={this.props.image.src} alt="My Pic" />
                            <div className="flicker-tile"></div>
                        </div>
                    </div>
                    <div className="text"> <h4> &nbsp; ----THE DEV-D</h4> </div>
                </header>
            </>
        );
    }

    componentDidMount() {
        const container = document.getElementById("face-container");
        const pic = document.getElementById("mypic");

        document.addEventListener('scroll',
            () => {
                const rect = container.getBoundingClientRect();
                const visible = (
                    rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth))

                const { classList } = pic;
                visible ? !classList.contains("focus") && pic.classList.add("focus") : classList.contains("focus") && pic.classList.remove("focus")
            })
    }


}

export default Face;