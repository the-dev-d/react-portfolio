import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
import './floatnav.css'
class Floatnav extends Component {
    constructor(props){
        super(props);
        this.state={
            expand:true,
            fullscreen:false,
            display:true
        };
        document.addEventListener('fullscreenchange',(event)=>{
            if(document.fullscreenElement) {
                let elem = document.getElementById('fullscreen');
                elem.classList.remove("fa-expand");
                elem.classList.add("fa-compress");
            }
            else{
                let elem = document.getElementById('fullscreen');
                elem.classList.remove("fa-compress");
                elem.classList.add("fa-expand");
            }
        })
        document.addEventListener("scroll", () => {
            if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
                this.setState({display:false});
            }
            else if(!this.state.display) {
                this.setState({display:true});
            }
        })
    }
    render() { 
        return (
            <CSSTransition in={this.state.display} classNames="slide-bottom" unmountOnExit timeout={1000}>
                <div className="flex flex-center floatnav">
                    {this.state.expand&&<a href="#home"> <i className="fa-solid fa-house"></i> </a> }
                    {this.state.expand&&<a href="#about"> <i className="fa-solid fa-address-card"></i> </a> }
                    {this.state.expand&&<a href="#skills"> <i className="fa-solid fa-microchip"></i> </a> }
                    <button onClick={()=>this.setState(prev=>{return {expand:!prev.expand}})} className='fa-solid fa-circle-chevron-down' style={{transform:'rotate(90deg) scale(1.5)',margin:1+"rem"}}></button>
                    <button onClick={()=>this.setState(prev=>{return {fullscreen:!prev.fullscreen}})} id="fullscreen" className="fa-solid fa-expand" style={{margin:1+"rem"}}></button>
                </div>
            </CSSTransition>
        );
    }
    componentDidUpdate() {
        if(this.state.fullscreen){
            document.documentElement.requestFullscreen()
            .catch((err)=>{
                console.log(err);
            })
        }
        else {
            if(document.fullscreenElement)
                document.exitFullscreen();
        }
    }
}
 
export default Floatnav;