import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import SidebarSheet from "./sidebar-sheet"
import Logo from "./logo"

const Header = () => {
  return (
    <Card className="rounded-t-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Logo />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
