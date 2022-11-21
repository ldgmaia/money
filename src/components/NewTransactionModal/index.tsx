import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="text" placeholder="Amount" required />
          <input type="text" placeholder="Category" required />

          <button type="submit">Add</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
