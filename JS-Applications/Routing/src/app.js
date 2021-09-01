import page from'../node_modules/page/page.mjs';
import{render} from '../node_modules/lit-html/lit-html.js';

import {logout} from './api/data.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import {createPage} from './views/create.js';
import { editPage } from './views/edit.js';
import { registerPage } from './views/register.js';
import {loginPage } from './views/login.js';
import { myPage } from './views/myFurnature.js';

const main = document.querySelector('.container');

page('/',renderMiddleware,dashboardPage);
page('/my-furnature',renderMiddleware,myPage);
page('/details/:id',renderMiddleware,detailsPage);
page('/create',renderMiddleware,createPage);
page('/register',renderMiddleware,registerPage);
page('/login',renderMiddleware,loginPage);
page('/edit/:id',renderMiddleware,editPage);

document.getElementById('logoutBtn').addEventListener('click',async ()=>{
    await logout();
    setUserNav();
    page.redirect('/');
});

setUserNav();

page.start();

function renderMiddleware(context,next){///
    context.render = (content)=>render(content,main);//
    context.setUserNav = setUserNav;
    next();
} 

function setUserNav(){
  const userId = sessionStorage.getItem('userId'); 
  if(userId!=null){
      document.getElementById('user').style.display="inline-block";
      document.getElementById('guest').style.display="none";
  }else{
    document.getElementById('user').style.display="none";
    document.getElementById('guest').style.display="inline-block";
  }
}