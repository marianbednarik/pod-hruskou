import React from "react";
import styled, { css } from "styled-components";
import media from "styled-media-query";

const StyledContianer = styled.div`
  display: flex;
  width: 100%;
  padding: 48px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ reverse }) =>
    reverse
      ? css`
          @media (max-width: 768px) {
            flex-direction: column-reverse;
            overflow: hidden;
            padding: 24px 0px;
          }
        `
      : css`
          @media (max-width: 768px) {
            flex-direction: column;
            overflow: hidden;
            padding: 32px 0px;
          }
        `};
`;

const ContentContainer = styled.div`
  width: 50%;
  max-width: 450px;
  padding-right: ${({ left }) => (left ? "32px" : "0")};
  padding-left: ${({ left }) => (left ? "0" : "32px")};
  color: ${({ theme }) => theme.colors.secondary};
  z-index: 10;
  h1 {
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 8px;
    text-align: ${({ left }) => (left ? "right" : "left")};
  }
  p {
    text-align: justify !important;
    line-height: 20px;
    padding-bottom: 8px;
  }
  a {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  ${media.lessThan("medium")`
    width: 100%;
    padding: 0px 16px;
    h1 {
      text-align: center;
    }
  `}
`;

const ImageContainer = styled.div`
  position: relative;
  box-sizing: default;
  max-width: 450px;
  z-index: 1;
  ::before {
    position: absolute;
    z-index: -2;
    content: "";
    bottom: -2vw;
    right: ${({ left }) => (left ? "unset" : "-5vw")};
    left: ${({ left }) => (left ? "-5vw" : "unset")};
    width: 80%;
    height: 70%;
    border-radius: 8px;
    background-color: ${({ theme, color }) => theme.colors[color]};
    opacity: 0.3;
  }
  ${media.lessThan("medium")`
    width: 100%;
    padding: 0px 16px;
  `}
`;

const Image = styled.img`
  width: auto;
  display: block;
  max-height: 300px;
  border-radius: 8px;
  box-shadow: 0 0.938em 2.188em rgba(50, 50, 93, 0.15),
    0 0.313em 0.938em rgba(0, 0, 0, 0.1);
  ${media.lessThan("medium")`
    margin: 16px auto;
  `}
`;

export default function SeatingSection() {
  return (
    <>
      <StyledContianer>
        <ContentContainer left>
          <h1>Prostredie</h1>
          <p>
            Naša reštaurácia sa nachádza v srdci stredoslovenskej obce{" "}
            <a href="https://goo.gl/maps/Bjonb7Vk8ZZvceq17" target="_blank">
              Braväcovo
            </a>
            . O krásu jej okolia sa starajú Nízke Tatry a ďalšie rôzne zákutia
            prírody. Čas na poobednú prechádzku môžete využiť napríklad výstupom
            na neďalekú horskú útulňu{" "}
            <a href="https://goo.gl/maps/DE1pTSeUFB2Zgqrt7" target="_blank">
              Líška
            </a>
            , alebo navštíviť jeden z mnoha okolitých vrchov ako napríklad{" "}
            <a href="https://goo.gl/maps/rGukYt8zxyqkW4268" target="_blank">
              Beňuška
            </a>
            . Pred tým sa ale musíte zastaviť na pivo a poriadne sa najesť.
          </p>
        </ContentContainer>
        <ImageContainer right color="primaryDark">
          <Image src="/prostredie.jpg" />
        </ImageContainer>
      </StyledContianer>
      <StyledContianer reverse>
        <ImageContainer left color="primary">
          <Image src="/sedenie.jpg" />
        </ImageContainer>
        <ContentContainer right>
          <h1>Sedenie</h1>
          <p>
            Máme pre Vás pripravené pristory na sednie, či už prídete s rodinou
            z túry, alebo s kamarátmi na pár pív. Naše priestranstvo obsahuje
            taktiež fajčiarsku aj nefajčiarsku zónu, ktorá je vhodná aj na
            konzumáciu jedál. V letných mesiacoch môžete využívať vonkajšie
            sedenie spolu s krytým grilom a ohniskom. Priestor je taktiež možné
            prenanajť na spoločenské podujatie.
          </p>
        </ContentContainer>
      </StyledContianer>
      <StyledContianer>
        <ContentContainer left>
          <h1>Jedlo</h1>
          <p>
            V našom jedálničku sa Vám snažíme prinášať čo najautentickejšie
            stredoslovenské jedlá. Môžete si u nás dopriať lahkú desiatu pred
            alebo počas túry, alebo si sadnút na kompletný obed aj s dezertom.
            Popri každodennom menu organizujeme rôzne udalosti, pri ktorých
            skupinovo varíme napríklad guláš, alebo iné typické jedlá pre danú
            príležitosť.
          </p>
        </ContentContainer>
        <ImageContainer right color="primaryLight">
          <Image src="/gulas.jpg" />
        </ImageContainer>
      </StyledContianer>
    </>
  );
}
