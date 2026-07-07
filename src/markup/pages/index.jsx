import React from 'react';
import heroImage from '../../images/dat-solutions/industrial-assembly-hero.png';

const services = [
	{
		title: 'Celdas de ensamble',
		text: 'Subensambles mecanicos, estaciones de fijacion y bancos de prueba listos para integrarse a tu linea.',
		icon: 'las la-industry',
	},
	{
		title: 'Integracion electrica',
		text: 'Cableado, tableros, sensores y verificacion funcional con documentacion tecnica entregable.',
		icon: 'las la-bolt',
	},
	{
		title: 'Puesta en marcha',
		text: 'Arranque en planta, ajustes finales, capacitacion operativa y soporte durante estabilizacion.',
		icon: 'las la-tools',
	},
];

const process = [
	['01', 'Levantamiento', 'Revisamos requerimientos, restricciones de planta y metas de produccion.'],
	['02', 'Ensamblaje', 'Fabricamos y armamos modulos con trazabilidad por componente critico.'],
	['03', 'Validacion', 'Probamos seguridad, repetibilidad y ciclos antes de liberar el equipo.'],
	['04', 'Entrega', 'Instalamos, documentamos y acompanamos el arranque operativo.'],
];

function Index() {
	return (
		<main className="dat-page">
			<section className="ds-hero" id="inicio">
				<img className="ds-hero-image" src={heroImage} alt="Tecnicos ensamblando maquinaria industrial en una planta avanzada" />
				<div className="ds-hero-overlay"></div>
				<div className="ds-hero-content">
					<p className="ds-kicker">Maquinaria industrial ensamblada para producir</p>
					<h1>Dat Solutions convierte especificaciones tecnicas en equipos listos para operar.</h1>
					<p className="ds-hero-copy">
						Ensamblamos, calibramos y ponemos en marcha maquinas industriales para
						fabricantes que necesitan precision, continuidad y soporte cercano.
					</p>
					<div className="ds-hero-actions">
						<a className="ds-button ds-button-primary" href="#contacto">Cotizar proyecto</a>
						<a className="ds-button ds-button-secondary" href="#capacidades">Ver capacidades</a>
					</div>
				</div>
				<div className="ds-hero-strip" aria-label="Indicadores de operacion">
					<span><strong>24/7</strong> soporte en arranque</span>
					<span><strong>QA</strong> pruebas documentadas</span>
					<span><strong>ISO</strong> flujo trazable</span>
				</div>
			</section>

			<section className="ds-section ds-intro" id="capacidades">
				<div className="ds-section-heading">
					<p className="ds-kicker">Capacidades principales</p>
					<h2>Un socio tecnico para construir maquinaria sin perder control del proyecto.</h2>
				</div>
				<div className="ds-services">
					{services.map((service) => (
						<article className="ds-service" key={service.title}>
							<i className={service.icon} aria-hidden="true"></i>
							<h3>{service.title}</h3>
							<p>{service.text}</p>
						</article>
					))}
				</div>
			</section>

			<section className="ds-section ds-split">
				<div className="ds-panel ds-panel-dark">
					<p className="ds-kicker">Giro del cliente</p>
					<h2>Ensamblaje de maquinas industriales a la medida.</h2>
					<p>
						Dat Solutions atiende proyectos de automatizacion, empaque, manejo de
						materiales y estaciones de inspeccion. El foco esta en entregar equipos
						que lleguen a planta con pruebas, planos y criterios de aceptacion claros.
					</p>
				</div>
				<div className="ds-panel ds-panel-light" id="calidad">
					<h3>Que recibe el cliente</h3>
					<ul className="ds-check-list">
						<li>Lista de materiales y componentes criticos.</li>
						<li>Pruebas FAT con evidencia fotografica.</li>
						<li>Manual rapido de operacion y mantenimiento.</li>
						<li>Plan de soporte para el primer mes de produccion.</li>
					</ul>
				</div>
			</section>

			<section className="ds-section ds-process" id="proceso">
				<div className="ds-section-heading">
					<p className="ds-kicker">Metodo de trabajo</p>
					<h2>De cotizacion a puesta en marcha con puntos de control visibles.</h2>
				</div>
				<div className="ds-process-grid">
					{process.map(([number, title, text]) => (
						<article className="ds-process-step" key={number}>
							<span>{number}</span>
							<h3>{title}</h3>
							<p>{text}</p>
						</article>
					))}
				</div>
			</section>

			<section className="ds-quote" id="contacto">
				<div>
					<p className="ds-kicker">Contacto temporal</p>
					<h2>Solicita una propuesta para tu siguiente maquina industrial.</h2>
					<p>
						Comparte tipo de maquina, capacidad requerida, espacio disponible y fecha
						objetivo. El equipo prepara una cotizacion inicial con alcance tecnico.
					</p>
				</div>
				<form className="ds-contact-form">
					<label>
						Nombre
						<input type="text" name="name" placeholder="Tu nombre" />
					</label>
					<label>
						Correo
						<input type="email" name="email" placeholder="correo@empresa.com" />
					</label>
					<label>
						Proyecto
						<textarea name="project" rows="4" placeholder="Describe la maquina o linea que necesitas ensamblar"></textarea>
					</label>
					<a className="ds-button ds-button-primary" href="mailto:contacto@dat-solutions.mx?subject=Cotizacion%20Dat%20Solutions">
						Enviar solicitud
					</a>
				</form>
			</section>
		</main>
	);
}

export default Index;
