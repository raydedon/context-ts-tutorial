import Family from "./Family";

import {Gender, IFamilyMemberProperties} from "./definitions";
import {MemberContext} from './MemberContext';

import * as React from 'react';

export default class ConstextApp extends React.Component<{}, IFamilyMemberProperties> {
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
			<MemberContext.Provider value={{
				...this.state,
				growOlder: (step) => {this.setState(({age}) => ({age: age+step}))}
			}}>
				<Family />
			</MemberContext.Provider>
		);
	}
}
