import styled from "styled-components";

export const BackgroundImageContainer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  background-color: #ffffff;
  opacity: .7;
  position: absolute;
`;

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? "380px" : "240px")};
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImageContainer} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(.25, .45, .45, .95);
    }

    & ${ContentContainer} {
      opacity: .9;
      transition: opacity .5s;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const ContentSubtitle = styled.span`
 font-weight: lighter;
  font-size: 16px;
`;
