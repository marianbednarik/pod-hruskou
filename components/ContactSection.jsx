import React from "react";
import styled from "styled-components";

const RootContainer = styled.div`
  display: flex;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  a {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  p {
    line-height: 20px;
  }
`;

export default function ContactSection() {
  return (
    <RootContainer>
      <p>
        Môžete nás kontaktovať ohľadom rezervácií, akýchkoľvek otázok alebo
        poznámok. Sme taktiež otvorení novým pracovným posilám, takže nás
        neváhajte navštíviť aj osobne. <strong>Tešíme sa na Vás</strong>.
      </p>
      <br />
      <a href="https://goo.gl/maps/JCLEcL2fSPmPUuu7A" target="_blank">
        Braväcovo 153, 976 64 Braväcovo
      </a>
      <br />
      <a href="mailto: kontakt@podhruskou.sk">kontakt@podhruskou.sk</a>
      <p>+421 999 999 999 </p>
    </RootContainer>
  );
}
