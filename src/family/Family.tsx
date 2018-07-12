import * as React from 'react';
import Member from "./member";

export interface IFamilyMember {
	age: number;
	gender: 'MALE' | 'FEMALE';
	name: string;
}

export interface IFamily {
	father: IFamily;
	son: IFamilyMember;
}

export default class Family extends React.Component<{}, IFamilyMember> {
	constructor(props: {}) {
		super(props);
		
		this.state = {
			age: 32,
			gender: 'MALE',
			name: 'Animesh',
		}
	}
	
	public render() {
		return (
			<div>
				<Member {...this.state}/>
			</div>
		);
	}
}