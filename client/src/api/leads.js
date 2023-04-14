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
