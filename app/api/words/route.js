import Words from "@/app/models/Words";
import connect from "@/app/utils/bd";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const words = await Words.find();

    return new NextResponse(JSON.stringify(words), { status: 200 });
  } catch (error) {
    return new NextResponse("Ошибка получения определений для поиска из БД", {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newWords = new Words(body);

  try {
    await connect();

    await newWords.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
