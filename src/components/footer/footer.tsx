'use client'
import { Amex, ApplePay, GPAY, Instragram, Linkedin, MasterCard, Pay, Paypal, USDICon } from '@/shared/icons/icon';
import ReactSelect from '@/shared/components/reactSelect';
import { footerReactSelectType, productReactSelectType, reactSelectStyles } from '@/shared/components/reactSelectStyles';
import { FOOTER_METTA_LIST, FOOTER_QUICK_LIST } from '@/shared/constants/constants';
import './footer.scss'

const Footer: React.FC = () => {

	const footer_social=[
		{label:'Follow US',value:'follow-us'},
		{
		label:'Instagram',
		value:<Instragram/>
	},
	{
		label:'Linkedin',
		value:<Linkedin/>
	}
	]
	return <div className='footer-wrapper bg--black'>

		<div className='footer-description width--full flex'>
			<div className='footer width--70'>
				<h1 className='font-size--xxl line-height--24 text--white font--bold mb--24'>Be the first to know</h1>

				<p className='font-size-browser--default text--white'>Sign up for updates from mettā muse.</p>
				<p className='details hide font-size--sm text--white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>


				<div className='input-wrapper'>
					<input className='input width--full' placeholder='Enter your e-mail...' name='email' type='email'/>
					<button className='btn width--full bg--black text--white text--uppercase'>Subscribe</button>
				</div>
			</div>

			<hr className='horizontal-line hide mt--16 mb--16'/>
			<div className='contact-info width--30'>
				<h1 className='font-size--xxl line-height--24 text--white mb--16'>CONTACT US</h1>
				<p className='text--white font-size-browser--default mb--16'>+44 221 133 5360</p>
				<p className='text--white font-size-browser--default mb--16'>customercare@mettamuse.com</p>
				<hr className='horizontal-line hide mt--16 mb--16'/>
				<p className='font-size--xxl line-height--24 text--white mb--16'>Currency</p>

				<div className='flex align-items--center mb--16'><USDICon className='mr--16'/> <span className='text--white'>USD</span></div>
				<p className='currency-text text--white font-size--xxs'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
			</div>
		</div>

		<hr className='horizontal-line mt--16'/>
		<div className='social-wrapper mt--50 flex width--full'>
			<div className='metta-description-wrapper width--33'>
				<h1 className='font-size--xxl line-height--24 text--white mb--20'>mettā muse</h1>
				<p className='font-size--lg text--white mb--16'>About Us</p>
				<p className='font-size--lg text--white mb--16'>Stories</p>
				<p className='font-size--lg text--white mb--16'>Artisans</p>
				<p className='font-size--lg text--white mb--16'>Boutiques</p>
				<p className='font-size--lg text--white mb--16'>Contact Us</p>
				<p className='font-size--lg text--white mb--16'>EU Compliances Docs</p>
			</div>

			<div className='footer-responsive hide width--full'>
			<div className='width--full'>
			<ReactSelect
			defaultValue={[FOOTER_METTA_LIST[0]]}
      styles={{...reactSelectStyles,...footerReactSelectType}}
      options={FOOTER_METTA_LIST}
	onChange={()=>{console.log('in')}}/>
			</div>

			<hr className='horizontal-line mt--15 mb--16'/>
			<div className='width--full'>
			<ReactSelect
			defaultValue={[FOOTER_QUICK_LIST[0]]}
      styles={{...reactSelectStyles,...footerReactSelectType}}
      options={FOOTER_QUICK_LIST}
	onChange={()=>{console.log('in')}}/>
			</div>
			<hr className='horizontal-line mt--15 mb--16'/>
			<div className='width--full'>
			<ReactSelect
			defaultValue={[footer_social[0]]}
      styles={{...reactSelectStyles,...footerReactSelectType}}
      options={footer_social}
	onChange={()=>{console.log('in')}}/>
			</div>
			</div>


			<div className='quick-wrapper width--33'>
				<h1 className='font-size--xxl line-height--24 text--white mb--20'>Quick Links</h1>
				<p className='font-size--lg text--white mb--16'>Orders & Shipping</p>
				<p className='font-size--lg text--white mb--16'>Join/Login as a Seller</p>
				<p className='font-size--lg text--white mb--16'>Payment & Pricing</p>
				<p className='font-size--lg text--white mb--16'>Return & Refunds</p>
				<p className='font-size--lg text--white mb--16'>FAQs</p>
				<p className='font-size--lg text--white mb--16'>Privacy Policy</p>
				<p className='font-size--lg text--white mb--16'>Terms & Conditions</p>
			</div>

			<div className=' social width--33'>
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
		<hr className='hide horizontal-line mt--15 mb--16'/>
			<h1 className='res-text hide text--white font-size--xxl line-height--24'>mettā muse Accepts</h1>
			<div className='responsive-icon-wrapper hide flex icon-wrapper'>
					<GPAY/>
					<MasterCard/>
					<Paypal/>
					<Amex/>
					<ApplePay/>
					<Pay/>
				</div>

		<h1 className='text--white text--center font-size--sm mt--30'>Copyright © 2023 mettamuse. All rights reserved.</h1>

	</div>;
};

export default Footer;
