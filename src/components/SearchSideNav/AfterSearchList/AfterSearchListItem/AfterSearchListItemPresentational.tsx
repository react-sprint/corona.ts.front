import React from "react";
import styled from '@emotion/styled';
import { IAfterSearchListItemProps } from "./interface";


function AfterSearchListItemPresentational({
    locationDetailVisible,
    setLocationDetailVisible,
    handleOnLocationDetailClick
}:IAfterSearchListItemProps) {
  return (
    <>
        <ItemWrapper>
            <ItemRowWrapper>
                <ItemTitle>리스트 아이템</ItemTitle>
                <ItemCategory>카테고리</ItemCategory>
            </ItemRowWrapper>
            <ItemRowWrapper>
                <ItemShortLocation>상세주소</ItemShortLocation>
                <LocationDetailButton onClick={handleOnLocationDetailClick}>자세히</LocationDetailButton>
            </ItemRowWrapper>
            <ItemRowWrapper>
                <div>아이콘들</div>
            </ItemRowWrapper>
        </ItemWrapper>
    </>
  )
}

const ItemWrapper = styled.li`
    height:132px;
    padding: 18px 25px;
    border-top:1px solid rgba(143,143,143,0.3);
    
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const ItemRowWrapper = styled.div`
    display:flex;
    align-items:center;
`
const ItemTitle = styled.span`
    font-weight: 700;
    letter-spacing: -1px;
    margin-right: 6px;
    font-size:1.2rem;
    color: #0068c3;
    margin-right: 6px;
`
const ItemCategory = styled.span`
    color: #8f8f8f;
`
const ItemShortLocation = styled.span`
    margin-right:6px;
`
const LocationDetailButton = styled.button`
    border:0;
    outline:0;
    background-color:white;
`
export default AfterSearchListItemPresentational;