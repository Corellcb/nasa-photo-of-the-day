import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import styled from "styled-components";

const Span = styled.span`
    color: white;
`

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="nasa.gov"><Span>NASA</Span></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="index.html"><Span>Picture of the Day</Span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/Corellcb/nasa-photo-of-the-day/pulls"><Span>GitHub</Span></NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText><Span>Explore for answers that power our future.</Span></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;