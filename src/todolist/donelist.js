import React from "react";
import Bootstrap from 'bootstrap'


class Donelist extends React.Component{
    constructor(props)
    {
        super()
    }
    render()
    {
        return(
           
                <>
                <h4>Donelist</h4>
                {
                    this.props.doneitem.map((item=>{
                        return(
                            <>
                            {item.deleted===false?( <div className="card">
                               <p className="card-header">{item.title}</p>  
                                <div className="btn-group">
                                <button className="btn btn-outline-primary" onClick={()=>this.props.toggletodo(item.id)}>Redo</button>
                                <button className="btn btn-outline-danger" onClick={()=>this.props.deletedtodo(item.id)}>Delete</button>
                                </div>                              
                                
                            </div>):(<></>)
                    }
                            </>                       
                             )
                    }))
                }
                
                
                
                </>
        )
    }
}


export default Donelist



