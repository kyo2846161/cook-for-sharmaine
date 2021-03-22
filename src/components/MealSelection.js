import React from 'react'
import {Link} from 'gatsby'

class MealSelection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            moment : props.data.current_moment,
            size : props.size,
            
        }
    }
    componentDidMount(){
    }
    render(){
        const size = this.state.size === "full" ? "" : "mx-3";
        const bg = this.state.img;
        // console.log(bg)
        return(
            <Link to="/ingredients/" state="">
                <div className={` ${size} `}>
                    
                </div>
            </Link>
        )
    }
}

export default MealSelection