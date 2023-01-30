import styled from "styled-components";

export const MainContainer = styled.main`
    color: var(--primary-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    gap: 2rem;
    padding: 0 1rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .title {
        font-size: 48px;
        font-family: 'Lexend', sans-serif;
        font-weight: 700;
    }

    h1 {
        font-size: 30px;
        font-family: 'Lexend', sans-serif;
        font-weight: 400;
    }

    h2 {
        font-size: 30px;
    }
`;