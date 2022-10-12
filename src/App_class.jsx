import React from "react";//import {Component}/React from "react"
import HelloWorld from "./App_func";//子组件 

class App extends React.Component{
  constructor(){
    super()
    this.state={
      message:'App Component'
    }
  }
  render(){
    // const{message}=this.sate
    return(
    <div>
      ['a','c','c']
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
      
    </div>

     /* 1.<h2>{message}</h2>//返回element元素 可以返回组件：<app/> 
         2.数组或者html格式//例如购物车 table。
         3.字符串或者数字 */
   
    )

  }
}
export default App;
