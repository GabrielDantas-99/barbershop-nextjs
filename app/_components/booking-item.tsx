import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

const BookingItem = () => {
  return (
    <>
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>
      <Card>
        <CardContent className="flex justify-between p-0">
          {/* ESQUERDA */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de Cabelo</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png" />
              </Avatar>
              <p className="text-sm">Barbearia Teófilo</p>
            </div>
          </div>
          {/* DIREITA */}
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">05</p>
            <p className="text-sm">15:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
