import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();
    if (!amount || typeof amount !== "number" || amount < 1) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      return NextResponse.json({ error: "Razorpay keys not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env.local and Vercel/Netlify env." }, { status: 500 });
    }
    const paise = Math.round(amount * 100);
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: paise,
        currency: "INR",
        receipt: `ab_${Date.now()}`,
        notes: { restaurant: "APNA BAITHAK" },
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json({ error: data.error?.description || "Failed to create order", details: data }, { status: res.status });
    }
    return NextResponse.json({ id: data.id, amount: data.amount, currency: data.currency });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Server error" }, { status: 500 });
  }
}
