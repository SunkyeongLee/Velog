import React from 'react';
import styled from 'styled-components';

const TrendingTemplateBlock = styled.div`
    padding-left: 17rem;
    padding-right: 1.75rem;
`;

const TrendingSection = styled.div`
    
    h2 {
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        color: #212529;
    }
`;

const PostCardList = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
    margin-left: -.875rem;
    margin-right: -.875rem;
`;



function VelogTrendingTemplate({ children }) {
    return (
        <TrendingTemplateBlock>
            <TrendingSection>
                <h2>지금 뜨는 포스트</h2>
                <div class="contents">
                    <PostCardList>{children}</PostCardList>
                </div>
            </TrendingSection>

        </TrendingTemplateBlock>
    );

}

export default VelogTrendingTemplate;