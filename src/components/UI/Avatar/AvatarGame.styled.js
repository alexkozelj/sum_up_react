import styled from "styled-components";

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
   /* max-width: 75px; */
  position: absolute;
  /* top: 20px; */
  border-radius: 10px;
  opacity: 0.8;
  text-align: center;
  margin-bottom: 5px;

  @media (max-width: 440px) {
    max-width: 55px;
    /* top: 1px; */
  }

  .wrapper {
    display: flex;
    max-height: 100%;
    justify-content: center;
    border-radius: 10px;
    background-color: black;
    text-align: center;
    
  }


  img {
    width: 100%;
    border-radius: 10px;
    padding: 3px;
    object-fit: contain;
    overflow: hidden;
  }

  p {
    font-size: 14px;;
    font-weight: 500;
    padding: 1px 3px 0 3px;
    margin: 0;
    @media (max-width: 440px) {
      font-size: 12px;
    }
  }
`;
