import React from "react";

const ItemComponet = (props) => {
    const status = props.status
    return(
        <div>
            <li>{props.name} {status ? 'Comcluido' : 'Incompleto'}</li>
        </div>

    )
}

export default ItemComponet