import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTubeIcon from "@material-ui/icons/YouTube";
import {Circle,FlexDiv,Social,FootCont} from "./Footer.styled"
export function Footer() {
  return (
    <>
      <FlexDiv>
        <Social>We are Social! Connect with us on</Social>
        <Circle>
          <FacebookIcon />
        </Circle>
        <Circle>
          <InstagramIcon />
        </Circle>
        <Circle>
          <TwitterIcon />
        </Circle>
        <Circle>
          <PinterestIcon />
        </Circle>
        <Circle>
          <YouTubeIcon />
        </Circle>
          </FlexDiv>
          <FootCont>

          </FootCont>
    </>
  );
}
