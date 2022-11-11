import  styled  from 'styled-components';

export const FormStyles = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;

    input {
        padding: 8px 15px;
        margin-bottom: 1.5em;
        border-radius: 0;
        border: 1px solid #282c34;
        border-radius: 4px;
    };

    input[type='submit'] {
        background-color: #00a000;
        border: 1px solid #282c34;
        color: #000;
        transition: filter 0.2s;
        cursor: pointer;
    };

    input[type='submit']:hover {
        filter: brightness(0.9);
        border-color: #282c34;
    };
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    label {
        font-weight: bold;
        margin-bottom: 0.4em;
    };
`;
