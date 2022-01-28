import React from 'react';
import Wallet from '../partials/Wallet';
import Footer from '../partials/Footer';
// import { createGlobalStyle } from 'styled-components';

//IMPORT DYNAMIC STYLED COMPONENT
import { StyledHeader } from '../Styles';
//SWITCH VARIABLE FOR PAGE STYLE
const theme = 'GREYLOGIN'; //LIGHT, GREY, RETRO

const WalletPage= () => (
<div className="greyscheme">
<StyledHeader theme={theme} />
  <section className='jumbotron breadcumb no-bg' >
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center'>Wallet</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
    <Wallet/>
  </section>

  <Footer />
</div>

);
export default WalletPage;