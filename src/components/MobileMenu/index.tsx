import {
  Root as DropdownMenuRoot,
  Trigger as DropdownMenuTrigger,
  Portal as DropdownMenuPortal,
} from '@radix-ui/react-dropdown-menu'

import { DropdownMenuContent, DropdownMenuItem, TriggerButton } from './styles'

export default function MobileMenu() {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <TriggerButton className="IconButton" aria-label="Customise options">
          +
        </TriggerButton>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem>
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  )
}
