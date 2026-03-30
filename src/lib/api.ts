const BASE_URL = " ";

export async function getInstruction(theme: string): Promise<string> {
  const url = `${BASE_URL}/get_instruction?theme=${encodeURIComponent(theme)}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "accept": "application/json" }
  });
  if (!response.ok) throw new Error(`Failed: ${response.status}`);
  const data = await response.json();
  return data.instruction;
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