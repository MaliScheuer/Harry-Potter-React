import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {box-sizing: border-box;
}

body {
    margin: 0;
    font-family: sans-serif;
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    background-color: var(--lila);
    color: white; 
}

:root{
    --gryffindor: #9c1203;
    --hufflepuff: #e3a000;
    --slytherin: #033807;
    --ravenclaw: #00165e;
    --lila: #2d004d;
}

`