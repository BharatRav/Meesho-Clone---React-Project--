import React from "react";
import { useStateValue } from "../../utils/StateProvider";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../utils/reducer";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const removeFromBasket = (e, id) => {
    e.preventDefault();

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  
  const checkout = (e) => {
    e.preventDefault();
    const logedUser = JSON.parse(localStorage.getItem("loginDetails"));

    if(logedUser === null){
       alert("Please Login First");
    }
    else{
      navigate("/address");
    }
  };
  // console.log("checkout >>>>>", basket);
  const incQuantity=(id)=>
  {
    console.log(id);
    dispatch({
      type:"INC_QUANTITY",
      item:{
        id:id
      }
    })
  }
  const decQuantity=(id)=>
  {
    dispatch({
      type:"DEC_QUANTITY",
      item:{
        id:id
      }
    })
  }
  return (
    <Container>
     

      <Main>
        <ShoppingCart>
          <h2>Shopping Cart</h2>

          {basket?.map((product) => (
            <Product key={product.id}>
              <Image>
                <img src={product.image} alt="" />
              </Image>
              <Description>
                <h4>{product.title}</h4>

                <p>&#8377; {product.price}</p>
                 <div style={{display:"flex",justifyContent:"flex-start"}}>
                 <div style={{display:"flex",border:"1px solid darkgray",alignItems:"strech",justifyContent:"center",alignContent:"center",gap:"3px"}}>
                 <button onClick={()=>decQuantity(product.id)} style={{width:"30px",background:"darkgray"}}>-</button><span>{product.quantity}</span><button onClick={()=>incQuantity(product.id)} style={{width:"30px"}}>+</button>
                 </div>
                 </div>
                <button onClick={(e) => removeFromBasket(e, product.id)}>
                  Remove
                </button>
              </Description>
            </Product>
          ))}
        </ShoppingCart>
        <Subtotal>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ( {basket.length} items ) : <strong> {value}</strong>
                </p>
                <small>
                  <input type="checkbox" />
                  <span>This order contains a gift.</span>
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹ "}
          />

          <button onClick={checkout}>
            Proceed to Checkout
          </button>
        </Subtotal>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  margin: auto;
  background-color: rgb(234, 237, 237);
  border: 2px solid palevioletred;
  position: relative;
`;
const Main = styled.div`
  display: flex;
  padding: 15px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ShoppingCart = styled.div`
  padding: 15px;
  background-color: #fff;
  flex: 0.7;

  @media only screen and (max-width: 1200px) {
    flex: none;
  }

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }
  p {
    font-size: 20px;
  }

  small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      margin-left: 10px;
    }
  }

  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    color:white;
    background-color: rgb(244, 51, 151);
    border: none;
    outline: none;

    border-radius: 8px;
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  flex: 0.3;
  margin-top:20px;
  margin-right:70px;
  img {
    width: 100%;
  }
`;
const Description = styled.div`
  flex: 0.7;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 600;
    margin-top: 10px;
  }

  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Checkout;
