import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        font-family: Helvetica;
        box-sizing:border-box;
    };

    main {
        min-height: 60vh;
        text-align: center;
        padding: 2em;
    };
    
    main h2 {
        margin-bottom: 0.8em;
    };
`;
