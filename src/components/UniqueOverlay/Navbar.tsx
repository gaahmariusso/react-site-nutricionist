import React, { Component } from 'react';

import logoImg from '../../assets/images/logo_mm.svg';

import { MenuItems } from './MenuItems';

import { NavbarStyle } from './styles';

export class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <NavbarStyle>
                <nav className="NavbarItems">
                    <div className="navbar-logo">
                        <img src={logoImg} alt="Logo Image" width="250" height="80" />
                    </div>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </NavbarStyle>
        )
    }
}