import ServiceItem from "@/app/_components/service-item"
import PhoneItem from "@/app/_components/phone-item"
import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { MapPinIcon } from "lucide-react"
import { notFound } from "next/navigation"
import Header from "@/app/_components/header"
import Image from "next/image"
import { quickSearchOptions } from "@/app/_constants/search"
import Link from "next/link"
import BookingItem from "@/app/_components/booking-item"
import Search from "@/app/_components/search"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getConfirmedBookings } from "@/app/_data/get-confirmed-bookings"

interface BarbershopPageProps {
  params: { id: string }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const session = await getServerSession(authOptions)

  const confirmedBookings = await getConfirmedBookings()
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })
  if (!barbershop) {
    return notFound()
  }
  return (
    <div>
      <div>
        <Header />
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center gap-1">
            <h2 className="text-xl font-bold">Olá,</h2>
            <h2 className="text-xl font-bold text-primary">
              {session?.user ? session.user.name : "bem vindo"}!
            </h2>
          </div>
          <p className="text-right text-sm leading-4">
            <span className="capitalize">
              {format(new Date(), "EEE,", { locale: ptBR })}
            </span>
            <br />
            <span className="whitespace-nowrap capitalize">
              {format(new Date(), "dd 'de' MMMM", { locale: ptBR })}
            </span>
          </p>
        </div>
      </div>
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop?.name}
          src={barbershop?.imageUrl}
          fill
          className="rounded-t-3xl object-cover"
        />
        <div className="absolute grid h-full w-full place-items-center rounded-t-3xl bg-black/70">
          <div className="flex w-full flex-col items-center p-4 text-white">
            <h2 className="text-2xl font-bold">{barbershop?.name}</h2>
            <div className="flex items-center gap-2">
              <MapPinIcon className="text-primary" size={24} />
              <p className="text-sm">{barbershop?.address}</p>
            </div>
            {/* BUSCA */}
            <div className="mt-6 w-full">
              <Search />
            </div>
          </div>
        </div>
      </div>
      {/* BUSCA RÁPIDA */}
      <div className="mt-2 flex gap-3 overflow-x-scroll p-5 [&::-webkit-scrollbar]:hidden">
        {quickSearchOptions.map((option) => (
          <Button
            className="gap-2"
            variant="secondary"
            key={option.title}
            asChild
          >
            <Link href={`/barbershops?service=${option.title}`}>
              <Image
                style={{ fill: "black" }}
                className="fill-current text-zinc-700"
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Link>
          </Button>
        ))}
      </div>
      <div className="p-5 pt-2">
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 text-xs font-bold uppercase text-gray-400">
              Agendamentos
            </h2>
            {/* AGENDAMENTO */}
            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem key={booking.id} booking={booking} />
              ))}
            </div>
          </>
        )}
      </div>
      {/* DESCRIÇÃO */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>
      {/* SERVIÇOS */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              barbershop={barbershop}
            />
          ))}
        </div>
      </div>
      {/* CONTATO */}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
