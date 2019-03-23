//Components

import promotionsComponent from './components/promotionsComponent.js'; 
import formComponent from './components/formComponent.js';
import headerComponent from './components/headerComponent.js';


const routes = [
    { path: '/', redirect: {name: 'promotions'}},
    { path: '/promotions', name: 'promotions', component: promotionsComponent },
    { path: '/form', name: 'form', component: formComponent },
    { path: '/header', name: 'header', component: headerComponent }
];

const router = new VueRouter ({
    routes
});

const vm = new Vue ({
    // el: '#app',

    data: {
        message: "Hi from vue!",
    },

    // header: {
    //     name: 'header', component: promotionsComponent,
    // },

    created: function(){
        console.log('hello hello');
    },

    router: router
}).$mount("#app");


