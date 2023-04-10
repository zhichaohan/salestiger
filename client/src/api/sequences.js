export const getSequence = (
    id,
    successCallback,
    onError
) => {
  fetch(`/api/v1/sequences/${id}`, {
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

export const addLeadsToSequence = (
  sequenceId,
  leadIds,
  successCallback
) => {
  fetch(`/api/v1/sequences/${sequenceId}/add_leads`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ lead_ids: leadIds })
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}
