import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,*::before,*::after {padding:0;margin:0;border:0;box-sizing:border-box;overflow:hidden;}
ul,ol,li {list-style: none;}
a {text-decoration: none; color: inherit;}
h1,h2,h3,h4,h5,h6 {font-weight: inherit; font-size: inherit;}

input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type='number'], input[type="number"]:hover, input[type="number"]:focus {
  appearance: none;
  -moz-appearance: textfield;
}

select{
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  border: none;
  outline:none;
  background-color: transparent;
}
select::-ms-expand{
  display: none;
}

:root{
  --bg-color-navbar: #091336;
  --bg-color-header: #FFFFFF;
  --bg-color-main: #E5E5E5;
  --bg-color-btn: #005FF8;
  --color-yellow: #FFD500;
  --color-green: #28A879;
  --color-red: #EA1A4F;
  --color-blue: #002CFB;
  --color-active: #fff;
  --color-not-active: #ffffff99;
  --color-light-green: #DBF8EF;
  --color-light-red: #FEE9EF;
  --color-light-blue: #D8E4FB;
}
[class*=__container]{
  max-width: 1440px;
  margin: 0 auto;
}

`