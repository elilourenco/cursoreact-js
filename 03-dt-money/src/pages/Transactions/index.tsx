import { useContext, useEffect, useState } from "react";
import { Header } from "../../componets/Header";
import { TransactionsContext } from "../../contesxts/TransactionsContext";
import { Summary } from "../../Summary";
import { dateFormatter } from "../../utills/formatters";
import { SearchForm } from "./Componentes/SearchForm";
import { PriceHightlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction{
    id:number;
    description:string;
    type:"income | outcome";
    price:number;
    category: string;
    createAt:string;
}

export function Transactions(){
    const {transactions} =useContext(TransactionsContext);


    return(
        <div>
            <Header />
            <Summary/>
            <TransactionsContainer>
                <SearchForm />
            <TransactionsTable>
                <tbody>
                    {transactions.map(transaction =>{
                        return(
                            <tr key={transaction.id}>
                        <td width="50%">{transaction.description}</td>
                        <td>
                           <PriceHightlight variant="outcome">
                            {transaction.type =='outcome' && '- '}
                            
                            {priceFormatter.format(transaction.price)}
                            </PriceHightlight>
                        </td>
                        <td>{transaction.category}</td>
                        <td>{dateFormatter.format(new Date(transaction.createAt))}</td>
                    </tr>

                        )
                    })}
                    
                   

                    
                    
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>

        </div>
    )
}