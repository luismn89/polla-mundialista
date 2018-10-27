const toogleLogin = (state, stateModal) => state.openedLogin = stateModal;
const toogleRegister = (state, stateModal) => state.openedRegister = stateModal;
const toogleLoading = (state, stateModal) => state.openedLoading = stateModal;
const toogleStadistic = (state, stateModal) => state.openedStadistic = stateModal;
const toogleRecovery = (state, stateModal) => state.openedRecovery = stateModal;
const toogleChangePassword = (state, stateModal) => state.openedChangePassword = stateModal;
const toogleDialog = (state, stateModal) => state.openedDialog = stateModal;
const setMessageLoading = (state, message) => state.message_loading = message;
const setIdMatchStadistic = (state, id) => state.idMatch = id;
const setTypeDialog = (state, type) => state.type_dialog = type;
const setMessageDialog = (state, message) => state.message_dialog = message;
const close = (state) => {
  state.openedLogin = false;
  state.openedRegister = false;
  state.openedLoading = false;
  state.openedStadistic = false;
  state.openedDialog = false;
  state.openedRecovery = false;
}

export default {
  toogleLogin,
  toogleRegister,
  toogleLoading,
  toogleStadistic,
  toogleRecovery,
  toogleChangePassword,
  toogleDialog,
  setMessageLoading,
  setIdMatchStadistic,
  setMessageDialog,
  setTypeDialog,
  close
}
