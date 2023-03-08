export const createLandingPageContacts = (
  params,
  successCallback
) => {
  fetch(`/api/v1/landing_page_contacts`, {
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
