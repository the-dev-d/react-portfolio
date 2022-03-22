import React,{Component} from 'react';

class QuoteTile extends Component {
    constructor(){
        super();
        this.quote = ['"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler',
        'First, solve the problem. Then, write the code.” – John Johnson',
        '“Java is to JavaScript what car is to Carpet.” – Chris Heilmann',
        '“ Code is like humor. When you have to explain it, it’s bad.” – Cory House'];
    }
    randIntGenerator() {
        return Math.floor(Math.random()*4);
    }
    render() { 
        return (
            <div className="desctile flex flex-center">
                <div className="invert tile flex flex-center"> 
                    {this.quote[this.randIntGenerator()]}
                </div>
            </div>
        );
    }
}
 
export default QuoteTile;