import { SearchFormContainer } from "./styles";
//import {MagnifyingGlass} from "./styles"

export function SearchForm(){
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações"/>
            <button type ="submit">Buscar</button>
        </SearchFormContainer>
    )
}