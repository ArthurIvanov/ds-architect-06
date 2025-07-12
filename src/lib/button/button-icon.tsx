import styled from "styled-components";
import { Icon, iconsType } from "../icon";

interface IButtonIconProps {
	// DONE
	appearance?: "primary" | "secondary" | "inverted";
	// DONE
	size?: "base" | "small";
	// DONE
	disabled?: boolean;

	// OFFLINE
	loading?: boolean;

	// DONE
	icon?: iconsType;
}

const StyledButtonIcon = styled.button<IButtonIconProps>`
	border: 1px solid transparent;
	display: inline-flex;
	flex-direction: row;
	gap: ${(props) => props.theme.spacing.inner.close};
	justify-content: center;
	align-items: center;
	padding: unset;
	cursor: pointer;
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
        width: ${props.theme.spacing.height.small};
        `}

        ${(props) =>
		props.size === "base" &&
		`
            height: ${props.theme.spacing.height.base};
            // Доделать операцию по вычитанию единицы
            width: ${props.theme.spacing.height.base}; 
            `}
`;

export const ButtonIcon: React.FC<IButtonIconProps> = ({
	appearance = "primary",
	size = "small",
	disabled,
	loading,
	icon,
}) => {
	return (
		<StyledButtonIcon
			appearance={appearance}
			size={size}
			disabled={disabled}
			loading={loading}
			icon={icon}
		>
			{icon && <Icon size={size === "base" ? 20 : 16} iconName={icon} />}
		</StyledButtonIcon>
	);
};
