export interface IFamilyAction {
	growOlder: (step: number) => void;
}

export interface IFamilyMemberProperties {
	age: number;
	gender: Gender;
	name: string;
}

export interface IFamilyMember extends IFamilyAction, IFamilyMemberProperties {}

export enum Gender {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
}
