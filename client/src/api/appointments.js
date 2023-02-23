import { objToQueryString } from '../helpers';

export const getAppointments = (
    params,
    successCallback
) => {
  fetch(`/api/v1/appointments?${objToQueryString(params)}`, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const createAppointment = (
  providerId,
  params,
  successCallback
) => {
  fetch(`/api/v1/providers/${providerId}/appointments`, {
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

export const completeAppointment = (id, successCallback) => {
  fetch(`/api/v1/appointments/${id}/complete`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}
