import React, { Component } from 'react';
export default class Counter extends Component {
                 state = {
                   count: 0,
                   isOn:false,
                   start:0
                };
                  componentDidMount() {
                   this.timerID = setInterval(() => 
                   this.setState({ count: this.state.count + 1 }),1000
                  );
                  }  
                  componentWillMount(){
                      clearInterval(this.timerID);
                  }
                /*handleIncrement=()=>{
                  this.timer = setInterval(()=>{
                    this.setState({ count: this.state.count + 1 });
                  },1000);
                }
                handleStop=()=>{
                    this.setState({isOn:false});
                    clearInterval(this.timer);
                }
                handleReset=()=>{
                    this.setState({count:0});
                    console.log("reset");
                }*/
                 render() {
                   return (
                     <div>
                       <span className={this.getBadgeClasses()}>
                         {this.formatCount()}
                       </span>
                       
                     </div>
                   );
                 }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

                 formatCount() {
                   const { count } = this.state;
                   return count === 0 ? "zero" : count;
                 }
               }

 