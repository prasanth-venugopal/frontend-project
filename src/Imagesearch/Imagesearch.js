import React from "react"
import axios from "axios"

class ImageSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={image:[], currentpage: 1}

    }
    // componentDidMount()
    // {
    //     const url="https://api.unsplash.com/search/photos/?client_id=OVrTEZMKvke6qFzkTsKbgCn4X9ONftDWHVEN8qbDTeI&page=1&query=travel"
    //     axios.get(url)
    //     .then((res)=>this.setState({image:res.data.results}))
    //     .catch((err)=>console.log(err))
    // }

    //function for fetcing image from api 
    getImage=(query ,page)=>{
        const url="https://api.unsplash.com/search/photos?client_id=OVrTEZMKvke6qFzkTsKbgCn4X9ONftDWHVEN8qbDTeI&page="+page+"&query="+query
        axios.get(url)
        .then((res)=>this.setState({image:res.data.results , current: page}))
        .catch((err)=>console.log(err))
    }

    //search box function
    handleSearch=(event)=>{
        this.setState({text:event.target.value})
        console.log(this.state.text)
    }

    //submit function
    handleSubmit=(event)=>{
        event.preventDefault();
        this.getImage(this.state.text , this.state.currentpage)
    }

    render()
    {
        const images = this.state.image.slice((this.state.currentpage -1) * 10, this.state.currentpage *10);
        return(
            <>
            <form onSubmit={this .handleSubmit} >
                <input type="text" onChange={this.handleSearch} className="form-control-lg" placeholder="Search Image Here...!"></input>
                <input type="submit" className="btn btn-outline-dark"></input>
            </form>
            <div className="pagination justify-content-center">
                <ul className="pagination">
                {[...Array(Math.ceil(this.state.image.length / 10))].map((page, index) =>
                        <li className="page-item" key={index}>
                            <a className="page-link" onClick={() => this.getImage(this.state.text, index + 1)}>{index + 1}</a>
                        </li>
                    )}
                </ul>
            </div>(<></>)
              {
                this.state.image.map((img )=>(<img src={img.urls.small_s3} ></img>))
              }
               
            </>
        )
    }
}

export default ImageSearch