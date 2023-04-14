export const createEmail = (
    params,
    successCallback
) => {
  fetch(`/api/v1/emails`, {
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

export const getEmail = (
    id,
    successCallback,
    onError
) => {
  fetch(`/api/v1/emails/${id}`, {
      headers: {
          "Content-Type": "application/json",
      }
  })
  .then(response => response.json())
  .then(data => successCallback(data))
  .catch(data => onError(data))
}

export const updateEmail = (
  emailId,
  params,
  successCallback
) => {
  fetch(`/api/v1/emails/${emailId}`, {
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
