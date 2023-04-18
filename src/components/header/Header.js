import React from "react";
import './Header.css';

export default function Header(props) {
    return (
        <header className='menu'>
            <div className='container'>
                <div className='menu_inner'>
                    <form className='search_form'>
                        <input type='text' id='search' className='search_input' placeholder='Search...' />
                        <button type='submit' className='search_btn'><i className='fas fa-search'></i></button>
                    </form>
                    <nav className='menu_nav'>
                        <ul className='menu_list'>
                            {props.navbar}
                        </ul>
                    </nav>
                    <button className='menu_btn'>Sign in</button>
                </div>
            </div>
        </header>
    )
}
