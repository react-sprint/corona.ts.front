import React, { useState } from "react";
import styled from '@emotion/styled';
import { IAfterSearchListItemProps,locationDetailProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react";

function AfterSearchListItemPresentational({
    // locationDetailVisible,
    // handleOnLocationDetailClick
}:IAfterSearchListItemProps) {

  const [locationDetailVisible,setLocationDetailVisible] = useState(false);
  
  const handleOnLocationDetailClick = (): void => {
      setLocationDetailVisible(!locationDetailVisible);
  };

  return (
    <>
        <ItemWrapper>
            <ItemRowWrapper>
                <ItemTitle>리스트 아이템</ItemTitle>
                <ItemCategory>카테고리</ItemCategory>
            </ItemRowWrapper>
            <ItemRowWrapper>
                <ItemShortLocation>상세주소</ItemShortLocation>
                <LocationDetailButton onClick={handleOnLocationDetailClick} locationDetailVisible={locationDetailVisible}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </LocationDetailButton>
                <LocationDetailWrapper locationDetailVisible={locationDetailVisible} >
                    <LocationDetailRow>
                        <LocationDetailCategory>도로명</LocationDetailCategory>
                        <span>경기 용인시 수지구 용구대로 2794 대하빌딩 309호</span>
                    </LocationDetailRow>
                    <LocationDetailRow>
                        <LocationDetailCategory>지번</LocationDetailCategory>
                        <span>죽전동 915-3 대하빌딩 309호</span>
                    </LocationDetailRow>
                </LocationDetailWrapper>
            </ItemRowWrapper>
            <ItemRowWrapper>
                <IconWrapper>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </IconWrapper>
            </ItemRowWrapper>
        </ItemWrapper>
    </>
  )
}

const ItemWrapper = styled.li`
    height:132px;
    padding: 18px 25px;
    border-top:1px solid rgba(143,143,143,0.3);
    position: relative;
    
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    &:hover{
        background-color:rgba(143,143,143,0.3);
    }


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
    cursor: pointer;
`
const ItemCategory = styled.span`
    color: #8f8f8f;
`
const ItemShortLocation = styled.span`
    margin-right:6px;
    text-align:center;
`
const rotateKeyframe = keyframes`
    from {
        transform:rotate(0deg);
    }to{ 
        transform:rotate(180deg);
    }

`
const unRotateKeyframe = keyframes`
    from {
        transform:rotate(180deg);
    }to{ 
        transform:rotate(0deg);
    }

`
const LocationDetailButton = styled.button`
    border:0;
    outline:0;
    margin-bottom:3px;
    background-color:rgba(255,255,255,0);
    cursor: pointer;
    animation: ${({locationDetailVisible}:locationDetailProps)=> locationDetailVisible ?rotateKeyframe : unRotateKeyframe } 0.3s linear both;
`

const LocationDetailWrapper = styled.div`
    position: absolute;
    top:63%;
    border: 1px solid rgba(143,143,143,0.3);
    padding:5px 10px;
    z-index:1;
    background-color: white;

    display:${({locationDetailVisible}:locationDetailProps)=> locationDetailVisible ? "flex" : "none" };
    flex-direction: column;
`
const LocationDetailRow = styled.div`
    margin:5px;

    display:flex;
    align-items:center;
`
const LocationDetailCategory = styled.span`
    font-size:12px;
    color: rgba(143,143,143,0.7);
    margin-right:4px;
    padding: 3px 5px;
    border: 1px solid rgba(143,143,143,0.3);
    font-weight:600;
    line-height:1.2;

    display: flex;
    justify-content:center;
    align-items: center;

`

const IconWrapper = styled.div`
    cursor: pointer;
    border: 1px solid rgba(143,143,143,0.3);
    padding: 3px 8px;
    border-radius: 12px;
    &:hover{
        border: 1px solid blue;

    }
    & svg path{
        fill:#19ce60;
    }
`
export default AfterSearchListItemPresentational;