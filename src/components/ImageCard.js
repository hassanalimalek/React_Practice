import React from 'react';
import './image.css'
class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.state={spans:0}
        this.imageRef = React.createRef();
    }
    setSpans = ()=>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil((height/10));
        console.log(spans)
        this.setState({spans})
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans)
    }
    
    render(){
        
        return(
        <div style={{gridRow:`span ${this.state.spans}`}}>
            <img 
            ref={this.imageRef} 
            src={this.props.image.urls.regular} 
            alt={this.props.image.description}/>
        </div>)
    }

}

export default ImageCard