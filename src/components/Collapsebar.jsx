import React, { Component } from 'react';

class Collapsebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            expand:false
        }
    }
    render() { 
        return (
            <div className="card grid" style={{width:"100%",height:"auto",padding:"0px",marginBottom:"0.5rem",transition:"all 0.3s ease-in-out"}}>
                        <button style={{width:"100%",margin:"0px"}} onClick={()=>this.setState((prev)=>{return{expand:!prev.expand}})}>
                        <h3 className="flex" style={{padding:"0.5rem 0rem 0.5rem 0rem",width:"100%",justifyContent:"space-between",margin:"0px"}}>
                            <div>
                                &nbsp; {this.props.name} &nbsp; <i className={this.props.icon}></i>
                            </div>
                            <i style={{marginRight:"1rem"}} class="fa-solid fa-angle-down"></i> 
                            </h3>
                        </button>
                <div className="transition flex flex-center" style={this.state.expand?{width:"100%",overflow:"hidden",height:"100%"}:{width:"100%",overflow:"hidden",height:"0rem"}}>
                    <p style={{width:"90%",padding:"1rem"}}>
                        {this.props.children}
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Collapsebar;