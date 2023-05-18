export const createLinkedinSequence = (
  workflowId,
  params,
  successCallback
) => {
  fetch(`/api/v1/workflows/${workflowId}/linkedin_sequences`, {
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

export const getLinkedinSequence = (
    id,
    successCallback,
    onError
) => {
  fetch(`/api/v1/linkedin_sequences/${id}`, {
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

export const addLeadsToLinkedinSequence = (
  sequenceId,
  leadIds,
  teamMemberId,
  successCallback
) => {
  fetch(`/api/v1/linkedin_sequences/${sequenceId}/add_leads`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ lead_ids: leadIds, team_member_id: teamMemberId, })
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}
