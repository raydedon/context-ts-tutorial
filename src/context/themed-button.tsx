import * as React from 'react';
import {ThemeContext} from "./theme-context";

interface ITheme {
	background: any;
}

const ThemedButton: React.SFC<{}> = (props) => (
	<ThemeContext.Consumer>
		{(theme: ITheme) => (
			<button {...props} style={{backgroundColor: theme.background}}/>
		)}
	</ThemeContext.Consumer>
);

export default ThemedButton;