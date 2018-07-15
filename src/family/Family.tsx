import * as React from 'react';
import Member from "./Member";

export enum Gender {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
}

export interface IFamilyMember {
	age: number;
	gender: Gender;
	name: string;
}

export interface IFamily {
	father: IFamily;
	son: IFamilyMember;
}

const Family: React.SFC<IFamilyMember> = (props) => (
	<div>
		<Member {...props}/>
	</div>
);


export default Family;