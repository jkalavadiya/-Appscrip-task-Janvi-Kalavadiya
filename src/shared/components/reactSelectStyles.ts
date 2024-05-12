import { CSSProperties } from 'react';

export const reactSelectStyles = {
	option: (base: CSSProperties, state: any) => ({
		...base,
		borderBottom: '1px solid #e7e7e7',
		color: '#444a51',
		padding: 8,
		backgroundColor: state.isSelected ? '#d5d5d5' : state.isFocused ? '#e7e7e7' : '',
		':active': {
			backgroundColor: '#e7e7e7'
		},
		':hover': {
			backgroundColor: '#e7e7e7'
		},
		':focus': {
			backgroundColor: '#e7e7e7',
			outline: 0
		}
	}),
	menu: (base: CSSProperties) => ({
		...base,
		zIndex: 3,
		marginTop: 10,
		width: '100%',
		position: 'absolute'
	}),
	menuList: (base: CSSProperties) => ({
		...base,
		padding: 0,
		maxHeight: '230px',
		backgroundColor: '#ffffff'
	}),
	clearIndicator: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer'
	}),
	dropdownIndicator: (base: CSSProperties, state: any) => ({
		...base,
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none'
	}),

	control: () => ({
		// none of react-selects styles are passed to <View />
		display: 'flex',
		width: '100%',
		minHeight: '50px  ',
		// border: '1px solid #001D3733',
		padding: '0px',
		color: '#444a51',
		borderRadius: '8px',
		fontSize: '15px',
		// background: '#ffffff',
		cursor: 'pointer',
		// boxShadow: '0px 0px 5px 0px #0000001A'
	}),
	container: () => ({
		width: '100%',
		position: 'relative'
	}),

	singleValue: (base: CSSProperties, state: any) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = 'opacity 300ms';

		return { ...base, opacity: opacity, transition: transition };
	}
};

export const productReactSelectType = {
	option: (base: CSSProperties, state: any) => ({
		...base,
		// borderBottom: '1px solid #e7e7e7',
		color: '#444a51',
		textTransform:'uppercase',
		padding: 8,
		backgroundColor:'transparent',
		fontWeight:state.isSelected ? 800 : 400,
		// backgroundColor: state.isSelected ? '#d5d5d5' : state.isFocused ? '#e7e7e7' : '',
		':active': {
			// backgroundColor: '#e7e7e7'
		},
		':hover': {
			backgroundColor: '#e7e7e7'
		},
		':focus': {
			backgroundColor: '#e7e7e7',
			outline: 0
		}
	}),
	menu: (base: CSSProperties) => ({
		...base,
		zIndex: 3,
		marginTop: 10,
		width: '100%',
		position: 'absolute'
	}),
	singleValue: (base: CSSProperties, state: any) => ({
		fontWeight:800,
		textTransform:'uppercase',
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		height:'100%'
	}),
	control: (base: CSSProperties) => ({
		// none of react-selects styles are passed to <View />
		display: 'flex',
		width: '100%',
		// minHeight: '50px  ',
		// border: '1px solid #001D3733',
		padding: '0px',
		color: '#444a51',
		borderRadius: '8px',
		fontSize: '15px',
		// background: '#ffffff',
		cursor: 'pointer',
		// boxShadow: '0px 0px 5px 0px #0000001A'
	}),
	DummyInput:()=>({
		display:'none'
	}),
	container: () => ({
		width:'33%',
		position: 'relative'
	}),
	valueContainer:()=>({
		display:'unset',
		padding:'0px 10px'
	})

};

export const footerReactSelectType = {
	option: (base: CSSProperties, state: any) => ({
		...base,
		// borderBottom: '1px solid #e7e7e7',
		color: '#444a51',
		textTransform:'uppercase',
		padding: 8,
		backgroundColor:'transparent',
		fontWeight:state.isSelected ? 800 : 400,
		// backgroundColor: state.isSelected ? '#d5d5d5' : state.isFocused ? '#e7e7e7' : '',
		':active': {
			// backgroundColor: '#e7e7e7'
		},
		':hover': {
			backgroundColor: '#e7e7e7'
		},
		':focus': {
			backgroundColor: '#e7e7e7',
			outline: 0
		}
	}),
	menu: (base: CSSProperties) => ({
		...base,
		zIndex: 3,
		marginTop: 10,
		width: '100%',
		position: 'absolute'
	}),
	singleValue: (base: CSSProperties, state: any) => ({
		fontWeight:800,
		textTransform:'uppercase',
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		height:'100%',
		color:'#fff'
	}),
	control: (base: CSSProperties) => ({
		// none of react-selects styles are passed to <View />
		display: 'flex',
		width: '100%',
		// minHeight: '50px  ',
		// border: '1px solid #001D3733',
		padding: '0px',
		color: '#444a51',
		borderRadius: '8px',
		fontSize: '15px',
		// background: '#ffffff',
		cursor: 'pointer',
		// boxShadow: '0px 0px 5px 0px #0000001A'
	}),
	DummyInput:()=>({
		display:'none'
	}),
	container: () => ({
		width:'33%',
		position: 'relative'
	}),
	valueContainer:()=>({
		display:'unset',
		padding:'0px 10px'
	})

};
