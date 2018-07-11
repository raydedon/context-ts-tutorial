import * as React from 'react';
import {ThemeContext} from "./theme-context";

interface ITheme {
	background: any;
}

export interface IThemedButtonProps {
	onClick: () => void;
}

const ThemedButton: React.SFC<IThemedButtonProps> = (props) => {
	return (
		<ThemeContext.Consumer>
			{(theme: ITheme) => (
				<button {...props} style={{backgroundColor: theme.background}}/>
			)}
		</ThemeContext.Consumer>
	);
};

export default ThemedButton;