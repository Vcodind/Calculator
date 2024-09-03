export const getButtons = () => {
    return (dispatch, getState) => {
      const state = getState();
      const buttons = state.buttons;
      dispatch({ type: 'GET_BUTTONS', buttons });
    };
  };
  export const removeButtons = (buttonId) => {
    return (dispatch, getState) => {
      const state = getState();
      const buttons = state.buttons.filter((button) => button.id !== buttonId);
      dispatch({ type: 'REMOVE_BUTTON', buttons });
    };
  };  
 