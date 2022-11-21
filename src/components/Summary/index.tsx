import { ArrowCircleUp, CurrencyDollar, ArrowCircleDown } from 'phosphor-react'

import { SummaryCard, SummaryContainer } from './styles'

export default function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>In</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>CAD$16,550.00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Out</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>CAD$16,550.00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>CAD$16,550.00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
