import styled from "styled-components";

export const StyledButton = styled.button`
padding-top:  ${p => p.theme.space[3]}px;
padding-bottom: ${p => p.theme.space[3]}px;
padding-left:  ${p => p.theme.space[4]}px;
padding-right:  ${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.lg};

:hover, :focus {
    background-color: ${p => p.theme.colors.primary};
}
`; 