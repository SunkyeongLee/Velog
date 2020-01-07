import React from 'react';
import styled from 'styled-components';

const VelogLeftBlock = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    position: fixed;
    width: 18rem;
    background: #fff;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-box-shadow: -6px 0 12px 0 #d6dee4;
    box-shadow: -6px 0 12px 0 #d6dee4;
`;

function velogLeft({ children }) {
    return <VelogLeftBlock>{children}</VelogLeftBlock>;
}

export default velogLeft;