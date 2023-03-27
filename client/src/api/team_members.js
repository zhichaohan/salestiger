export const getTeamMember = (
    id,
    successCallback,
    onError
) => {
  fetch(`/api/v1/team_members/${id}`, {
      headers: {
          "Content-Type": "application/json",
      }
  })
  .then(response => response.json())
  .then(data => successCallback(data))
  .catch(data => onError(data))
}

export const updateTeamMember = (
  teamMemberId,
  params,
  successCallback
) => {
  fetch(`/api/v1/team_members/${teamMemberId}`, {
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
