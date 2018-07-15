import * as React from 'react';
import {default as Family, Gender, IFamilyMember} from "./Family";

export default class ConstextApp extends React.Component<{}, IFamilyMember> {
	constructor(props: {}) {
		super(props);
		
		this.state = {
			age: 32,
			gender: Gender.MALE,
			name: 'Animesh Ray',
		}
	}
	
	public render() {
		return (
			<Family {...this.state}/>
		);
	}
}
