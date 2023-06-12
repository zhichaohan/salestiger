import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

export default function EmailsIndex() {
  const [emails, setEmails] = useState();

  useEffect(() => {
    const response = toast.promise(
      fetch(`/api/v1/emails`, {
        headers: {
          "Content-Type": "application/json",
        }
      }),
      {
        pending: 'Loading your emails',
        success: 'Found your emails',
        error: 'An error has occurred'
      }
    );
    response.then(response => response.json())
    .then(data => {
      setEmails(data);
    })
  }, [])

  if (!emails || emails.length === 0) {
    return (
      <></>
    )
  }

  return (
    <>
    </>
  )
}
