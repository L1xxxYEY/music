import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Inter";
  background-color: ${(props) => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
}
`
