import styled from '@emotion/styled';
import bgMob1x from '../../pictures/background/main/bg_img_mob@1x.png';
import bgMob2x from '../../pictures/background/main/bg_img_mob@2x.png';
import bgTab1x from '../../pictures/background/main/bg_img_tab@1x.png';
import bgTab2x from '../../pictures/background/main/bg_img_tab@2x.png';
import imgDes1x from '../../pictures/background/main/bg_img_des@1x.png';
import imgDes2x from '../../pictures/background/main/bg_img_des@2x.png';
import bgDes1x from '../../pictures/background/main/bg_element_des@1x.png';
import bgDes2x from '../../pictures/background/main/bg_element_des@2x.png';

export const Wrapper = styled.div`
  background-size: 100%;
  min-height: calc(100vh - 109px);
  /* padding: 109px 18px; */
  
  min-height: 100vh;
  background-image: url(${bgMob1x});
  /* background: linear-gradient(to bottom, transparent 109px, rgba(0, 0, 0, 0.5) 109px), url(${bgMob1x}); */
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMob2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bgTab1x});
  }

  @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${bgTab2x});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgDes1x});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${imgDes2x});
  }
`;

export const Section = styled.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  /* padding-top: 24px; */
  min-width: 1404px;
  min-height: 582px;
  /* padding-top: 31px; */
  /* padding-bottom: 40px; */
  @media screen and (min-width: 1440px) {
    background-image: url(${bgDes1x});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${bgDes2x});}`
