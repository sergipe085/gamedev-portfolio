import styled from "styled-components";

export const MainContainer = styled.main`
    color: var(--primary-text);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    padding: 2rem 2rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    
    .title {
        font-size: 48px;
        font-family: 'Lexend', sans-serif;
        font-weight: 700;
    }

    .text-container {
        display: flex;
        align-items: flex-start;
        gap: 2rem;
        font-size: large;
        margin-top: 1rem;
        padding-left: 2rem;

        @media only screen and (max-width: 600px) {
            padding-left: 0;
        }

        div {
            display: flex;
            align-items: flex-start;
        }
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