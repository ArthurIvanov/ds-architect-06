import { FC } from "react";
import styled from "styled-components";

type TSIze = "base" | "small";
type TAppearance =
	| "inverted"
	| "secondary"
	| "lead"
	| "leadOnDark"
	| "leadOnLight"
	| "leadInverted";

interface ISpinnerProps {
	size: TSIze;
	appearance?: TAppearance;
	className?: string;
}

const StyledSpinner = styled.div<ISpinnerProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	& > div {
		display: block;
		box-sizing: border-box;
		width: 80%;
		height: 80%;
		border-radius: 50%;
		border: 8px solid;

		${(props) =>
			props.size === "small" &&
			`
        border-width: 1px;
        width: 16px;
	    height: 16px;
        `}

		${(props) =>
			props.size === "base" &&
			`
        border-width: 2px;
        width: 20px;
	    height: 20px;
        `}

	border-color: black transparent;
	animation: spinner 1.2s linear infinite;

	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const Spinner: FC<ISpinnerProps> = ({
	size = "base",
	appearance = "secondary",
	className,
}) => (
	<StyledSpinner appearance={appearance} size={size} className={className}>
		<div />
	</StyledSpinner>
);
