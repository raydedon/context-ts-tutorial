import * as React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import Toolbar from "./toolbar";

interface IAppProps {}
interface IAppState {
	theme: {}
}

// An intermediate component that uses the ThemedButton
export default class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			theme: themes.light,
		};
		
	}
	
	public toggleTheme() {
		this.setState(state => ({
			theme:
				state.theme === themes.dark
					? themes.light
					: themes.dark,
		}));
	}

	public render() {
		// The ThemedButton button inside the ThemeProvider
		// uses the theme from state while the one outside uses
		// the default dark theme
		return (
			<div>
				<ThemeContext.Provider value={this.state.theme}>
					<Toolbar changeTheme={this.toggleTheme} />
				</ThemeContext.Provider>
				<Section>
					<ThemedButton />
				</Section>
			</div>
		);
	}
}
