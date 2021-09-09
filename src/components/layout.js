import React from "react";
import { createGlobalStyle } from "styled-components";
import "normalize.css";
import { COLORS, QUERIES } from "../theme/constants";

const GlobalStyle = createGlobalStyle`
    /* CSS Reset */
    /* using normalize.css instead */

    /* Global Styles */
    *, 
    *::before, 
    *::after {
        box-sizing: border-box;
        line-height: 1.5; // typography.js uses it's
    }

    html, body {
        /*font-family: var(--font-sans-serif);*/
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        color: var(--color-text);
        background: var(--color-background);
        margin: 0 auto;
        width: min(var(--char-width), calc(100% - 64px));
    }

    h1, h2, h3, h4, h5, h6, p, blockquote {
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
        --char-width: 70ch;
        /* Fonts */
        /*
        --font-sans-serif:
            'Source Sans Pro', -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, 
            helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
        --font-serif:
            Iowan Old Style, Apple Garamond, Baskerville, Times New Roman,
            Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji,
            Segoe UI Emoji, Segoe UI Symbol;
        */

        /* Colors */

        /* Default Dark  */
        --primary: ${COLORS.primary};
        --color-link: hsl(var(--primary) 100% 70%);
        --color-link-hover: hsl(var(--primary) 100% 85%);
        --color-text: hsl(var(--primary) 100% 99%);
        --color-background: hsl(var(--primary) 33% 15%);
    }

    /* Media Queries */
    @media screen and (prefers-reduced-motion: reduce) {
        * {
            /* Very short durations means JavaScript that relies on events still works */
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
        }
    }
    @media (prefers-color-scheme: light) {
        :root {
            --color-link: hsl(var(--primary) 50% 50%);
            --color-link-hover: hsl(var(--primary) 100% 70%);
            --color-text: hsl(var(--primary) 33% 15%);
            --color-background: hsl(var(--primary) 100% 99%);
        }
    };
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
