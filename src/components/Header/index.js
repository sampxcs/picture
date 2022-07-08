import React from "react";
import './Header.css'
import plantImg from './png-clipart-leaf-plant-computer-icons-green-leaves-plant-stem-palm-tree.png'

export default function Header() {
    return (
        <header>
            <div className="header-title">
                <h1><span>N</span>A<span>T</span>U<span>R</span>E</h1>
                <h3>The Beauty of Everything</h3>
                <img src={plantImg} alt="Nature" title="Nature" className="over-line"/>
            </div>
        </header>
    )
}