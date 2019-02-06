import { Link } from 'preact-router/match';
import { h } from 'preact';
const style = require('./index.module.scss');

const Header = () => (
	<header className={style.Header}>
		<h1>Preact App!!!</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav>
	</header>
);

export default Header;
