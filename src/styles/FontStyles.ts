import { createGlobalStyle } from "styled-components";
import GeomanistRegular from '../assets/fonts/fonte-geomanist-regular.ttf';
import TheNautigalRegular from '../assets/fonts/fonte-TheNautigal-regular.ttf';
import TheNautigalBold from '../assets/fonts/fonte-TheNautigal-bold.ttf';

export const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Geomanist';
    font-weight: normal;
    font-style: normal;
    src: url(${GeomanistRegular}) format('truetype');
    font-display: fallback;
}
@font-face {
    font-family: 'TheNautigalRegular';
    font-weight: normal;
    font-style: normal;
    src: url(${TheNautigalRegular}) format('truetype');
    font-display: fallback;
}
@font-face {
    font-family: 'TheNautigalBold';
    font-weight: normal;
    font-style: normal;
    src: url(${TheNautigalBold}) format('truetype');
    font-display: fallback;
}
`