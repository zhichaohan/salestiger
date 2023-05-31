export const getAccountStatistics = (
    successCallback
) => {
  fetch(`/api/v1/accounts/statistics`, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const getEmailsSent = (
    successCallback
) => {
  fetch(`/api/v1/accounts/emails_sent`, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}
