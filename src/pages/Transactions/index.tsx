import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Website development</td>
                            <td>
                                <PriceHighlight variant="income">
                                    £ 12,000.00
                                </PriceHighlight>
                            </td>
                            <td>Sell</td>
                            <td>18/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Website development</td>
                            <td>
                                <PriceHighlight variant="income">
                                    £ 12,000.00
                                </PriceHighlight>
                            </td>
                            <td>Sell</td>
                            <td>18/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburger</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - £ 9.00
                                </PriceHighlight>
                            </td>
                            <td>Food</td>
                            <td>29/09/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Website development</td>
                            <td>
                                <PriceHighlight variant="income">
                                    £ 12,000.00
                                </PriceHighlight>
                            </td>
                            <td>Sell</td>
                            <td>18/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}