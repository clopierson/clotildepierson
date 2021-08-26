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

    html, body {
        height: 100%;
    }

    body {
        color: var(--color-text);
        background: var(--color-background);
    }

    h1, h2, h3, h4, h5, h6, p {
        color: var(--color-text);
        text-rendering: optimizeLegibility;
    }

    a {
        font-weight: 400;
        color: var(--color-link);
        text-decoration: none;
    }
    a:hover {
        color: var(--color-link-hover);
        text-decoration: revert;
    }

    /* Third-Party Overrides */

    /* CSS Variables */
    :root { 
        --color-text: ${COLORS.white};
        --color-background: ${COLORS.black};
        --color-link: ${COLORS.primary};
        --color-link-hover: ${COLORS.primaryLight};
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