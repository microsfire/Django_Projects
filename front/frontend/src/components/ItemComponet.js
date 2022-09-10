import React from "react";

const ItemComponet = (props) => {
    const status = props.status
    return(
        <div>
            <li>{props.name} => status: {status ? <span>done</span> : <span>not</span>}</li>
        </div>

    )
}

export default ItemComponet