import styled from "styled-components";
import { Icon, iconsType } from "../icon";

interface IButtonProps {
	// DONE
	appearance?: "primary" | "secondary" | "onDark" | "onLight" | "inverted";
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

const StyledButton = styled.button<IButtonProps>`
	border: 1px solid transparent;
	display: inline-flex;
	flex-direction: row;
	gap: ${(props) => props.theme.spacing.inner.close};
	justify-content: center;
	align-items: center;
	padding: unset;
	transition: ${(props) => props.theme.animation.base};
	&:focus {
		box-shadow: ${(props) => props.theme.focus};
	}

	// APPERANCE PROP
	${(props) =>
		props.appearance === "primary" &&
		`
        &:enabled {
        background-color: ${props.theme.colors.bg.lead.loud.enabled};
        color: ${props.theme.colors.text.inverted};
        }
        &:hover {
        background-color: ${props.theme.colors.bg.lead.loud.hover};
        }
        &:active {
        background-color: ${props.theme.colors.bg.lead.loud.active};
        }
        `}

	${(props) =>
		props.appearance === "secondary" &&
		`
            &:enabled {
            background-color: ${props.theme.colors.bg.neutral.section.calm};
            color: ${props.theme.colors.link.loud.enabled};
            border-color: ${props.theme.colors.border.lead.loud.enabled};
            }

            &:hover {
            color: ${props.theme.colors.link.loud.hover};
             border-color: ${props.theme.colors.border.lead.loud.hover};
            }

            &:active {
            color: ${props.theme.colors.link.loud.active};
             border-color: ${props.theme.colors.border.lead.loud.active};
            }
            `} 

    ${(props) =>
		props.disabled &&
		`    
    &:disabled {
    background-color: ${props.theme.colors.bg.disabled};
    color: ${props.theme.colors.text.disabled};
    border: ${props.theme.colors.border.disabled};
    cursor: not-allowed;
	}`}
            
            
    // SIZE
    ${(props) =>
		props.size === "small" &&
		`
        height: ${props.theme.spacing.height.small};
        padding: 0 ${props.theme.spacing.padding.default};
        font-size: ${props.theme.typography.fontSize.component.small};
        line-height: ${props.theme.typography.lineHeight.component.small};
        font-weight: ${props.theme.typography.fontWeight.medium};
        `}

        ${(props) =>
		props.size === "base" &&
		`
            height: ${props.theme.spacing.height.base};
            // Доделать операцию по вычитанию единицы
            padding:  0 ${props.theme.spacing.padding.relaxed};
            font-size: ${props.theme.typography.fontSize.component.base};
            line-height: ${props.theme.typography.lineHeight.component.base};
            font-weight: ${props.theme.typography.fontWeight.medium};
            `}
`;

export const Button: React.FC<IButtonProps> = ({
	appearance = "primary",
	size = "small",
	disabled,
	loading,
	iconAfter,
	iconBefore,
	text = "Hello",
}) => {
	return (
		<StyledButton
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
		</StyledButton>
	);
};
