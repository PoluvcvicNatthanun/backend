import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log({ success: true, message: "ดึงข้อมูลผู้ใช้สำเร็จ", status: 200 });
    return NextResponse.json(
      {
        success: true,
        message: "ดึงข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    console.log({ success: true, message: "เพิ่มข้อมูลผู้ใช้สำเร็จ", status: 201 });
    return NextResponse.json(
      {
        success: true,
        message: "เพิ่มข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}