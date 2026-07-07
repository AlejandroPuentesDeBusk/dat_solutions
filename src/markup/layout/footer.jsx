import React from 'react';

const Footer = () => {
	return (
		<footer className="ds-footer">
			<div className="ds-footer-grid">
				<div>
					<a className="ds-logo ds-logo-footer" href="#inicio" aria-label="Dat Solutions inicio">
						<span className="ds-logo-mark">DS</span>
						<span>
							<strong>Dat Solutions</strong>
							<small>Industrial Assembly</small>
						</span>
					</a>
					<p>
						Ensamblaje, pruebas y soporte de maquinaria industrial para lineas que
						no pueden detenerse.
					</p>
				</div>
				<div>
					<h3>Contacto</h3>
					<ul>
						<li><a href="mailto:contacto@dat-solutions.mx">contacto@dat-solutions.mx</a></li>
						<li><a href="tel:+528181420900">+52 81 8142 0900</a></li>
						<li>Parque Industrial Apodaca, N.L.</li>
					</ul>
				</div>
				<div>
					<h3>Servicios</h3>
					<ul>
						<li>Ensamblaje mecanico</li>
						<li>Integracion electrica</li>
						<li>Calibracion y QA</li>
					</ul>
				</div>
			</div>
			<div className="ds-footer-bottom">
				<span>© 2026 Dat Solutions. Empresa ficticia para proyecto academico.</span>
				<a href="#contacto">Solicitar cotizacion</a>
			</div>
		</footer>
	);
};

export default Footer;
