import React from "react";
import styled from "styled-components";

const LogoImg = styled.img`
  width: 120px;
`;

const Logo = () => {
  return (
    <LogoImg
      src="https://passbase.com/assets-v2/images/passbase-logo-new.svg"
      alt="logo"
    />
  );
};

export default Logo;
