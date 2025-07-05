import styled from "styled-components";
import { Icon, iconsType } from "../icon";

interface IButtonLinkProps {
	// DONE
	appearance?: "primary" | "inverted";
	// DONE
	size?: "base" | "small";
	// DONE
	disabled?: boolean;

	// OFFLINE
	loading?: boolean;

	// DONE
	iconBefore?: iconsType;

	// DONE
	iconAfter?: iconsType;
	// DONE
	text?: string;
}

const StyledButtonLink = styled.button<IButtonLinkProps>`
	border: none;
	background: none;
	display: inline-flex;
	flex-direction: row;
	gap: ${(props) => props.theme.spacing.inner.close};
	justify-content: center;
	align-items: center;
	padding: 0;
	transition: ${(props) => props.theme.animation.base};
	&:focus {
		box-shadow: ${(props) => props.theme.focus};
	}

	// APPERANCE PROP
	${(props) =>
		props.appearance === "primary" &&
		`
        &:enabled {
        color: ${props.theme.colors.link.loud.enabled};
        }

        &:hover {
        color: ${props.theme.colors.link.loud.hover};
        }

        &:active {
        color: ${props.theme.colors.link.loud.active};
        }
        `}

	${(props) =>
		props.appearance === "inverted" &&
		`
            &:enabled {
            color: ${props.theme.colors.link.inverted.enabled};
            
            }

            &:hover {
            color: ${props.theme.colors.link.inverted.hover};
            
            }

            &:active {
            color: ${props.theme.colors.link.inverted.active};
            }
            `} 

    ${(props) =>
		props.disabled &&
		`    
            &:disabled {
            color: ${props.theme.colors.text.disabled};
            cursor: not-allowed;
	}`}
            
            
    // SIZE
    ${(props) =>
		props.size === "small" &&
		`
        font-size: ${props.theme.typography.fontSize.component.small};
        line-height: ${props.theme.typography.lineHeight.component.small};
        font-weight: ${props.theme.typography.fontWeight.medium};
        `}

        ${(props) =>
		props.size === "base" &&
		`
            font-size: ${props.theme.typography.fontSize.component.base};
            line-height: ${props.theme.typography.lineHeight.component.base};
            font-weight: ${props.theme.typography.fontWeight.medium};
            `}
`;

export const ButtonLink: React.FC<IButtonLinkProps> = ({
	appearance = "primary",
	size = "small",
	disabled,
	loading,
	iconAfter,
	iconBefore,
	text = "Hello",
}) => {
	return (
		<StyledButtonLink
			appearance={appearance}
			size={size}
			disabled={disabled}
			loading={loading}
			iconAfter={iconAfter}
			iconBefore={iconBefore}
		>
			{iconBefore && (
				<Icon size={size === "base" ? 20 : 16} iconName={iconBefore} />
			)}
			{text}
			{iconAfter && (
				<Icon size={size === "base" ? 20 : 16} iconName={iconAfter} />
			)}
		</StyledButtonLink>
	);
};
