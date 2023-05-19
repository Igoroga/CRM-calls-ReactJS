import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AudioCloseSVG, SearchSVG } from '../commons/svgStorage'

const SearchStyled = styled.div<{isSearchNumber:boolean}>`
display: grid;
grid-template-columns: 16px max-content;
grid-gap: 12px;
align-items: center;
position: relative;
overflow: visible;
cursor: pointer;
.search__input{
  position: absolute;
  display: ${({isSearchNumber})=>isSearchNumber?'blok':'none'};
  z-index: 3;
  border-radius: 48px;
  & input{
    width: 482px;
    height: 40px;
    border: 1px solid #EAF0FA;
    border-radius: 48px;
    outline: none;
    padding: 10px 46px;
    font-size: 14px;
    font-weight: 400;
    font-family: 'SFProDisplay';
    &:focus{
      border-color: #002CFB;
    }
  }
  & .close, .search{
    position: absolute;
    top: 0;
    z-index: 4;
    width: 46px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg{
      width: 14px;
      height: 14px;
    }
  }
  & .close{
    right: 0px;
    &:hover path{
      fill: var(--color-blue);
    }
  }
  & .search{
    left: 0px;
  }
}
&:hover{
  color: var(--color-blue);
  &.search__icon path{
    fill: var(--color-blue);
  }
}
`

export const Search: FC<any> = (props) => {
  const { defaultCallsList, setCallsList } = props
  const filterCalls = (searchValue:any, list:any) => {
    if (!searchValue) {
      return list;
    }
    return list.filter((call:any) =>
      call.from_number.includes(searchValue)
    );
  }
  const [searchValue,setSearchValue] = useState('')
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const serchHandler = ()=>{
    setIsSearch(isSearch?false:true)
    setSearchValue('')
  }
  useEffect(()=>{
    const filteredCalls = filterCalls(searchValue,defaultCallsList)
    setCallsList(filteredCalls)
  },[searchValue])
  return (
    <SearchStyled isSearchNumber={isSearch}>
      <div className="search__icon" onClick={serchHandler}><SearchSVG /></div>
      <div className="search__placeholder" onClick={serchHandler}>Поиск по звонкам</div>
      <div className="search__input">
        <input type='number' value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
        <div className="search"><SearchSVG /></div>
        <div className="close" onClick={serchHandler}><AudioCloseSVG /></div>
      </div>
    </SearchStyled>
  )
}