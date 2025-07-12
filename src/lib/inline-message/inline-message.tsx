import styled from "styled-components";

interface IInlineMessage {
	status?: "default" | "critical";
	text?: string;
}

const StyledInlineMessage = styled.span<IInlineMessage>`
	font-family: ${(props) => props.theme.typography.fontFamily.text};
	font-size: ${(props) => props.theme.typography.fontSize.text.small};
	line-height: ${(props) => props.theme.typography.lineHeight.text.small};
	font-weight: ${(props) => props.theme.typography.fontWeight.regular};

	${(props) =>
		props.status === "critical" &&
		`
        color: ${props.theme.colors.text.critical.loud.enabled};
        `}

	${(props) =>
		props.status === "default" &&
		`
        color: ${props.theme.colors.text.tertiary};
        `}
`;

export const InlineMessage: React.FC<IInlineMessage> = ({ status, text }) => {
	return (
		<StyledInlineMessage text={text} status={status}>
			{text}
		</StyledInlineMessage>
	);
};
