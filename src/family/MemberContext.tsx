import * as React from "react";
import {Gender, IFamilyMember} from "./definitions";

export let MemberContext: React.Context<IFamilyMember> = React.createContext({
	age: 32,
	gender: Gender.MALE,
	growOlder: (step: number) => {return},
	name: 'Animesh Ray',
});
