import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="header__container container">
					<Link className="header__logo logo" to="/">
						WBL
					</Link>
					<div className="header__links">
						<Link className="header__link header__link--1" to="/model1">
							Model 1
						</Link>
						<Link className="header__link header__link--2" to="/model2">
							Model 2
						</Link>
						<Link className="header__link header__link--3" to="/model3">
							Model 3
						</Link>
					</div>
				</div>
				<hr className="header_link header__hr" />
			</header>
		</>
	);
};

export default Header;
