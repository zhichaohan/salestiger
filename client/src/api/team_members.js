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
  .then(response => {
    if (response.ok) return response.json();
    return Promise.reject(response.json())
  })
  .then(data => successCallback(data))
  .catch(data => onError(data))
}
