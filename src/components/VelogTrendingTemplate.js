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

const PostCard = styled.div`
    margin: .875rem;
    width: calc((100% - 8.75rem) / 5);
    position: relative;
    background: #fff;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.05);
    box-shadow: 0 0 4px rgba(0,0,0,.05);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: calc(33.333% - 1.75rem);

    .thumbnail-wrapper {
        width: 100%;
        padding-top: 52.63%;
        position: relative;
        display: block;
    }

    a {
        width: 100%;
        padding-top: 52.63%;
        position: relative;
        display: block;
        text-decoration: none;
        color: inherit;
    }

    .thumbnail-wrapper img {
        background: #dee2e6;
        -o-object-fit: cover;
        object-fit: cover;
        display: block;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .white-mask {
        position: absolute;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: hsla(0,0%,100%,.25);
        opacity: 0;
        -webkit-transition: all .125s ease-in;
        -o-transition: .125s all ease-in;
        transition: all .125s ease-in;
    }

`;

const CardContent = styled.div`
    display: -ms-flexbox;
    display: flex;
    -webkit-box-shadow: 0 -4px 16px rgba(0,0,0,.05);
    box-shadow: 0 -4px 16px rgba(0,0,0,.05);
    background: #fff;

    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex: 1 1;
    flex: 1 1;
    position: relative;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 2rem 1rem;
    color: #343a40;

    .user-thumbnail-wrapper {
        position: absolute;
        right: 1rem;
        top: 0;
        width: 3.5rem;
        height: 3.5rem;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-radius: 50%;

        display: -ms-flexbox;
        display: flex;
        -webkit-box-shadow: 0 -4px 16px rgba(0,0,0,.05);
        box-shadow: 0 -4px 16px rgba(0,0,0,.05);
        background: #fff;
    }

    .user-thumbnail-wrapper img {
        display: block;
        width: 2.75rem;
        height: 2.75rem;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 50%;
        padding: 0px;
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }

    .content-head {
        position: relative;
        height: 8.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #e9ecef;
    }
    
    .content-head .between {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: .5rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .content-head .between .username {
        font-size: .875rem;
        font-weight: 600;
        color: #3cb55c;
    }

    .h3 {
        display: block;
        margin: 0;
        font-size: 1.25rem;
        line-height: 2rem;
        max-height: 4rem;
        font-weight: 600;
        overflow: hidden;
    }

    .content-head subinfo {
            font-size: .875rem;
    margin-top: .5rem;
    color: #8aa6c1;
    }

`;


function VelogTrendingTemplate() {
    return (
        <TrendingTemplateBlock>
            <TrendingSection>
                <h2>지금 뜨는 포스트</h2>
                <div class="contents">
                    <PostCardList />
                </div>

            </TrendingSection>

        </TrendingTemplateBlock>
    );

}

export default VelogTrendingTemplate;