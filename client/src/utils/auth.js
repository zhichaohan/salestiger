import { getUser, signUp, logOut, signIn, updateUser, recoverPassword, resetPassword } from '../api/users';

export default class Auth {
  constructor(user) {
    this.currentUser = user;
  }

  getCurrentUser = () => {
    return this.currentUser;
  };

  isLoggedIn = () => {
    var currentUserPresent = Object.keys(this.currentUser).length !== 0;

    if (!currentUserPresent) {
      return false;
    }

    return true;
  }

  userSignUp = (name, userName, email, password, params, onSuccess, onError) => {
    signUp(name, userName, email, password, params, (result) => {
      this.currentUser = result;
      if (onSuccess) {
        onSuccess(result);
      }
    }, (errors) => {
      if (onError) {
        onError(errors);
      }
    });
  }

  userSignIn = (email, password, rememberMe, onSuccess, onError) => {
    signIn(email, password, rememberMe, (user) => {
      this.currentUser = user;
      if (onSuccess) {
        onSuccess(user);
      }
      else {
        window.location = '/member/home';
      }
    }, onError);
  }

  userLogOut = () => {
    logOut(() => {
      this.currentUser = {};
      window.location = '/';
    });
  }

  updateUser = (params, onSuccess, onError) => {
    updateUser(params, (user) => {
      this.currentUser = user;
      if (onSuccess) {
        onSuccess(user);
      }
    }, onError);
  }

  userSync = (onSuccess) => {
    if (!this.isLoggedIn()) {
      return;
    }

    getUser(this.currentUser.id, (user) => {
      this.currentUser = user;
      onSuccess();
    });
  }

  userRecoverPassword = (email, onSuccess, onError) => {
    recoverPassword(email, onSuccess, onError);
  }

  userResetPassword = (resetPasswordToken, password, onSuccess, onError) => {
    resetPassword(resetPasswordToken, password, (user) => {
      this.currentUser = user;
      onSuccess();
    }, onError);
  }
}
