import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    // ดึงข้อมูลผู้ใช้ (แนะนำให้ระบุเฉพาะคอลัมน์ที่ต้องใช้ และไม่ควร SELECT password ออกไป)

    // หรือหากต้องการดึงทุกคอลัมน์:
    // const [rows] = await db.query('SELECT * FROM tbl_users');

    return NextResponse.json({
      status: 'ok',
      total: rows.length,
      data: rows,
    });
  } catch (err) {
    console.error('Database query error:', err);
    return NextResponse.json(
      { error: 'Database error', details: err.message },
      { status: 500 }
    );
  }
}