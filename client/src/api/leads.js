import { objToQueryString } from '../helpers';

export const getLead = (
    id,
    successCallback,
    onError
) => {
  fetch(`/api/v1/leads/${id}`, {
      headers: {
          "Content-Type": "application/json",
      }
  })
  .then(response => response.json())
  .then(data => successCallback(data))
  .catch(data => onError(data))
}

export const getLeadLogs = (
    id,
    successCallback
) => {
  fetch(`/api/v1/leads/${id}/logs`, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const getLeads = (
    params,
    successCallback
) => {
  fetch(`/api/v1/leads?${objToQueryString(params)}`, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const createLead = (
  params,
  successCallback
) => {
  fetch(`/api/v1/leads`, {
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
