import { Link, useLocation } from 'react-router-dom'

import { useState } from 'react'
import Logo from '../../assets/foto-logo-canva.png'
import { Container, Li, Menu } from './styles'

function Header() {

    const [changeBackground, setChangeBackground] = useState(false)

    const { pathname } = useLocation()

    window.onscroll = () => {
        if (!changeBackground && window.pageYOffset > 200) { setChangeBackground(true) }
        if (changeBackground && window.pageYOffset <= 200) { setChangeBackground(false) }
    }

    return (
        <>
            <Container changeBackground={changeBackground}>
                <img src={Logo} alt='img-logo' />

                <Menu>
                    <Li isActive={pathname === "/"}>
                        <Link to="/" > Home </Link>
                    </Li>

                    <Li isActive={pathname.includes("filmes")}>
                        <Link to="/filmes" >Flmes</Link>
                    </Li>

                    <Li isActive={pathname.includes("series")}>
                        <Link to="/series ">Séries</Link>
                    </Li>
                </Menu>

            </Container >
        </>
    )
}

export default Header
