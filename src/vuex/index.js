import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from '@/router'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		items:[],
		it:{},
		index:0,
		path: ['/', '/stores', '/money/login', '/menu', 
			   '/money/register', '/money/starbucks-rewards', '/money/activity', '/money/rewards', '/money/profile',
			   '/menu/beverages', '/menu/food', '/menu/coffee', '/menu/merchandise', '/account/profile/svc'
			  ],
		
		// actives: [true, false, false, false, false],

		// UserID: '',
		// NickName: ''
	},
	mutations: {
		detail(state,it){
			state.it=it;
		},
		pageRedir(state, item){
			let routerPath = state.path[item];
			if(!routerPath){
				console.log('Router Path does not exist !');
			}
			// if(item == '3' || item == '4'){
			// 	state.AccountView = '';
			// }
			VueRouter.push({path:routerPath});
		},
		index(state,i){
			state.index=i;
			console.log(state.index);
			
		},
		items(state,it){
			state.items=it;
			console.log(state.items);
		}
    }
	
})

export default store;