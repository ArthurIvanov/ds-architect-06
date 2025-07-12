import { InputText } from "./input-text";

export default {
	title: "Компоненты/Input",
	component: InputText,
	parameters: {
		layout: "centered",
		status: {
			type: "stable", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
		},
	},
	tags: ["autodocs"],
};

export const InputBase = {
	args: {
		label: "Thins is a label",
		placeholder: "Enter your name",
		iconBefore: "mail",
	},
};

export const InputDisabled = {
	args: {
		label: "Thins is a label",
		placeholder: "Enter your name",
		iconBefore: "mail",
		disabled: true,
	},
};
