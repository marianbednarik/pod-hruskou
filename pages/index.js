import React, { useRef } from "react";
import styled from "styled-components";
import Container from "components/Container";
import Header from "components/Header";
import Footer from "components/Footer";
import media from "styled-media-query";
import Hero from "components/Hero";
import AboutSection from "components/AboutSection";
import MenuSection from "components/MenuSection";
import ContactSection from "components/ContactSection";

const ContentContainer = styled(Container)`
  min-height: calc(100vh - 64px - 64px);
  padding-top: 64px;
  padding-bottom: 128px;
  ${media.lessThan("medium")`
    min-height: calc(100vh - 96px - 64px);
    padding-left: 0;
    padding-right: 0;
    padding-top: 16px;
    padding-bottom: 64px;
  `};
`;

const SectionHeader = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  padding-top: 128px;
  padding-bottom: 16px;
  font-weight: 800;
  font-size: 42px;
  text-transform: uppercase;
  position: relative;
  text-align: center;
  ${media.lessThan("medium")`
  padding-top: 64px;
    font-size: 36px;
  `};
`;

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop + 32,
    left: 0,
    behavior: "smooth",
  });

export default function Home() {
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);

  const handleUserNavigation = (button) => {
    switch (button) {
      case "about":
        scrollToRef(aboutRef);
        break;
      case "menu":
        scrollToRef(menuRef);
        break;
      case "contact":
        scrollToRef(contactRef);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Header onClick={handleUserNavigation} />
      <ContentContainer fluid>
        <Hero />
        <SectionHeader ref={aboutRef}>o nás</SectionHeader>
        <AboutSection />
        <SectionHeader ref={menuRef}>menu</SectionHeader>
        <MenuSection />
        <SectionHeader ref={contactRef}>kontakt</SectionHeader>
        <ContactSection />
      </ContentContainer>
      <Footer />
    </>
  );
}
