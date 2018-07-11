import * as React from 'react';
import ThemedButton from './themed-button';

export interface IToolbarProps {
	changeTheme: () => void;
}

const Toolbar: React.SFC<IToolbarProps> = (props) => (<ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>);

export default Toolbar;