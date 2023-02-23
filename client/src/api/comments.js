export const createComment = (
  answerId,
  params,
  successCallback
) => {
  fetch(`/api/v1/answers/${answerId}/comments`, {
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
