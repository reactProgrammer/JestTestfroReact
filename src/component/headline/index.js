import React, { Component } from 'react';

 class Headline extends Component {
     constructor(props){
       super(props)
     }
    render() {
        const {header,desc}=this.props;
        if(!header){
            return null
        }
        return (
            <div data-test="HedlineComponent">
                <h1 data-test="h1">{header}</h1>
                <p data-test="desc">{desc}</p>
            </div>
        )
    }
}

export default Headline;
