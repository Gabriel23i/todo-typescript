import  styled  from 'styled-components';

export const Task = styled.div`

    display: flex;
    justify-content: space-between;
    max-width: 400px;
    margin: 16px auto;
    border: 1px solid #bbb;
    padding: 1em;
    background-color:#ddd;
    border-radius: 4px;
`;

export const Details = styled.div`

    text-align: left;
    
    p {
        font-size: 1.2em;
        margin-bottom: 1em;
    };

    p span {
        font-weight: bold;
    };
`;

export const Actions = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
        margin-bottom: .5em;
        font-size: 1.2rem;
        cursor: pointer;
        color: #000;
        padding: .4em;
        transition: .15s;
    };

    & i:hover {
        color: #FFD700;
        background-color: #363636;
        border-radius:100%;
    };

    & i:nth-child(2):hover {
        color: #FF0000;
    };
`;
