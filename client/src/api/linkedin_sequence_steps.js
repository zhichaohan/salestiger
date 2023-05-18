export const createLinkedinSequenceStep = (
  sequenceId,
  params,
  successCallback
) => {
  fetch(`/api/v1/linkedin_sequences/${sequenceId}/linkedin_sequence_steps`, {
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

export const updateLinkedinSequenceStep = (
  sequenceStepId,
  params,
  successCallback
) => {
  fetch(`/api/v1/linkedin_sequence_steps/${sequenceStepId}`, {
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
