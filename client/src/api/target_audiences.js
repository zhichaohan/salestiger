export const getTargetAudience = (
    id,
    successCallback,
    onError
) => {
  fetch(`/api/v1/target_audiences/${id}`, {
      headers: {
          "Content-Type": "application/json",
      }
  })
  .then(response => response.json())
  .then(data => successCallback(data))
  .catch(data => onError(data))
}

export const updateTargetAudience = (
  id,
  params,
  successCallback
) => {
  fetch(`/api/v1/target_audiences/${id}`, {
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
