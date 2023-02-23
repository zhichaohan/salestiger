export const createAnswer = (
  questionId,
  params,
  successCallback
) => {
  fetch(`/api/v1/questions/${questionId}/answers`, {
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

export const upvoteAnswer = (
  answerId,
  successCallback
) => {
  fetch(`/api/v1/answers/${answerId}/answer_upvotes`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({})
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}

export const downvoteAnswer = (
  answerId,
  successCallback
) => {
  fetch(`/api/v1/answers/${answerId}/answer_upvotes`, {
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({})
  })
  .then(response => response.json())
  .then(data => {
    successCallback(data);
  })
}
