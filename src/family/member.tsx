import * as React from 'react';
import {IFamilyMember} from "./Family";

const Member: React.SFC<IFamilyMember> = ({age, gender, name}) => {
	return (
		<React.Fragment>
			<div>{age}</div>
			<div>{gender}</div>
			<div>{name}</div>
		</React.Fragment>
	);
};

export default Member;