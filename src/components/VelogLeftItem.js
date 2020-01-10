import React from 'react';
import styled from 'styled-components';
import { MdSearch, MdAirplanemodeActive, MdInsertEmoticon, MdExposurePlus1 } from 'react-icons/md'

/* 벨로그 왼쪽 영역의 아이템 컴포넌트 */

// 로고
const VelogLogo = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;

    padding: 0 2rem;
    margin-top: 1.75rem;
    margin-bottom: 1.75rem;
    font-size: 2rem;
    line-height: 2rem;
    font-family: Inconsolata;
    color: #212529;
    display: block;
    position: relative;
`;

// 서치바 영역
const InputFormPositioner = styled.div`
    padding-left: 1.75rem;
    padding-right: 1.75rem;
`;

// 서치바 사각형
const InputForm = styled.div`
    -webkit-transition: all .125s ease-in;
    -o-transition: .125s all ease-in;
    transition: all .125s ease-in;
    width: 184px;
    height: 35px;
    border-radius: 4px;
    display: -ms-flexbox;
    display: flex;
    padding-left: .5rem;
    background: #f1f3f5;
    border: 1px solid #dee2e6;
    -ms-flex-align: center;
    align-items: center;
    color: #343a40;
    cursor: pointer;
    &:hover { /* 마우스 오버시 초록색으로 변환 효과 */
        color: #3cb55c;
        border: 1px solid #3cb55c;
        background: white;
        }
    }
`;

// 서치바 입력값
const InputValue = styled.input`
    background: none;
    border: none;
    outline: none;
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-size: .875rem;
    -ms-flex: 1 1;
    flex: 1 1;
    margin-left: .5rem;
    color: inherit;
`;
const MenuPositioner = styled.div`
    list-style: none;
    padding-left: 0;
`;

const Menu = styled.div`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const MainMenuItem = styled.div`
    color: #495057;
    cursor: pointer;
    &:hover { /* 마우스 오버시 초록색으로 변환 효과 */
        color: #3cb55c;
        border-right: 2px solid #3cb55c;
        background: #f1f3f5;
    }

    a {
        padding-top: .75rem;
        padding-bottom: .75rem;
        font-size: 1.125rem;
        padding-left: 1.75rem;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    .item {
        padding-left: 10px;
    }

`;

function VelogLeftItem() {
    return (
        <>
        <VelogLogo>
            <div className=".logo">Velog</div>
        </VelogLogo>
        <InputFormPositioner>
            <InputForm>
                <MdSearch />
                <InputValue />
            </InputForm>
        </InputFormPositioner>

        <MenuPositioner>
            <Menu>
                <MainMenuItem>
                    <a>
                        <MdAirplanemodeActive />
                        <div className="item">트렌딩</div>
                    </a>
                </MainMenuItem>

                <MainMenuItem>
                    <a>
                        <MdInsertEmoticon />
                        <div className="item">최신 포스트</div>
                    </a>
                </MainMenuItem>

                <MainMenuItem>
                    <a>
                        <MdExposurePlus1 />
                        <div className="item">태그 목록</div>
                    </a>
                </MainMenuItem>
            </Menu>
        </MenuPositioner>
        </>
        
    );
}

export default VelogLeftItem;