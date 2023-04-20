export const createLeadImport = (
  params,
  successCallback
) => {
  fetch(`/api/v1/lead_imports`, {
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

export const getLeadImport = (
    id,
    successCallback,
    onError
) => {
  fetch(`/api/v1/lead_imports/${id}`, {
      headers: {
          "Content-Type": "application/json",
      }
  })
  .then(response => response.json())
  .then(data => successCallback(data))
  .catch(data => onError(data))
}
