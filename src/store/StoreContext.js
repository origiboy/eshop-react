import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  products: [
    {
      id: 0,
      name: 'Кровать TATRAN',
      description: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
      price: 120000,
      img: '1.jpeg',
      amount: {
        min: 1,
        max: 15,
      },
      favourite: false,
    },
    {
      id: 1,
      name: 'Кресло VILORA',
      description: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.',
      price: 21000,
      img: '2.jpeg',
      amount: {
        min: 1,
        max: 15,
      },
      favourite: false,
    },
    {
      id: 2,
      name: 'Стол MENU',
      description: 'Европейский дуб - отличается особой прочностью и стабильностью.',
      price: 34000,
      img: '3.jpeg',
      amount: {
        min: 1,
        max: 15,
      },
      favourite: false,
    },
    {
      id: 3,
      name: 'Диван ASKESTA',
      description: 'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать',
      price: 68000,
      img: '4.jpeg',
      amount: {
        min: 3,
        max: 15,
      },
      favourite: false,
    },
    {
      id: 4,
      name: 'Кресло LUNAR',
      description: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки',
      price: 40000,
      img: '5.jpeg',
      amount: {
        min: 1,
        max: 15,
      },
      favourite: false,
    },
    {
      id: 5,
      name: 'Шкаф Nastan',
      description: 'Мебель может быть оснащена разнообразными системами подсветки.',
      price: 80000,
      img: '6.jpeg',
      amount: {
        min: 1,
        max: 15,
      },
      favourite: false,
    }
  ],
  cart: [],
  sortOrder: 'asc',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_CART':
      const sortedCartItems = [...state.products].sort((a, b) => {
        if (state.sortOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      return {
        ...state,
        products: sortedCartItems,
      };
    case 'ADD_TO_CART':
      const toCart = [...state.products].find((product) => product.id === action.payload)
      if (state.cart.find((item) => item.id === toCart.id)) {
        reducer(state, {
          type: 'INCREASE_AMOUNT_IN_CART',
          payload: toCart.id,
        });
        return state;
      } else {
        toCart.current = toCart.amount.min
        return {
          ...state,
          cart: [...state.cart, toCart],
        };
      }
    case 'DELETE_FROM_CART':
      return {
        ...state,
        cart: [...state.cart].filter((product) => (product.id !== action.payload)),
      };
    case 'DELETE_ALL_CART':
      return {
        ...state,
        cart: [],
      };
    case 'INCREASE_AMOUNT_IN_CART':
      return {
        ...state,
        cart: [...state.cart].map((product) => {
          if((product.id === action.payload) && (product.current < product.amount.max)) {
            product.current = product.current + 1
          }
          return product
        }),
      };
    case 'DECREASE_AMOUNT_IN_CART':
      return {
        ...state,
        cart: [...state.cart].map((product) => {
          if((product.id === action.payload) && (product.current > product.amount.min)) {
            product.current = product.current - 1
          }
          return product
        }),
      };
    case 'SORT_PRODUCTS_BY_PRICE_ASC':
      const sortedProductsAsc = [...state.products].sort((a, b) => b.price - a.price);
      return {
        ...state,
        products: sortedProductsAsc,
      };
    case 'SORT_PRODUCTS_BY_PRICE_DESC':
      const sortedProductsDesc = [...state.products].sort((a, b) => a.price - b.price);
      return {
        ...state,
        products: sortedProductsDesc,
      };
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        products: [...state.products].map((product) => {
          if((product.id === action.payload)) {
            product.favourite = true
          }
          return product
        }),
      };
    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        products: [...state.products].map((product) => {
          if((product.id === action.payload)) {
            product.favourite = false
          }
          return product
        }),
      };
    default:
      return state;
  }
};

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook to use the store context
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};