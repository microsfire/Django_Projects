import React from "react";
import ItemComponet from "./ItemComponet";

const ListComponet = (props) => {
    {/*const items = props.items*/}
    return (
        <div>
            <h2>{props.listName}</h2>
            <ul>
                {/*{items.map(item => <ItemComponet key={item.id} name={item.name} status={item.done}/>)}*/}
            </ul>
        </div>
    )
}
export default ListComponet


