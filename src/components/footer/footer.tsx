import { Amex, ApplePay, GPAY, Instragram, Linkedin, MasterCard, Pay, Paypal, USDICon } from '@/shared/icons/icon';
import './footer.scss'

const Footer: React.FC = () => {
	return <div className='footer-wrapper bg--black'>

		<div className='width--full flex'>
			<div className='width--70'>
				<h1 className='font-size--xxl line-height--24 text--white font--bold mb--24'>Be the first to know</h1>

				<p className='font-size-browser--default text--white'>Sign up for updates from mettā muse.</p>

				<div className='input-wrapper'>
					<input className='input width--full' placeholder='Enter your e-mail...' name='email' type='email'/>
					<button className='btn width--full bg--black text--white text--uppercase'>Subscribe</button>
				</div>
			</div>
			<div className='width--30'>
				<h1 className='font-size--xxl line-height--24 text--white mb--16'>CONTACT US</h1>
				<p className='text--white font-size-browser--default mb--16'>+44 221 133 5360</p>
				<p className='text--white font-size-browser--default mb--16'>customercare@mettamuse.com</p>
				<p className='font-size--xxl line-height--24 text--white mb--16'>Currency</p>

				<div className='flex align-items--center mb--16'><USDICon className='mr--16'/> <span className='text--white'>USD</span></div>
				<p className='text--white font-size--xxs'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
			</div>
		</div>

		<hr className='horizontal-line mt--20'/>
		<div className='mt--50 flex width--full'>
			<div className='width--33'>
				<h1 className='font-size--xxl line-height--24 text--white mb--20'>mettā muse</h1>
				<p className='font-size--lg text--white mb--16'>About Us</p>
				<p className='font-size--lg text--white mb--16'>Stories</p>
				<p className='font-size--lg text--white mb--16'>Artisans</p>
				<p className='font-size--lg text--white mb--16'>Boutiques</p>
				<p className='font-size--lg text--white mb--16'>Contact Us</p>
				<p className='font-size--lg text--white mb--16'>EU Compliances Docs</p>
			</div>
			<div className='width--33'>
				<h1 className='font-size--xxl line-height--24 text--white mb--20'>Quick Links</h1>
				<p className='font-size--lg text--white mb--16'>Orders & Shipping</p>
				<p className='font-size--lg text--white mb--16'>Join/Login as a Seller</p>
				<p className='font-size--lg text--white mb--16'>Payment & Pricing</p>
				<p className='font-size--lg text--white mb--16'>Return & Refunds</p>
				<p className='font-size--lg text--white mb--16'>FAQs</p>
				<p className='font-size--lg text--white mb--16'>Privacy Policy</p>
				<p className='font-size--lg text--white mb--16'>Terms & Conditions</p>
			</div>

			<div className='width--33'>
				<h1 className='font-size--xxl line-height--24 text--white mb--24'>Follow Us</h1>
				<div>
					<Instragram className='mr--12'/>
					<Linkedin/>
				</div>
				<h1 className='text--white font-size--xxl line-height--24'>mettā muse Accepts</h1>

				<div className='flex icon-wrapper'>
					<GPAY/>
					<MasterCard/>
					<Paypal/>
					<Amex/>
					<ApplePay/>
					<Pay/>
				</div>
			</div>
		</div>

		<h1 className='text--white text--center font-size--sm mt--30'>Copyright © 2023 mettamuse. All rights reserved.</h1>

	</div>;
};

export default Footer;
