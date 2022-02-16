import { css } from "styled-components";

/** Variables **/
export const fontFamily = {
   fontFamily1: "'sssB', 'SamsungSharpSans', Arial, sans-serif",
   fontFamily2: "'SamsungOne',arial,sans-serif",
};

/** Functions **/
export const fluidTypo = (
   fontSizeMin,
   fontSizeMax,
   lineHeightMin,
   lineHeightMax
) => {
   return css`
    font-size: calc(
      ${fontSizeMin}px + (${fontSizeMax} - ${fontSizeMin}) *
        ((100vw - 320px) / (1440 - 320))
    );
    line-height: calc(
      ${lineHeightMin}px + (${lineHeightMax} - ${lineHeightMin}) *
        ((100vw - 320px) / (1440 - 320))
    );

    @media (max-width: 320px) {
      font-size: ${fontSizeMin}px;
    }

    @media (min-width: calc(1440px + 0.02px)) {
      font-size: ${fontSizeMax}px;
    }
  `;
};

export const fluidTypoExtended = (
   fontSizeMin,
   fontSizeMax,
   lineHeightMin,
   lineHeightMax,
   viewportMin,
   viewportMax
) => {
   return css`
    font-size: calc(
      ${fontSizeMin} + (${fontSizeMax} - ${fontSizeMin}) *
        ((100vw - ${viewportMin}) / (${viewportMax} - ${viewportMin}))
    );
    line-height: calc(
      ${fontSizeMin} + (${fontSizeMax} - ${fontSizeMin}) *
        ((100vw - ${viewportMin}) / (${viewportMax} - ${viewportMin}))
    );

    @media (max-width: ${viewportMin}px) {
      font-size: ${fontSizeMin}px;
    }

    @media (min-width: calc(${viewportMax}px + 0.02px)) {
      font-size: ${fontSizeMax}px;
    }
  `;
};


// this can be used for any calc, not just font size
export const fluidCalc = (
   sizeMin,
   sizeMax,
   viewportMin,
   viewportMax
) => {

   return css`calc(${sizeMin}px + (${sizeMax} - ${sizeMin}) * ((100vw - ${viewportMin}px) / (${viewportMax} - ${viewportMin})));`
}