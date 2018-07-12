import * as React from 'react';

export const themes = {
	dark: {
		background: '#222222',
		foreground: '#ffffff',
	},
	light: {
		background: '#eeeeee',
		foreground: '#000000',
	},
};

export interface ITheme {
	background: string;
	foreground: string;
};
export const ThemeContext: React.Context<ITheme> = React.createContext(
	themes.dark // default value
);
