import React from "react"

function Film(props){
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {props.director}
                    </li>
                    <li className="list-group-item">
                        {props.description}
                        </li>
                        <li className="list-group-item">
                        {props.release_date}
                        </li>
                        <li className="list-group-item">
                        {props.running_time}
                        </li>
                        <li className="list-group-item">
                        {props.rt_score}
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Film


