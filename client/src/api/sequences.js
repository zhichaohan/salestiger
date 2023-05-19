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
  teamMemberId,
  successCallback
) => {
  fetch(`/api/v1/sequences/${sequenceId}/add_leads`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ lead_ids: leadIds, team_member_id: teamMemberId })
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const createSequence = (
  workflowId,
  params,
  successCallback
) => {
  fetch(`/api/v1/workflows/${workflowId}/sequences`, {
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

export const getSequences = (
    successCallback
) => {
  fetch(`/api/v1/sequences`, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const deleteSequence = (
    id,
    successCallback
) => {
  fetch(`/api/v1/sequences/${id}`, {
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
      }
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}
