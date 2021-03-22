import React from 'react'

class Greetings extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            img : props.data.greeting_img,
            txt : props.data.greeting_txt,
            moment : props.data.current_moment,
            size : props.size,
            status : props.data.homePage,
        }
    }
    componentDidMount(){
        console.log(this.state.status)
    }
    render(){
        const size = this.state.size === "full" ? "" : "mx-3";
        const bg = this.state.img;
        console.log(this.state.status)
        // console.log(bg)
        return(
            <div className={`greetings_container ${size} ${bg} fade ${this.state.status ? "show" : "hide"}`}>
                <h5 className={`mb-0 shadow`}>{this.state.txt}</h5>
            </div>
        )
    }
}

export default Greetings