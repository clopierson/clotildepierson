import React from "react"
import { createGlobalStyle } from "styled-components"
import 'normalize.css'
import { COLORS } from "../theme/constants"

const GlobalStyle = createGlobalStyle`
    /* CSS Reset */
    /* using normalize.css instead */

    /* Global Styles */
    *, 
    *::before, 
    *::after {
        box-sizing: border-box;
        line-height: 1.5;
    }

    body {
        color: var(--color-text);
        background: var(--color-background);
    }

    h1, h2, h3, h4, h5, h6, p {
        text-rendering: optimizeLegibility;
    }

    /* Third-Party Overrides */

    /* CSS Variables */
    :root { 
        --color-text: ${COLORS.white};
        --color-background: ${COLORS.black};
    }
`;

export default function Layout({ children }) {
    return (
      <>
        <GlobalStyle/>
        {children}
      </>
    )
}