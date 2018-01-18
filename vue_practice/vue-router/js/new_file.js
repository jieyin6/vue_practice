//定义组件
const Foo ={template:'<div>foo</div>'};
const Bar ={template:'<div>bar</div>'};
//定义路由
const routes =[
	{path:'/foo',component:Foo},
	{path:'/bar',component:Bar}
];
//创建路由实例，然后传routes配置
const router = new VueRouter({
	routes
});
//创建和挂载根实例
const app = new Vue({
	router,
	computed:{
		username(){
			return this.$route.params.username;
		}
	},
	methods:{
		goBack(){
			window.history.length > 1 ?this.$router.go(-1):this.$router.push('/')
		}
	}

}).$mount('#app');


