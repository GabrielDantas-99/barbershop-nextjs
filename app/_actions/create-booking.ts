"use server"

import { revalidatePath } from "next/cache"
import { authOptions } from "../_lib/auth"
import { db } from "../_lib/prisma"
import { getServerSession } from "next-auth"

interface CreateBookingParams {
  serviceId: string
  date: Date
}

export const createBooking = async (params: CreateBookingParams) => {
  const user = await getServerSession(authOptions)
  if (!user) {
    throw new Error("Usuário não autenticado")
  }
  await db.booking.create({
    data: { ...params, userId: (user.user as any).id },
  })
  revalidatePath("/barbershops/[id]")
}
