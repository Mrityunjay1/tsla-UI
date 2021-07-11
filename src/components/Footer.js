import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterWrap>
            <li>Tesla @ 2021</li>
            <li>Privacy & Legal</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>News</li>

        </FooterWrap>
    )
}


const FooterWrap = styled.div`
list-style: none;
display:flex;
justify-content:center;
padding-bottom: 20px;
li{
    margin-right: 20px;
}

`
