export default function cart(state = [], action) {
  return (
    {
      ADD_TO_CART: [...state, action.product],
    }[action.type] || state
  );

  /**  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  } */
}
