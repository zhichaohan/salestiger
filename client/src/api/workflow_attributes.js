export const createWorkflowAttribute = (
  workflowId,
  params,
  successCallback
) => {
  fetch(`/api/v1/workflows/${workflowId}/workflow_attributes`, {
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
