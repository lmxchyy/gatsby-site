import React from "react";
import {Link,graphql,useStaticQuery} from "gatsby"

import './header.module.scss'
import * as headerStyles from './header.module.scss'
// import headerStyles from './header.module.scss'

const Header =() =>{
    const data = useStaticQuery(graphql`
        query HeaderQuery{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)

    return(
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to='/'>
                    {data.site.siteMetadata.title}
                    {/* Diving Header */}
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