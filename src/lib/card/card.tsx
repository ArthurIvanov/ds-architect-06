import styled from "styled-components";
import { ButtonLink } from "../button";

interface ICardProps {
	appearance?: "default" | "blue" | "green" | "pink" | "cyan" | "grey";
	textSize?: "base" | "large";
	newsData?: string;
	badgeText?: string;
	buttonText?: string;
	children?: React.ReactNode;
}

const StyledCard = styled.div<ICardProps>``;

export const Card: React.FC<ICardProps> = ({
	appearance,
	textSize,
	newsData,
	badgeText,
	buttonText,
	children,
}) => {
	return (
		<StyledCard
			appearance={appearance}
			textSize={textSize}
			newsData={newsData}
			badgeText={badgeText}
			buttonText={buttonText}
		>
			<div className="card-footer">header</div>
			<div className="card-body">body</div>
			{children}
			<ButtonLink text="Подробнее" iconAfter="chevronRight" size="base" />
		</StyledCard>
	);
};
