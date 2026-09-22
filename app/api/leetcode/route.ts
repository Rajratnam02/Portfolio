import { NextResponse } from "next/server";
import { getLeetCodeData } from "@/lib/leetcode";

export async function GET() {
  try {
    const data = await getLeetCodeData();

    return NextResponse.json(data);
  } catch (error) {
    console.error("LeetCode API Error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch LeetCode data",
        message:
          error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}