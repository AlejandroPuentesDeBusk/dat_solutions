import React, { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	const navItems = [
		{ label: 'Capacidades', href: '#capacidades' },
		{ label: 'Proceso', href: '#proceso' },
		{ label: 'Calidad', href: '#calidad' },
		{ label: 'Contacto', href: '#contacto' },
	];

	return (
		<header className="ds-header">
			<a className="ds-logo" href="#inicio" onClick={closeMenu} aria-label="Dat Solutions inicio">
				<span className="ds-logo-mark">DS</span>
				<span>
					<strong>Dat Solutions</strong>
					<small>Industrial Assembly</small>
				</span>
			</a>

			<button
				className={`ds-menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
				type="button"
				onClick={() => setIsMenuOpen((open) => !open)}
				aria-expanded={isMenuOpen}
				aria-controls="main-navigation"
				aria-label="Abrir menu"
			>
				<span></span>
				<span></span>
				<span></span>
			</button>

			<nav id="main-navigation" className={`ds-nav ${isMenuOpen ? 'is-open' : ''}`}>
				{navItems.map((item) => (
					<a key={item.href} href={item.href} onClick={closeMenu}>
						{item.label}
					</a>
				))}
				<a className="ds-nav-cta" href="tel:+528181420900" onClick={closeMenu}>
					+52 81 8142 0900
				</a>
			</nav>
		</header>
	);
};

export default Header;
