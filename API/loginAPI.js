const loginAPI = async (email, password) => {
  const response = await fetch("https://localhost:7295/api/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  const { token, user } = await response.json();
  return { token, user };
};

export { loginAPI };
