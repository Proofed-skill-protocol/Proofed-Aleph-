import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { track } = await req.json();

    // Mock an AI generation delay (simulate LLM thinking)
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Determine mock data based on track key
    // For a real integration, you would query OpenAI/Claude here
    let title = "Custom Web3 Task";
    let desc = "Build a dynamic application interacting with GenLayer.";
    let rubricStr = JSON.stringify({
      requirements: "Met core functional requirements",
      cleanliness: "Code is clean and documented",
      polish: "Extra finish and UI styling"
    });
    
    let resources = [
      { title: "Introduction to Smart Contracts", desc: "Understanding the EVM and basics of GenVM execution.", type: "Article", url: "https://docs.genlayer.com", linkLabel: "Read docs" },
      { title: "Frontend Integration Guide", desc: "How to connect a Next.js app to GenLayer endpoints.", type: "Video", url: "https://youtube.com", linkLabel: "Watch tutorial" }
    ];

    if (track === 'frontend') {
      title = "Decentralized Frontend Challenge";
      desc = "Build a single-page React app that dynamically reads states from GenLayer and displays active validators.";
      resources.push({ title: "GenLayerJS Quickstart", desc: "Setting up genlayer-js and Next.js.", type: "Guide", url: "https://docs.genlayer.com/api-references/genlayer-js", linkLabel: "View quickstart" });
    } else if (track === 'contracts') {
      title = "Intelligent Contract Deployer";
      desc = "Write, compile, and deploy a Python-based intelligent contract capable of fetching web data via GenVM.";
      resources.push({ title: "GenVM Python SDK", desc: "Writing intelligent contracts securely.", type: "Guide", url: "https://mugen.genlayer.com", linkLabel: "Read docs" });
    }

    // Generate a unique challenge ID
    const randomId = Math.random().toString(36).substring(2, 8);
    const challengeId = `${track}-${randomId}`;

    return NextResponse.json({
      resources,
      challenge: {
        id: challengeId,
        title: title,
        description: desc,
        rubric: rubricStr
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
