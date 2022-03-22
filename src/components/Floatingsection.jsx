import React, { Component } from 'react';
import './floatnav.css'
class Floatnav extends Component {
    constructor(){
        super();
        this.state={
            expand:true,
            fullscreen:false
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
    }
    render() { 
        return (
            <div className="flex flex-center floatnav">
                {this.state.expand&&<a href="#home"> <i className="fa-solid fa-house"></i> </a> }
                {this.state.expand&&<a href="#about"> <i className="fa-solid fa-address-card"></i> </a> }
                {this.state.expand&&<a href="#skills"> <i className="fa-solid fa-microchip"></i> </a> }
                <button onClick={()=>this.setState(prev=>{return {expand:!prev.expand}})} className='fa-solid fa-circle-chevron-down' style={{transform:'rotate(90deg) scale(1.5)',margin:1+"rem"}}></button>
                <button onClick={()=>this.setState(prev=>{return {fullscreen:!prev.fullscreen}})} id="fullscreen" className="fa-solid fa-expand" style={{margin:1+"rem"}}></button>
            </div>
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
            document.exitFullscreen();
        }
    }
}
 
export default Floatnav;