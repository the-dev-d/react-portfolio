import React,{Component} from 'react';
class Card extends Component {
    render() { 
        return (
            <div className="card grid grid-center" style={{lineHeight:2.5,alignContent:'start'}}>
                <h3 className='flex flex-center' style={{lineHeight:1}} >{this.props.title}</h3>
                <p style={{lineHeight:1.5,margin:"2rem 1rem 2rem 1rem",fontSize:"small",textAlign:"center"}}>{this.props.children}</p>
                {
                    this.props.content.map((value,key)=>{
                        return <h4 className='grid grid-center' style={{margin:"0.5rem 0rem 0.5rem 0rem"}}> <i className={value.icon} style={{fontSize:'200%'}} ></i> {value.name} </h4>
                    })
                }
                <div style={{height:1+'rem'}}></div>
            </div>
        );
    }
}
 
export default Card;