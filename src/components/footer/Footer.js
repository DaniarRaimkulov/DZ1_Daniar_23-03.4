import React from "react";
import "./Footer.css";

export default function Footer(props) {
    const { inst, fcb, firstNumber, secondNumber } = props.contacts;

    return (
        <footer className="footer">
            <div className="container">
                <div className="social">
                    <div className="subtitle">Мы в социальных сетях:</div>
                    <a href="#" className="link">
                        {inst}
                    </a>
                    <a href="#" className="link">
                        {fcb}
                    </a>
                </div>
                <div className="call">
                    <div className="subtitle">Или позвоните нам</div>
                    <a href="#" className="link">
                        {firstNumber}
                    </a>
                    <a href="#" className="link">
                        {secondNumber}
                    </a>
                </div>
            </div>
        </footer>
    );
}
