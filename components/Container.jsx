import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const ContainerParent = styled.div`
  margin: 0 auto;
  ${media.lessThan("medium")`
    width: 100%;
    padding: 0px 16px 0px 16px;
  `};
  ${media.between("medium", "large")`
    width: 768px;
    padding: 0px 16px 0px 16px;
  `};
  ${media.between("large", "huge")`
    width: 1170px;
    padding: 0px 32px 0px 32px;
  `};
  ${media.greaterThan("huge")`
    width: 1440px;
    padding: 0px 32px 0px 32px;
  `};
  width: ${(props) => props.fluid && "100% !important"};
  max-width: ${(props) => props.fluid && "1440px"};
`;

export default React.forwardRef((props, ref) => {
  return (
    <ContainerParent ref={ref} {...props}>
      {props.children}
    </ContainerParent>
  );
});
