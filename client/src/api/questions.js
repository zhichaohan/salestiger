import { objToQueryString } from '../helpers';

export const getQuestions = (
    params,
    successCallback
) => {
  fetch(`/api/v1/questions?${objToQueryString(params)}`, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const getProviderQuestions = (
  providerId,
  params,
  successCallback
) => {
  fetch(`/api/v1/providers/${providerId}/questions?${objToQueryString(params)}`, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const getUserQuestions = (
  params,
  successCallback
) => {
  fetch(`/api/v1/users/questions?${objToQueryString(params)}`, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const createQuestion = (
    params,
    successCallback
) => {
  fetch(`/api/v1/questions`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(params)
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const getQuestion = (
    id,
    successCallback,
    onError
) => {
    fetch(`/api/v1/questions/${id}`, {
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

export const createPaymentIntent = (
    id,
    successCallback,
    onError,
) => {
  fetch(`/api/v1/questions/${id}/payment_intent`, {
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
  id,
  paymentIntentId,
  paymentIntentSecret,
  successCallback
) => {
  fetch(`/api/v1/questions/${id}/confirm_payment`, {
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

export const updateQuestion = (
  questionId,
  params,
  successCallback
) => {
  fetch(`/api/v1/questions/${questionId}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(params)
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}
