import React from "react";
import Cards from "./cards.jsx";

const Row = (props) => {
    return (
        <div>
<div className="row">
    <div className="col">
        <Cards CardTitle="Bootstrap Card 1"/>
    </div>

    <div className="col">
        <Cards CardTitle="Bootstrap Card 2"/>
    </div>

    <div className="col">
        <Cards CardTitle="Bootstrap Card 3"/>
    </div>

    <div className="col">
        <Cards CardTitle="Bootstrap Card 4"/>
    </div>

</div>
        </div>
    )
}

export default Row