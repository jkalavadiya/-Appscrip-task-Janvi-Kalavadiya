import Image from 'next/image';
import logo from '../../../public/images/Vector.png'
import { MenuIcon, ProfileIcon, SearchIcon, ShoppingIcon, WishListIcon } from '@/shared/icons/icon';
import { NAVBAR_MENU } from '@/shared/constants/constants';
import './header.scss';



const Header: React.FC = () => {

	 const  ICON_LIST=[
		{
			name:'search',
			svgIcon: <SearchIcon/>
		},
		{
			name:'wish-list',
			svgIcon: <WishListIcon/>
		},
		{
			name:'shopping',
			svgIcon: <ShoppingIcon/>
		},
		{
			name:'profile',
			svgIcon: <ProfileIcon className='profile-icon	'/>
		}
	]
	return <>
			<div className='header-container'>
	<div className='header-wrapper flex justify-content--between align-items--center'>
	<div className='width--33 flex'>
		<MenuIcon className='menu-icon mr--10 hide' />
		<Image src={logo} alt={'vector-img'} className='logo-image'/>
	</div>

	

	<div className='width--33 flex justify-content--center'>
		<h1 className='logo-title font-size--36 font--extra-bold'>LOGO</h1>
	</div>
	<div className='icons-wrapper flex width--33 justify-content--end'>
		{
			ICON_LIST.map(({name,svgIcon})=>{
				return <>
				{svgIcon}
				</>
			})
		}

	</div>

	</div>
	<div className='navbar-wrapper flex justify-content--center '>
		{
			NAVBAR_MENU.map(({name,path},index)=>{
				return <>
				<p key={index}	className={'header-link text--uppercase font--bold font-size--xxl line-height--24 cursor--pointer'}>{name}</p>
				</>
			})
		}
	</div>
	</div>
	</>;
};

export default Header;
