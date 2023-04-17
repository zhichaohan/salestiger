export const createSequenceStep = (
  sequenceId,
  params,
  successCallback
) => {
  fetch(`/api/v1/sequences/${sequenceId}/sequence_steps`, {
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

export const updateSequenceStep = (
  sequenceStepId,
  params,
  successCallback
) => {
  fetch(`/api/v1/sequence_steps/${sequenceStepId}`, {
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
