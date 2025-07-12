import styled from "styled-components";

interface IBadgeProps {
	/**
	 * Наполнение текстом (обязательное поле)
	 */
	text: string;

	/**
	 * Размер компонента
	 */
	size?: "base" | "small";

	/**
	 * Визуальный вес компонента
	 */
	appearance?: "blue" | "cyan" | "green" | "pink" | "grey";

	/**
	 * Переключает компонент в менее акцентный вид
	 */
	outlined?: boolean;
}

const StyledBadge = styled.div<IBadgeProps>`
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border: 1px solid;
	border-radius: 0;
	font-family: ${(props) => props.theme.typography.fontFamily.text};

	${(props) =>
		props.size === "base" &&
		`
        font-size: ${props.theme.typography.fontSize.component.base};
        line-height: ${props.theme.typography.lineHeight.component.base};
        font-weight: ${props.theme.typography.fontWeight.medium};
        height: ${props.theme.spacing.height.small};
        padding: 0 ${props.theme.spacing.padding.default};
        `}

	${(props) =>
		props.size === "small" &&
		`
        font-size: ${props.theme.typography.fontSize.component.small};
        line-height: ${props.theme.typography.lineHeight.component.small};
        font-weight: ${props.theme.typography.fontWeight.medium};
        height: ${props.theme.spacing.height.xSmall};
        padding: 0 ${props.theme.spacing.padding.compact};
        `}

        ${(props) =>
		props.appearance &&
		`
            background: ${props.theme.colors.bg[props.appearance].bold.enabled};
            color: ${props.theme.colors.text[props.appearance].calm.enabled};
            border-color: ${
				props.theme.colors.border[props.appearance].bold.enabled
			};
            `}


        ${(props) =>
		props.outlined &&
		props.appearance &&
		`
            background: ${props.theme.colors.bg[props.appearance].calm.enabled};
            color: ${props.theme.colors.text[props.appearance].loud.enabled};
            border-color: ${
				props.theme.colors.border[props.appearance].calm.enabled
			};
            
            `}
`;
/**
 *
 * Используется для цветового разграничения контента
 *
 */
export const Badge: React.FC<IBadgeProps> = ({
	text = "Hello badge",
	size = "small",
	appearance = "grey",
	outlined = false,
}) => {
	return (
		<StyledBadge
			outlined={outlined}
			appearance={appearance}
			size={size}
			text={text}
		>
			{text}
		</StyledBadge>
	);
};
