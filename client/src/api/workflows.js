export const getWorkflow = (
    id,
    successCallback,
    onError
) => {
  fetch(`/api/v1/workflows/${id}`, {
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
