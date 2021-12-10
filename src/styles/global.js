import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #202124;
        --text-color:#bdc1c6;
        --border-color:#5f6368;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        color:var(--text-color);
    }



    html{ 
    @media(max-width: 1080px){
        font-size:93,75%;
    }

    @media(max-width:720px){
        font-size: 87,5%;
    }
    }

    a{
        cursor:pointer;
    }

    input, select, option{
        background:var(--background);
        border:solid 1px var(--border-color);
        border-radius:6px;
        color: var(--text-color);
    }

    :focus {outline:none;}
    
`
