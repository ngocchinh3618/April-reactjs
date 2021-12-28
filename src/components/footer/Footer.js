import React from 'react'
import FooterLink from './FooterLink'
import FooterSocialLink from './FooterSocialLink';
import { DATA_FOOTER_SOCIAL_LINK, DATA_NAVIGATION } from "../../data"
import Logo from '../../common/Logo';
import logo from "../../assets/svg/logo.svg";

export default function Footer() {
  const socialLink = DATA_FOOTER_SOCIAL_LINK.map(data => (
    <FooterSocialLink name={data.name} key={data.name} icon={data.icon} />
  ));
  const navigation = DATA_NAVIGATION.map(data => (
    <FooterLink link={data.link} title={data.title} key={data.link} />
  ))
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-inner has-top-divider">
          <Logo logo={logo} />
          <ul className="footer-links list-reset">
            {navigation}
          </ul>
          <ul className="footer-social-links list-reset">
            {socialLink}
          </ul>
          <div className="footer-copyright">© 2018 April, all rights reserved</div>
        </div>
      </div>
    </footer>

  )
}


