import Description from '@/components/description/description';
import './page.scss';
import Product from '@/components/product/container/product';

export default function Home() {
	return (
		<main >
			<Description/>
			<Product/>
		</main>
	);
}
