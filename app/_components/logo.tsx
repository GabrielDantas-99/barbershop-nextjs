import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex h-12 align-bottom font-mono text-2xl">
      <div className="mr-1 flex h-full items-center">
        <Image alt="camarao" src={"/camarao.png"} height={15} width={50} />
      </div>
      <div className="flex h-full items-end">
        <span className="font-semibold uppercase text-primary">Poti</span>
        <span className="font-light">Barber</span>
      </div>
    </div>
  )
}
