import styled from "styled-components";
import { GitHub } from "@material-ui/icons";

const Container = styled.div`
  background-color: #ebf0f3;
`;

const Logo = styled.h1`
  text-align: center;
  padding-top: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Footer = () => {
  return (
    <Container>
      <Logo>SHOP.</Logo>

      <SocialContainer>
        <SocialIcon color="000">
          <GitHub />
        </SocialIcon>
        {/* <SocialIcon color="3B5999">
          <Facebook />
        </SocialIcon>
        <SocialIcon color="E4405F">
          <Instagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
          <Twitter />
        </SocialIcon>
        <SocialIcon color="E60023">
          <Pinterest />
        </SocialIcon> */}
      </SocialContainer>
    </Container>
  );
};
