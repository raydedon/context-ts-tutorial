import * as React from 'react';
import {MemberContext} from './MemberContext';

const Member: React.SFC<{}> = (props) => {
	return (
		<MemberContext.Consumer>
			{({age, gender, name, growOlder}) => {
				return (
					<React.Fragment>
						<div>{name}</div>
						<div>{age}</div>
						<div>{gender}</div>
						<button onClick={growOlder.bind(null, 2)}>Grow Older</button>
					</React.Fragment>
				)
			}
			}
		</MemberContext.Consumer>
	);
};

export default Member;