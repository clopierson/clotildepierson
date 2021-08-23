import React from "react"
import { Global, css } from "@emotion/react";
import 'normalize.css';

const GlobalStyles = css`
    /* CSS Reset */


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
        --color-text: #fff;
        --color-background: #000;
    }
`;

export default function Layout({ children }) {
    return (
      <>
        <Global styles={GlobalStyles}/>
        {children}
      </>
    )
}