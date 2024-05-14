import React from "react";
import bootstrap from 'bootstrap'
class Dolist extends React.Component{
    constructor(props)
    {
        super()
        
    }
    render()
    {
     console.log(this.props.doitem)
           return(
            <>
            <h4>Dolist</h4>
            {
                this.props.doitem.map((item=>{
                    return(
                        <>
                        {item.deleted===false?( <div className="card">
                            <p className="card-header">{item.title}</p> 
                            <div className="btn-group">
                            <button className="btn btn-outline-primary" onClick={()=>this.props.toggletodo(item.id)}>Undo</button>
                            <button className="btn btn-outline-danger" onClick={()=>this.props.deletedtodo(item.id)}>Delete</button>
                            </div>
                        </div>):(<></>)}
                       
                      
                        </>
                    )
                }))
            }
            
            
            
            </>
           )
    }
}


export default Dolist