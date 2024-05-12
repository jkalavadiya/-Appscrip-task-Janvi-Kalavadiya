'use client'
import React from 'react';
import Select from 'react-select';
import { reactSelectStyles } from './reactSelectStyles';

const ReactSelect: React.FC<any> = (props) => {
	const { styles } = props;

	return <Select {...props} styles={{ ...reactSelectStyles, ...(styles ?? reactSelectStyles) } as any} isSearchable={false} />;
};

export default ReactSelect;
