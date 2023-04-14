export const cancelLeadSequenceStep = (
  leadSequenceStepId,
  successCallback
) => {
  fetch(`/api/v1/lead_sequence_steps/${leadSequenceStepId}/cancel`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ })
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}
