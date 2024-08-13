import { CSSProperties } from "react"
import { InternalModifiersElement, StyledElement } from "react-day-picker"

export const CALENDAR_STYLE:
  | Partial<Omit<StyledElement<CSSProperties>, InternalModifiersElement>>
  | undefined = {
  head_cell: {
    width: "100%",
    textTransform: "capitalize",
  },
  cell: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
  nav_button_previous: {
    width: "32px",
    height: "32px",
  },
  nav_button_next: {
    width: "32px",
    height: "32px",
  },
  caption: {
    textTransform: "capitalize",
  },
}
