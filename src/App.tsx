import Router from "./Router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./theme";
import { useRecoilState } from "recoil";
import { themeToggleState } from "./atoms/atoms";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body {
  background-color: ${(props) => props.theme.colors.mainBackgroundColor};
  font-family: 'Montserrat', sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
`;

function App() {
  // eslint-disable-next-line
  const [isDarkMode, _] = useRecoilState(themeToggleState);
  console.log(isDarkMode);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <Router></Router>
      </ThemeProvider>
    </>
  );
}

export default App;
