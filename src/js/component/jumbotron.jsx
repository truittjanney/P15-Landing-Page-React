import React from "react";
const Jumbotron = () => {
    return (
        <>
            <div className="p-5 mb-4 rounded-3" style={{ backgroundColor: "#F0FFF0", padding: "50px", marginLeft: "150px", marginRight: "150px"}}>
                <div className="container-fluid py-5" style={{ padding: "80px" }}>
                    <h1 className="display-5 fw-bold text-start">A Warm Welcome!</h1>
                    <p className="col-md-8 fs-4">Hello there,

We're absolutely thrilled to have you with us! 🎉 A warm welcome to 4Geeks Academy. We believe that you'll bring a lot of value here, and we can't wait to see the amazing things you'll accomplish.</p>
                    <button className="btn btn-primary btn-sm float-start" type="button">Call to action!</button>
                </div>
            </div>
        </>
    );

};
export default Jumbotron;
