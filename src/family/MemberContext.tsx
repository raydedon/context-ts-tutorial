import * as React from "react";
import {Gender, IFamilyMember} from "./Family";

export let {Provider, Consumer}: React.Context<IFamilyMember> = React.createContext({
	age: 32,
	gender: Gender.MALE,
	name: 'Animesh Ray',
});
