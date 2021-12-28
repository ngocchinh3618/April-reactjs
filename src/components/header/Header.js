import React from 'react';
import Logo from '../../common/Logo';
import logo from "../../assets/svg/logo.svg";
import HeaderShape1 from '../common/HeaderShape1';
import HeaderShape2 from '../common/HeaderShape2';

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-shape header-shape-1">
                <HeaderShape1 />
            </div>
            <div className="header-shape header-shape-2">
                <HeaderShape2 />
            </div>
            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                        <h1 className="m-0">
                            <Logo logo={logo} />
                        </h1>
                    </div>
                </div>
            </div>
        </header>

    )
}
