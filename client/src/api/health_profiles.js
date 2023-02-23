export const createHealthProfile = (
    params,
    successCallback
) => {
  fetch(`/api/v1/health_profiles`, {
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


export const getHealthProfile = (
    id,
    successCallback,
    onError
) => {
  fetch(`/api/v1/health_profiles/${id}`, {
      headers: {
          "Content-Type": "application/json",
      }
  })
  .then(response => {
    if (response.ok) return response.json();
    return Promise.reject(response.json())
  })
  .then(data => successCallback(data))
  .catch(data => {
    if (onError) {
      onError(data)
    }
  })
}
