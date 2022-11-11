import  styled  from 'styled-components';

export const ModalStyle = styled.div`

    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 500px;
    height: 400px;
    z-index: 1;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 4px;

    h2 {
        margin-bottom: 1em;
    };

    form {
        width: 90%;
    };
`;

export const Fade = styled.div`

    width: 100%;
    height: 100%;
    min-height:1046px;
    position: absolute;
    background-color: #000;
    opacity: 0.3;
`;
