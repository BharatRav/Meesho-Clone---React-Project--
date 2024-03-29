import React from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
// import { useStateValue } from "../../utils/StateProvider";
import { useNavigate } from "react-router-dom";
function Card({ id, image, title, price, rating }) {
  // const [{ basket }, dispatch] = useStateValue();
  const navigate=useNavigate();
  // console.log("basket >>>>", basket);
  // const addToBasket = (e) => {
  //   e.preventDefault();

  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id,
  //       title,
  //       price,
  //       image,
  //       rating,
  //     },
  //   });
  // };
  const navigatePage=(id)=>
  {
    navigate(`/product/${id}`);
  }

  return (
    <Container onClick={()=>navigatePage(id)}>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Description>
        <h5>{title}</h5>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        <p> &#8377; {price}</p>
        

        {/*<button  >Add to Cart</button>*/}
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
 
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;
const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    color:white;
    background-color: rgb(244, 51, 151);
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card;
