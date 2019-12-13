/* eslint-disable no-unused-expressions */
import produce from 'immer';

export default function cart(state = [], action) {
  const actions = {
    '@cart/ADD_SUCCESS': () =>
      produce(state, draft => {
        const { product } = action;

        draft.push(product);
      }),

    '@cart/REMOVE': () =>
      produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        productIndex >= 0 && draft.splice(productIndex, 1);
      }),

    '@cart/UPDATE_AMOUNT_SUCCESS': () =>
      produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      }),
  };

  return actions[action.type] ? actions[action.type]() : state;
}
