import Modal from 'react-modal'
import { Container } from './styles'

Modal.setAppElement('#root')

interface NewTransactionModalPorps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalPorps) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName='react-modal-overlay'
    className='react-modal-content'
  >
    <Container>
      <h2>Cadastrar transação</h2>

      <input
        placeholder='Título'
      />

      <input
        type='number'
        placeholder='Valor'
      />

      <input
        placeholder='Categoria'
      />

      <button type="submit">Cadastrar</button>
    </Container>
  </Modal>
  )
}