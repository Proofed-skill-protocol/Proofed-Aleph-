import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, challenge_title, score, feedback, walletAddress, timestamp } = body;

    if (!name || !challenge_title || score === undefined || !walletAddress) {
      return NextResponse.json({ error: 'Missing required badge fields' }, { status: 400 });
    }

    const pinataApiKey = process.env.PINATA_API_KEY;
    const pinataApiSecret = process.env.PINATA_API_SECRET;
    const pinataJwt = process.env.PINATA_JWT;

    if ((!pinataApiKey || !pinataApiSecret) && !pinataJwt) {
      console.warn('Pinata API credentials not configured');
      return NextResponse.json({ error: 'IPFS upload not configured on server' }, { status: 500 });
    }

    const data = JSON.stringify({
      pinataOptions: {
        cidVersion: 1
      },
      pinataMetadata: {
        name: `Proofed_Badge_${walletAddress.slice(0, 6)}_${Date.now()}.json`
      },
      pinataContent: {
        name,
        challenge_title,
        score,
        feedback,
        walletAddress,
        timestamp: timestamp || new Date().toISOString()
      }
    });

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (pinataJwt) {
      headers['Authorization'] = `Bearer ${pinataJwt}`;
    } else {
      headers['pinata_api_key'] = pinataApiKey!;
      headers['pinata_secret_api_key'] = pinataApiSecret!;
    }

    const res = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
      method: 'POST',
      headers,
      body: data
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Pinata upload failed:', err);
      return NextResponse.json({ error: 'Pinata upload failed' }, { status: 500 });
    }

    const result = await res.json();
    return NextResponse.json({
      cid: result.IpfsHash,
      url: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`
    });

  } catch (err: any) {
    console.error('IPFS API error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
