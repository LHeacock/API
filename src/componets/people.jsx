import React from "react"

function People(props){
    return(
        <div className="card" style={{width: 18+"rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {props.gender}
                    </li>
                    <li className="list-group-item">
                        {props.age}
                        </li>
                        <li className="list-group-item">
                        {props.eye_color}
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default People