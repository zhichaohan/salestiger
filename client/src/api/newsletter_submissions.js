export const createSubmission = (
  params,
  successCallback
) => {
  fetch(`/api/v1/newsletter_submissions`, {
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
