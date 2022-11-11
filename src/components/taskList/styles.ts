import  styled  from 'styled-components';

export const Task = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    padding: 1em;
`;

export const Details = styled.div`
    text-align: left;
    h4 {
        font-size: 1.2em;
        margin-bottom: 1em;
    };
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
        margin-bottom: .5em;
        font-size: 1.2em;
        cursor: pointer;
        background-color: #282c34;
        color: #fff;
        padding: .4em;
        transition: .5s;
    };

    & i:hover {
        color: #31dafb;
    };
`;
