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
