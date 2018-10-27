const isOpenLogin = state => state.openedLogin;
const isOpenRegister = state => state.openedRegister;
const isOpenRecovery = state => state.openedRecovery;
const isOpenChangePassword = state => state.openedChangePassword;
const isOpenLoading = state => state.openedLoading;
const isOpenDialog = state => state.openedDialog;
const isOpenStadistic = state => state.openedStadistic;
const getMessageLoading = state => state.message_loading;
const getTypeDialog = state => state.type_dialog;
const getMessageDialog = state => state.message_dialog;
const getIdMatch = state => state.idMatch;

export default {
  isOpenLogin,
  isOpenRegister,
  isOpenRecovery,
  isOpenChangePassword,
  isOpenLoading,
  isOpenDialog,
  isOpenStadistic,
  getTypeDialog,
  getMessageDialog,
  getMessageLoading,
  getIdMatch
}
