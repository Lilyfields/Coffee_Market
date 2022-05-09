
import { Badge } from "@material-ui/core";
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import React from "react"
import styled from "styled-components"

const container = styled.div`
    height:60px;
    background-color: #3d0c02;
`;

const Wrapper = styled.dib`
padding: 10px 20px;
display: flex;
align-item: center;
justify-content: space-between;

`;

const left = styled.div`
flex: 1;
`;

const Language = styled.span`
font-size:14px;
cursor: pointer;
`;

const search_container = styled.div`
border: 1px solid white;
display:flex;
align-item:center;
margin: 25px;
padding:5px;

`;
const Input = styled.div`
border: none;
`;


const center = styled.div`
flex:1;
text-align:center;

`;

const Logo = styled.h1`
font-weight: bold;
`;


const right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const menuItems = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left:25px;
`;

const navbar = () => {
    return (
        <container>
            <Wrapper>
                <left>
                    <Language>English</Language>
                    <search_container>
                        input
                        <Search style={{ color: "white", fontSize: 16 }} />
                    </search_container>

                </left>
                <center><Logo>Coffee Market Place</Logo></center>
                <right>

                    <menuItems>REGISTER</menuItems>
                    <menuItems>SIGN IN</menuItems>
                    <menuItems>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingBasketOutlined />
                        </Badge>

                    </menuItems>

                </right>

            </Wrapper>
        </container>
    )
}

export default navbar