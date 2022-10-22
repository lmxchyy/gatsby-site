import React from "react";
import {Link} from "gatsby"
import './header.module.scss'
import * as headerStyles from './header.module.scss'
// import headerStyles from './header.module.scss'

const Header =() =>{
    return(
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to='/'>
                    Diving Header
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/">home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ='/blog'>blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ='/about'>about</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ='/contact'>contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header