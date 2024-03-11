import React from "react";
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#505050' }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{ color: 'white', paddingLeft: '150px' }}>Landing Page</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end"id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{ color: 'white'}}>About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{ color: 'white' }}>Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{ color: 'white', paddingRight: '180px' }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};
export default Navbar;

