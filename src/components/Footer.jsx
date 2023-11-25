import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<div className="footer__info">
					<Link className="footer__logo logo" to="/">
						Logo
					</Link>
					<p className="footer__rights">2023 © All rights are reserved</p>
				</div>
				<div className="footer__links">
					<a className="footer__link footer__link-ig" href="#">
						Instagram
					</a>
					<a className="footer__link footer__link-fb" href="#">
						Facebook
					</a>
					<a className="footer__link footer__link-li" href="#">
						LinkedIn
					</a>
					<a className="footer__link footer__link-tw" href="#">
						Twitter
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
