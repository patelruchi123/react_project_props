import React from "react";

import CandidateNames from "./CandidateNames";

const list1=["Jiyana","Hetvi","Priya","Pushti","Rahul"];
const list2=["Pooja","Priya","Mittal","Dipu"];
const list3=["Ankit","Pratik","Brijesh","Yamini"];


class CandidatesContainer extends  React.Component{
    constructor(props){
        super(props);
        this.state={

            CandidateNames:list1,
            CandidateNames1:list2,
            
            //  CandidateNames:["Jiyana","Hetvi","Priya","Pushti","Rahul"]
        };
        this.changelist=this.changelist.bind(this);
        this.changelist1=this.changelist1.bind(this);
        
    }
        changelist(){
            this.setState({CandidateNames:list2});
         }
        changelist1(){
            this.setState({CandidateNames:list3});
         }
    
    render(){
    return<>
        <CandidateNames CandidateNames={this.state.CandidateNames}/>
        <button onClick={this.changelist}>Update list1</button>
        <button onClick={this.changelist1}>Update list2</button>
         </>
    }
        
}

export default CandidatesContainer;