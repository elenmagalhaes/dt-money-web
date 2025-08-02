import * as Dialog from '@radix-ui/react-dialog'
import logo from 'assets/logo.svg'
import NewTransactionModal from 'components/NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderContent>
				<img src={logo} alt="Logo" />

				<Dialog.Root>
					<Dialog.Trigger asChild>
						<NewTransactionButton>Nova transação</NewTransactionButton>
					</Dialog.Trigger>
					<NewTransactionModal />
				</Dialog.Root>

			</HeaderContent>
		</HeaderContainer>
	)
}

export default Header
