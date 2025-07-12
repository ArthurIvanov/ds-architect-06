import styled from "styled-components";
import { Icon, iconsType } from "../icon";
import { Spinner } from "../spinner";

interface IButtonProps {
	/**
	 * Визуальный вес компонента
	 */
	appearance?: "primary" | "secondary" | "onDark" | "onLight" | "inverted";

	/**
	 * Размер компонента
	 */
	size?: "base" | "small";

	/**
	 * Делает кнопку недоступной для взаимодействия
	 */
	disabled?: boolean;

	// OFFLINE
	/**
	 * Отображает процесс выполнения вызванный нажатием
	 */
	loading?: boolean;

	/**
	 * Отображает иконку до текста
	 */
	iconBefore?: iconsType;

	/**
	 * Отображает иконку после текста
	 */
	iconAfter?: iconsType;

	/**
	 * Наполнение текстом
	 */
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
	cursor: pointer;
	transition: ${(props) => props.theme.animation.base};
	&:focus {
		box-shadow: ${(props) => props.theme.focus};
	}
	.btn-loading {
		display: none;
	}

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
            
    ${(props) =>
		props.loading &&
		`
        color: transparent;
        position: relative;
        .spinner {
        display inline-block;
        position: absolute;
        top: 25%;
        left: 50%;
        }
        `}
            
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

/**
 * Используется как первичный призыв к действию, а также для перехода на другие разделы приложеня
 */
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
			{loading ? <Spinner size="base" /> : null}
			<span className={`btn-body ${loading ? "btn-loading" : undefined}`}>
				{iconBefore ? (
					<Icon
						iconName={iconBefore}
						size={size === "base" ? 20 : 16}
					/>
				) : null}
				{text}
				{iconAfter ? (
					<Icon
						iconName={iconBefore}
						size={size === "base" ? 20 : 16}
					/>
				) : null}
			</span>
		</StyledButton>
	);
};
