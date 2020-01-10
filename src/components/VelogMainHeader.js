import React from 'react';
import styled from 'styled-components';
//import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';


const MainHeaderBlock = styled.div`
    padding: 1.75rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
`;

const RightArea = styled.div`
    position: relative;
    left: 1325px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: left;
`;

const UserMenuWrapper = styled.div`
    opacity: 0;
    display: flex;
    position: relative;
    z-index: 10;
    cursor: pointer;
`;

const UserMenu = styled.div`
    padding-top: .25rem;
    padding-bottom: .25rem;
    z-index: 1;
    position: relative;
    font-size: .875rem;
    background: #fff;
    min-width: 10rem;
    border: 1px solid #adb5bd;
`;

const UserMenuPositioner = styled.div`
    position: absolute;
    right: 0;
    top: 4rem;
`;


const Triangle = styled.div`
    position: absolute;
    width: 1rem;
    height: 1rem;
    background: #adb5bd;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    right: 16px;
    z-index: 0;
    top: -5px;
`;

const UserMenuItem = styled.div`
    padding: .5rem;
    font-size: .875rem;
    font-weight: 500;
    cursor: pointer;
    color: #495057;
    display: block;
    &:hover {
        color: #3cb55c;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`;

const Separator = styled.div`
    width: 100%;
    height: 1px;
    background: #e9ecef;
    margin-top: .5rem;
    margin-bottom: .5rem;
}
`;


const UserButton = styled.div`

    position: relative;
    cursor: pointer;
    &:hover {
        ${UserMenuWrapper} {
            opacity: 1;
    }

`;

const Thumbnail = styled.div`

    .thumbnail {
        display: block;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        -o-object-fit: cover;
        object-fit: cover;
        -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.016), 0 3px 6px rgba(0,0,0,.023);
        box-shadow: 0 3px 6px rgba(0,0,0,.016), 0 3px 6px rgba(0,0,0,.023);
        -webkit-transition: all .15s ease-in;
        -o-transition: all .15s ease-in;
        transition: all .15s ease-in;
    }

`;

function VelogMainHeader() {
    return (
        <MainHeaderBlock>
            <RightArea>
                <UserButton>
                    <Thumbnail>
                    <div className="img">
                        <img src="https://upload.wikimedia.org/wikipedia/ko/b/ba/안녕_자두야_최자두.jpg" className="thumbnail" alt="thumbnail" />
                    </div>  
                    </Thumbnail>
                </UserButton>
                <UserMenuWrapper>
                    <UserMenuPositioner>
                        <Triangle />
                            <UserMenu>
                                <UserMenuItem><a>내 벨로그</a></UserMenuItem>
                                <Separator />
                                <UserMenuItem><a>새 글 작성</a></UserMenuItem>
                                <UserMenuItem><a>임시 글</a></UserMenuItem>
                                <Separator />
                                <UserMenuItem><a>설정</a></UserMenuItem>
                                <UserMenuItem><a>로그아웃</a></UserMenuItem>
                            </UserMenu>
                    </UserMenuPositioner>
                </UserMenuWrapper>
            </RightArea>
        </MainHeaderBlock>
    );
}

export default VelogMainHeader;