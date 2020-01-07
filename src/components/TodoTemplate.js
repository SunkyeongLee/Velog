import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 512px; /*가로*/
    height: 768px; /*세로*/

    position: relative; /*최하단 버튼을 넣어주기 위한 설정*/
    background: white; /*배경색*/
    border-radius: 16px; /*테두리 둥글게 만들기*/
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04); /*그림자, 그림자 투명도*/

    margin: 0 auto; /*페이지 중앙에 위치*/
    margin-top: 96px; /*상단 여백*/
    margin-bottom: 32px; /*하단 여백*/

    display: flex;
    flex-direction: column; /*위에서 아래로*/
`;

function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;