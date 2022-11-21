import { Header } from '../../components/Header'
import Summary from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="40%">Description of transaction</td>
              <td>
                <PriceHighlight variant="outcome">
                  - CAD$12,000.00
                </PriceHighlight>
              </td>
              <td>Out</td>
              <td>Nov 21, 2022</td>
            </tr>
            <tr>
              <td width="40%">Description of transaction</td>
              <td>
                <PriceHighlight variant="income">CAD$12,000.00</PriceHighlight>
              </td>
              <td>In</td>
              <td>Nov 21, 2022</td>
            </tr>
            <tr>
              <td width="40%">Description of transaction</td>
              <td>
                <PriceHighlight variant="income">CAD$12,000.00</PriceHighlight>
              </td>
              <td>In</td>
              <td>Nov 21, 2022</td>
            </tr>
            <tr>
              <td width="40%">Description of transaction</td>
              <td>
                <PriceHighlight variant="outcome">
                  - CAD$12,000.00
                </PriceHighlight>
              </td>
              <td>Out</td>
              <td>Nov 21, 2022</td>
            </tr>
            <tr>
              <td width="40%">Description of transaction</td>
              <td>
                <PriceHighlight variant="outcome">
                  - CAD$12,000.00
                </PriceHighlight>
              </td>
              <td>Out</td>
              <td>Nov 21, 2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
