export const updateAccountLead = (
  accountLeadId,
  params,
  successCallback
) => {
  fetch(`/api/v1/account_leads/${accountLeadId}`, {
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

export const createAccountLead = (
  leadId,
  params,
  successCallback
) => {
  fetch(`/api/v1/leads/${leadId}/account_leads`, {
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
