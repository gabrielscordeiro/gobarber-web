import styled from "styled-components";
import {shade} from 'polished';
import signInBackground from "../../assets/sign-in-background.png";

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;

    form{
        width: 340px;
        margin: 80px 0;
        text-align: center;

        h1{
            margin-bottom: 24px;
        }

        input{
            width: 100%;
            background: #232129;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            color: #f4ede8;

            &::placeholder{
                color: #666360;
            }

            & + input{
                margin-top: 8px;
            }
        }

        button{
            width: 100%;
            height: 56px;;
            background: #ff9000;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: #312e38;
            font-weight: 500;
            margin-top: 16px;
            transition: 0.2s all linear;

            &:hover{
                background: ${shade(0.2, '#ff9000')};
            }
        }

        a{
            display: block;
            margin-top: 24px;
            color: #f4ede8;
            text-decoration: none;
            transition: 0.2s all linear;
            
            &:hover{
                color: ${shade(0.2, '#f4ede8')}
            };
        }
    }

    > a{
        display: flex;
        align-items: center;
        margin-top: 24px;
        color: #ff9000;
        text-decoration: none;
        transition: 0.2s all linear;

        svg{
            margin-right: 16px;
        }
        
        &:hover{
            color: ${shade(0.2, '#ff9000')}
        };
    }
`
export const Background = styled.div`
    flex: 1;
    background: url(${signInBackground})no-repeat center;
    background-size: cover;
`