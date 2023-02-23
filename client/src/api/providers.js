import { snakeCaseToTitleCase } from '../helpers';

export const providerSignIn = (email, password, rememberMe, onSuccess, onError) => {
  fetch(`/providers/sign_in`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...window.utmInfo,
      provider: {
        email: email,
        password: password,
        remember_me: rememberMe ? '1' : '',
      }
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        onSuccess(data.provider);
      }
      else {
        onError(['Invalid email or password. After 10 unsuccessful login attempts you will be locked out.']);
      }
    })
    .catch((error) => {
      onError(['Invalid email or password. After 10 unsuccessful login attempts you will be locked out.']);
    })
}

export const providerLogOut = (successCallback) => {
  fetch(`/users/sign_out`, {
    method: 'DELETE',
  })
  .then(successCallback);
}

export const getProvider = (
    id,
    successCallback,
    onError
) => {
  fetch(`/api/v1/providers/${id}`, {
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

export const getLeaderboard = (successCallback, onError) => {
  fetch(`/api/v1/providers/leaderboard`, {
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

export const updateProvider = (updates, onSuccess, onError) => {
  fetch(`/api/v1/provider`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      provider: {
        ...updates,
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      if (onSuccess) {
        onSuccess(data.provider);
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

export const providerRecoverPassword = (email, onSuccess, onError) => {
  fetch(`/providers/password`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      provider: {
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

export const providerResetPassword = (resetPasswordToken, password, onSuccess, onError) => {
  fetch(`/providers/password`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      provider: {
        reset_password_token: resetPasswordToken,
        password: password,
        password_confirmation: password,
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      onSuccess(data.provider);
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
