import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";

const menu = [
  {
    day: "Pondelok",
    date: "4. 12. 2019",
    items: [
      {
        weight: "0,33l",
        name: "Fazuľová kyslá, chlieb",
      },
      {
        weight: "120g",
        name: "Vyprážaný kurací rezeň",
      },
      {
        weight: "200g",
        name: "Zemiaková kaša, šalát",
      },
    ],
  },
  {
    day: "Utorok",
    date: "5. 12. 2019",
    items: [
      {
        weight: "0,33l",
        name: "Zeleninová s krupicovými haluškami",
      },
      {
        weight: "120g",
        name: "Znojemské hovädzie filé",
      },
      {
        weight: "180g",
        name: "Dusená ryža",
      },
    ],
  },
  {
    day: "Streda",
    date: "6. 12. 2019",
    items: [
      {
        weight: "0,33l",
        name: "Hŕstková, chlieb",
      },
      {
        weight: "340g",
        name: "Halušky s bryndzou a slaninou",
      },
      {
        weight: "0,2l",
        name: "Zákvas",
      },
    ],
  },
  {
    day: "Štvrtok",
    date: "7. 12. 2019",
    items: [
      {
        weight: "0,33l",
        name: "Rybacia",
      },
      {
        weight: "120g",
        name: "Bratislavské bravčové pliecko",
      },
      {
        weight: "200g",
        name: "Knedľa",
      },
    ],
  },
  {
    day: "Piatok",
    date: "8. 12. 2019",
    items: [
      {
        weight: "0,33l",
        name: "Gulášová, chlieb",
      },
      {
        weight: "120g",
        name: "Čevabčiči",
      },
      {
        weight: "180g",
        name: "Varené zamiaky, obloha",
      },
    ],
  },
];

const RootContainer = styled.div`
  width: calc(100% - 16px);
  max-width: 700px;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.highlight};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  box-shadow: 0 0.938em 2.188em rgba(50, 50, 93, 0.15),
    0 0.313em 0.938em rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 64px;
  display: flex;
  flex-direction: row;
  padding-left: 32px;
  padding-top: 48px;
  padding-bottom: 48px;
  ${media.lessThan("medium")`
    margin: 0 8px;
  `}
  ${media.lessThan("small")`
    padding-left: 0;
    margin-top: 32px;
    padding-top: 32px;
  `}
`;

const MenuChooser = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  ${media.lessThan("small")`
    display: none;
  `}
`;

const MenuOption = styled.button`
  border: none;
  outline: none;
  background: none;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  text-align: center;
  padding: 8px;
  margin-top: 8px;
  transition: 0.15s ease;
  cursor: pointer;
  border-radius: 4px;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primaryDark : theme.colors.secondary};
  background-color: ${({ theme, selected }) =>
    selected ? "rgba(214, 40, 40, 0.15)" : "none"};
  &:hover {
    background-color: rgba(214, 40, 40, 0.15);
  }
`;

const MenuDisplayContainer = styled.div`
  padding-left: 32px;
  padding-right: 32px;
`;

const MenuHeader = styled.p`
  font-weight: bold;
  font-size: 18px;
  padding-top: 16px;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 24px;
`;

const MenuItemWeight = styled.p`
  width: 60px;
  text-align: right;
`;

const MenuItemName = styled.p`
  width: 100%;
  padding-left: 16px;
  text-align: left;
`;

export default function MenuSection() {
  const options = [
    "Denné menu",
    "Predjedlá",
    "Polievky",
    "Hlavné jedlá",
    "Šaláty",
    "Špeciality",
    "Dezerty",
    "Nápoje",
  ];
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <RootContainer>
      <MenuChooser>
        {options.map((option, index) => (
          <MenuOption
            selected={index === selectedOption}
            onClick={() => setSelectedOption(index)}
            key={option + index}
          >
            {option}
          </MenuOption>
        ))}
      </MenuChooser>
      <MenuDisplayContainer>
        {menu.map((menuItem) => (
          <div key={menuItem.day + menuItem.date}>
            <MenuHeader>{menuItem.day + " - " + menuItem.date}</MenuHeader>
            {menuItem.items.map((item) => (
              <MenuItem key={item.weight + item.name}>
                <MenuItemWeight>{item.weight}</MenuItemWeight>
                <MenuItemName>{item.name}</MenuItemName>
              </MenuItem>
            ))}
          </div>
        ))}
      </MenuDisplayContainer>
    </RootContainer>
  );
}
