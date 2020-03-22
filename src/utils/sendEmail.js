const sendEmail = async data => {
  if (data.favColor) {
    return
  }
  const response = await fetch("/.netlify/functions/sendEmail", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return await response
}

export default sendEmail
