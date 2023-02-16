export const initialState = {
    basket: [],
    user: JSON.parse(localStorage.getItem("user")),
    address: {},
    orders:[]
  };
  
  export const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price*item.quantity + amount, 0);
  
  const reducer = (state, action) => {
    // console.log("action >>>>", action);
  
    switch (action.type) {
      case "ADD_TO_BASKET":
        let boolean=false;
        state.basket.forEach((e)=>
        {
          if(e.id==action.item.id)
          {
            boolean=true;
          }
        })
        if(!boolean)
        {return {
          ...state,
          basket: [...state.basket, action.item],
        }
      }
      return{...state}
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
  
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(`
            can't remove product whose id is ${index}
            `);
        }
  
        return {
          ...state,
          basket: newBasket,
        };
  
      case "SET_ADDRESS":
        return {
          ...state,
          address: { ...action.item },
        };
  
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "EMPTY_BASKET":
        return {
          ...state,
          orders:[...state.basket],
          basket:[]
        };
        case "INC_QUANTITY":
          { let index=state.basket.findIndex((element)=>element.id==action.item.id)
          
            //if(index>=0){
        if(state.basket[index].quantity<5){
            state.basket[index].quantity=state.basket[index].quantity+1;
        }
        return {
          ...state,
          basket: [...state.basket],
          
        }
        
      }
      case "DEC_QUANTITY":
        {
          let index=state.basket.findIndex((element)=>element.id==action.item.id)
          
         if(state.basket[index].quantity>1)
         {
          state.basket[index].quantity--;
         }
        return {
          ...state,
          basket: [...state.basket],
          
        }
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  