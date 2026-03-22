const BASE_URL = "https://proofed-api.vercel.app";

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
  // ✅ Both `url` and `instruction` are required
  const params = new URLSearchParams({
    url: repoUrl,
    instruction: instruction
  });

  const response = await fetch(`${BASE_URL}/check_repo?${params}`, {
    method: "POST",
    headers: { "accept": "application/json" }
  });
  if (!response.ok) throw new Error(`Failed: ${response.status}`);
  return await response.json();
}