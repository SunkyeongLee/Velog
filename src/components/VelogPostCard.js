import React from 'react';
import styled from 'styled-components';

function VelogPostCard() {
    return (
        
                        <PostCard>
                            <a class="thumbnail-wrapper" href="/">
                                <img class="img" src="https://upload.wikimedia.org/wikipedia/ko/b/ba/안녕_자두야_최자두.jpg" alt="최자두" />
                                <div class="white-mask"></div>
                            </a>
                            <CardContent>
                                <a class="user-thumbnail-wrapper">
                                    <img class="img" src="https://upload.wikimedia.org/wikipedia/ko/b/ba/안녕_자두야_최자두.jpg" alt="최자두썸네일" />
                                </a>
                                <div class="content-head">
                                    <div class="between">
                                        <a class="username" href="/">jadu01</a>
                                    </div>
                                    <h3>
                                        <a class="head" href="/">어쩌구 저쩌구</a>
                                    </h3>
                                    <div class="subinfo"></div>
                                </div>
                            </CardContent>
                            

                        </PostCard>
    );
}

export default VelogPostCard;