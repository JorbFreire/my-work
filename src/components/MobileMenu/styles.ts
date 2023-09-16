import styled from 'styled-components'
import { Content, Item } from '@radix-ui/react-dropdown-menu'

export const DropdownMenuContent = styled(Content)`
  background-color: #aaa;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 16px;
`

export const DropdownMenuItem = styled(Item)`
  display: flex;
  padding: 8px;
  font-size: 1.8rem;
  cursor: pointer;
`

export const TriggerButton = styled.button`
  border: none;
  line-height: 1;
  padding: 0;
  background: none;
`
