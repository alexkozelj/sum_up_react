import styled from "styled-components";

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 75px; */
  /* max-height: 50%; */
  justify-content: center;
  align-items: center;
  /* align-self: start; */
  width: 50px;
   max-width: 75px;
    
  position: absolute;
  top: 20px;
  /* left: 8px; */

   /* top: 115px;
   left: 140px; */
  /* border: 3px solid black; */
  border-radius: 10px;
  opacity: 0.8;
  /* background-color: tomato; */
  text-align: center;
  /* display: grid; */
  margin-bottom: 5px;
  /* margin-top: 45px; */

  @media (max-width: 440px) {
    max-width: 55px;
    /* margin-top: 20px; */
    
    height: 120px;
    top: 1px;
  }

  .wrapper {
    display: flex;
    /* position: relative; */
    /* max-width: 50%; */
    max-height: 50%;
    /* min-width: 45%; */
    justify-content: center;
    /* max-width: 100px; */
    /* height: 100px; */
    /* border: 5px solid #b54936; */
    border-radius: 10px;
    /* opacity: 0.8; */
    background-color: black;
    text-align: center;
    /* display: grid; */
  }


  img {
    /* position: absolute; */
    /* padding: 2px; */
    /* max-width: 100%; */
    /* max-height: 100%; */
    /* align-self: center; */
    /* opacity: 0.5; */
    /* justify-content: center; */
    width: 100%;
    /* max-height: 100%; */
    border-radius: 10px;
    padding: 3px;
    object-fit: contain;
    overflow: hidden;
  }

  p {
    font-size: 0.7em;;
    /* font-weight: bold; */
    padding: 1px 3px 0 3px;
    margin: 0;
    @media (max-width: 440px) {
      font-size: 8px;
    }
  }
`;
