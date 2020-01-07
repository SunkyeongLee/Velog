import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md'

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

const InputFormPositioner = styled.div`
    padding-left: 1.75rem;
    padding-right: 1.75rem;
`;

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
    &:hover {
        color: #3cb55c;
        border: 1px solid #3cb55c;
        background: white;
        }
    }
`;

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

const MenuItem = styled.div`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

function VelogLeftItem() {
    return (
        <>
        <VelogLogo> /*벨로그 로고*/
            <div class=".logo">Velog</div>
        </VelogLogo>
        <InputFormPositioner>
            <InputForm>
                <MdSearch />
                <InputValue />
            </InputForm>
        </InputFormPositioner>
        </>
        
    );
}

export default VelogLeftItem;