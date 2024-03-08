import styled from "styled-components";

export const Dashboard = styled.main`
    padding-bottom: 100px;
`;

export const Header = styled.header`
    padding: 8px;
    background-color: black;
    color: aliceblue;
    display: flex;
`;

export const Title = styled.h1`
    text-align: center;
    margin: 40px 0;
    color: aliceblue;
`;

export const MovieList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
`;

export const MovieContainer = styled.li`
    background-color: aliceblue;
    padding: 20px;
    margin: 0 20px;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;

    img {
        height: 100px;
    }
`;
