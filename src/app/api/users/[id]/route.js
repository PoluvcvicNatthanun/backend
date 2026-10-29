import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    console.log({ success: true, message: `ดึงข้อมูลผู้ใช้ ${id} สำเร็จ`, status: 200 });
    return NextResponse.json(
      {
        success: true,
        message: `ดึงข้อมูลผู้ใช้ ${id} สำเร็จ`,
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

export async function PUT() {
  try {
    console.log({ success: true, message: "อัปเดตข้อมูลผู้ใช้สำเร็จ", status: 200 });
    return NextResponse.json(
      {
        success: true,
        message: "อัปเดตข้อมูลผู้ใช้สำเร็จ",
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

export async function DELETE() {
  try {
    console.log({ success: true, message: "ลบข้อมูลผู้ใช้สำเร็จ", status: 200 });
    return NextResponse.json(
      {
        success: true,
        message: "ลบข้อมูลผู้ใช้สำเร็จ",
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