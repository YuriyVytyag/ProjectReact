import styled from '@emotion/styled';
import imgTablet from '../../assets/images/side-bar-tablet.png';
import imgDesctop from '../../assets/images/side-bar-desctop.png';

export const Bar = styled.aside`
  background-color: #f0f1f3;
  background-repeat: no-repeat;
  font-style: normal;
  letter-spacing: 0.04em;
  padding: 40px 20px 52px 20px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    padding: 80px 80px 80px 32px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;
    gap: 80px;
    width: 100vw;
    background-image: url(${imgTablet});
    background-size: contain;
    background-position: top right;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    gap: 60px;
    height: 100vh;
    width: 25vw;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -10;
    padding: 292px 123px 166px 106px;
    margin: 0px;
    background-image: url(${imgDesctop});
    background-size: 150%;
    background-position: right top;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 14px;
  color: #212121;
  padding-bottom: 20px;
  &.headerBottom {
    padding-top: 40px;
    @media screen and (min-width: 768px) {
      padding-top: 0px;
    }
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const List = styled.ul`
  & li:last-child {
    padding-bottom: 0;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #9b9faa;
  padding-top: 0;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
