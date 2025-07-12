import styled from "styled-components";
import { ButtonLink } from "../button";
import { Badge } from "../badge";

interface ICardProps {
	/**
	 * Визуальное разделение новости
	 */
	appearance?: "blue" | "green" | "pink" | "cyan" | "grey";

	/**
	 * Наполнение текстом
	 */
	text: string;

	/**
	 * Меняет размер шрифта
	 */
	textSize?: "base" | "large";

	/**
	 * Дата новости, может быть календарной или отметкой сегодня
	 */
	newsData?: string;

	/**
	 * Классификатор новости
	 */
	badgeText?: string;

	/**
	 * Текст кнопки
	 */
	buttonText?: string;

	/**
	 * Используется для сложной композиции внутри карточки
	 */
	children?: React.ReactNode;
}

const StyledCard = styled.div<ICardProps>`
	padding: ${(props) => props.theme.spacing.padding.default};
	display: inline-flex;
	flex-direction: column;
	gap: ${(props) => props.theme.spacing.inner.grouped};
	min-width: 320px;
	max-width: 560px;
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.border.grey.calm.enabled};

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > .card-header-date {
			font-family: ${(props) => props.theme.typography.fontFamily.text};
			font-size: ${(props) =>
				props.theme.typography.fontSize.component.small};
			font-weight: ${(props) => props.theme.typography.fontWeight.medium};
			line-height: ${(props) =>
				props.theme.typography.lineHeight.component.small};
			color: ${(props) => props.theme.colors.text.main};
		}
	}

	${(props) =>
		props.textSize === "base" &&
		`
        .card-body {
		& > .card-body-text {
			font-family: ${props.theme.typography.fontFamily.text};
			font-size: ${props.theme.typography.fontSize.text.base};
			line-height: ${props.theme.typography.lineHeight.text.base};
			font-weight: ${props.theme.typography.fontWeight.regular};
			color: ${props.theme.colors.text.main};
		}
	}
        `}

	${(props) =>
		props.textSize === "large" &&
		`
        .card-body {
		& > .card-body-text {
			font-family: ${props.theme.typography.fontFamily.heading};
			font-size: ${props.theme.typography.fontSize.heading.h3};
			line-height: ${props.theme.typography.lineHeight.heading.h3};
			font-weight: ${props.theme.typography.fontWeight.semiBold};
			color: ${props.theme.colors.text.main};
		}
	}
        `}

    ${(props) =>
		props.appearance &&
		`
         color: ${props.theme.colors.text.inverted};
        .card-header {
		    & > .card-header-date {
                color: ${props.theme.colors.text.inverted};
            }
        }
        .card-body {
		    & > .card-body-text {
                color: ${props.theme.colors.text.inverted};
            }
        }
        .card-body {
		    & > .card-body-text {
                color: ${props.theme.colors.text.inverted};
            }
        }
        background: ${props.theme.colors.bg[props.appearance].loud.enabled};
        border: ${props.theme.colors.border[props.appearance].bold.enabled};
        `}
`;

/**
 * Используется для отображения новостей
 */
export const Card: React.FC<ICardProps> = ({
	appearance,
	text = "Текст заглушка",
	textSize = "base",
	newsData = "01.01.2001",
	badgeText = "Важное",
	buttonText = "Перейти",
	children,
}) => {
	return (
		<StyledCard
			appearance={appearance}
			textSize={textSize}
			newsData={newsData}
			badgeText={badgeText}
			buttonText={buttonText}
			text={text}
		>
			<div className="card-header">
				<span className="card-header-date">{newsData}</span>
				<Badge
					text={badgeText}
					size="small"
					appearance={appearance ? appearance : "grey"}
				/>
			</div>
			<div className="card-body">
				<p className="card-body-text">{text}</p>
			</div>
			<div>{children}</div>
			<div className="card-footer">
				<ButtonLink
					appearance={appearance ? "inverted" : "primary"}
					text={buttonText}
					iconAfter="chevronRight"
					size="base"
				/>
			</div>
		</StyledCard>
	);
};
