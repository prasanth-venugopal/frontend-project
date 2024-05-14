import React from 'react'

class Counter extends React.Component{
constructor(){
    super()
    this.state={count:0,name:"aishu"}
    this.increment=this.increment.bind(this)
}
increment()
{
  if(this.state.count<10)
  this.setState({count:this.state.count+1})
  console.log(this.state.count)
}
decement=()=>
{      if(this.state.count>0)
  {

    this.setState({count:this.state.count-1})
    console.log(this.state.count)
  }
}
reset=()=>{
  this.setState({count:0})
}
render()
{
  return(
    <>
    <button onClick={this.increment}>+</button>
    <span>{this.state.count}</span>
    <button onClick={this.decement}>-</button>
    <button onClick={this.reset}>reset</button>
    </>
  ) 
}
}


export default Counter