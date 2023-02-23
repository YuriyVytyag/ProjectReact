import styled from '@emotion/styled';

export const DesctopImg = styled.img`
  display: none;
  @media (min-width: 1280px){
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    z-index: -1;
  }
`;

export const TabletImg = styled.img`
  display: none;
  @media (min-width: 768px) and (max-width: 1279px) {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
