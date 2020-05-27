import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
	flex-direction: column;
	justify-content: top;
	background: #454545;
	flex: 0 0 auto;
	align-items: center;
	padding: 1.5% 0;
`;

const Footer = props => <FooterWrapper>About us</FooterWrapper>


export default Footer;