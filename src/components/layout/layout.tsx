import { PropsWithChildren } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout: React.FC<PropsWithChildren> = (props) => {
	return (
		<div className=''>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
