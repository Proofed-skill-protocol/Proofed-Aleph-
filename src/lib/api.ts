export async function getInstruction(theme: string): Promise<string> {
  return theme; // pass theme directly as the goal
}

export async function checkRepo(repoUrl: string, instruction: string): Promise<any> {
  const response = await fetch(`/api/evaluate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ githubUrl: repoUrl, goal: instruction }),
  });
  if (!response.ok) throw new Error(`Failed: ${response.status}`);
  return await response.json();
}