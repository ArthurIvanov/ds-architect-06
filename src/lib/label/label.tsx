import styled from "styled-components";

interface ILabel {
	required?: boolean;
	text: string;
}

const StyledLabel = styled.span<ILabel>`
	font-family: ${(props) => props.theme.typography.fontFamily.text};
	font-size: ${(props) => props.theme.typography.fontSize.text.small};
	line-height: ${(props) => props.theme.typography.lineHeight.text.small};
	font-weight: ${(props) => props.theme.typography.fontWeight.medium};
	color: ${(props) => props.theme.colors.text.secondary};
	display: inline-flex;
	gap: ${(props) => props.theme.spacing.inner.closest};

	.label-required {
		color: ${(props) => props.theme.colors.text.critical.loud.enabled};
	}
`;

export const Label: React.FC<ILabel> = ({ required, text }) => {
	return (
		<StyledLabel text={text} required={required}>
			{text}
			{required && <span className="label-required">*</span>}
		</StyledLabel>
	);
};
