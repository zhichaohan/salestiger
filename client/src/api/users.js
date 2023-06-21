import { snakeCaseToTitleCase } from '../helpers';

export const signUp = (name, companyName, email, password, params, successCallback, errorCallback) => {
  fetch(`/users`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...window.utmInfo,
      user: {
        ...params,
        name: name,
        email: email,
        password: password
      },
      account: {
        name: companyName,
      }
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        if (successCallback) {
          successCallback(data.user);
        }
      }
      else {
        let errors = [];
        for (const [key, value] of Object.entries(data.errors)) {
          errors.push(`${snakeCaseToTitleCase(key)} ${value}`);
        }
        errorCallback(errors);
      }
    })
}

export const logOut = (successCallback) => {
  fetch(`/users/sign_out`, {
    method: 'DELETE',
  })
  .then(successCallback);
}

export const signIn = (email, password, rememberMe, onSuccess, onError) => {
  fetch(`/users/sign_in`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...window.utmInfo,
      user: {
        email: email,
        password: password,
        remember_me: rememberMe ? '1' : '',
      }
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        onSuccess(data.user);
      }
      else {
        onError(['Invalid email or password.']);
      }
    })
    .catch((error) => {
      onError(['Invalid email or password.']);
    })
}

export const updateUser = (updates, onSuccess, onError) => {
  fetch(`/api/v1/user`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        ...updates,
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      if (onSuccess) {
        onSuccess(data.user);
      }
    }
    else {
      let errors = [];
      for (const [key, value] of Object.entries(data.errors)) {
        errors.push(`${snakeCaseToTitleCase(key)} ${value}`);
      }
      onError(errors);
    }
  })
}

export const createSubscription = (
    successCallback,
    onError,
) => {
  fetch(`/api/v1/users/subscription`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
  .catch(data => onError(data))
}

export const confirmPayment = (
  paymentIntentId,
  paymentIntentSecret,
  successCallback
) => {
  fetch(`/api/v1/users/confirm_payment`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payment_intent: paymentIntentId,
      payment_intent_client_secret: paymentIntentSecret,
    })
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const cancelSubscription = (
    successCallback,
    onError,
) => {
  fetch(`/api/v1/users/cancel_subscription`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
  .catch(data => onError(data))
}

export const updateHealthProfile = (
  params,
  successCallback,
  onError
) => {
  fetch(`/api/v1/users/health_profile`, {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      health_profile: {
        ...params,
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
  .catch(data => onError(data))
}

export const recoverPassword = (email, onSuccess, onError) => {
  fetch(`/users/password`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        email: email,
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      onSuccess();
    }
    else {
      let errors = [];
      for (const [key, value] of Object.entries(data.errors)) {
        errors.push(`${snakeCaseToTitleCase(key)} ${value}`);
      }
      onError(errors);
    }
  })
}

export const resetPassword = (resetPasswordToken, password, onSuccess, onError) => {
  fetch(`/users/password`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        reset_password_token: resetPasswordToken,
        password: password,
        password_confirmation: password,
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      onSuccess(data.user);
    }
    else {
      let errors = [];
      for (const [key, value] of Object.entries(data.errors)) {
        errors.push(`${snakeCaseToTitleCase(key)} ${value}`);
      }
      onError(errors);
    }
  })
}

export const getUser = (
    id,
    successCallback,
    onError
) => {
  fetch(`/api/v1/users/${id}`, {
      headers: {
          "Content-Type": "application/json",
      }
  })
  .then(response => {
    if (response.ok) return response.json();
    return Promise.reject(response.json())
  })
  .then(data => successCallback(data))
  .catch(data => onError(data))
}
