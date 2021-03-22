import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function ButtonChooseMeal(props){
    // const [cnTxt, setCnTxt] = useState(props.cnTxt);
    // const [enTxt, setEnTxt] = useState(props.enTxt);
    return (
        <button className={`btn btn_chooseMeal ${props.btnCSS}`} value={props.value} onClick={props.click}>
            <div className="row align-items-center">
            <div className="col">
                <span className="en">{props.enTxt}</span>
                <span className="cn">{props.cnTxt}</span>
            </div>
            <div className="col-auto">
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            </div>
        </button>
    )
}

export default ButtonChooseMeal