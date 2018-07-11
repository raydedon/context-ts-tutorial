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

export const ThemeContext = React.createContext(
	themes.dark // default value
);
