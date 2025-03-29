import styled from 'styled-components';

export const SMainPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    color: #fff;
    min-height: 100vh;
    padding: 20px;
`;

export const Header = styled.h1`
    font-size: 3rem;
    margin-bottom: 20px;
    color: #1DB954;
`;

export const SearchBar = styled.input`
    width: 100%;
    max-width: 600px;
    padding: 12px 20px;
    font-size: 1.2rem;
    border: 2px solid #1DB954;
    border-radius: 25px;
    background-color: #282828;
    color: #fff;
    outline: none;
    transition: all 0.3s ease;

    &:focus {
        border-color: #1ed760;
        background-color: #3a3a3a;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
`;
