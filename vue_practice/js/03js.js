var app =new Vue({
	el:"#app",
	data:{
		list:[
		{
			id:1,
			name:"iphone7",
			price:6188,
			count:1,
			checkboxx:true
		},
		{
			id:2,
			name:"ipad pro",
			price:5888,
			count:1,
			checkboxx:true
		},
		{
			id:3,
			name:"macbook pro",
			price:21488,
			count:1,
			checkboxx:true
		}
		],
		checked:true
		
	},
	computed:{
		totalPrice:function(){
			var total = 0;
			for (var i = 0 ; i < this.list.length ; i++) {
				if(this.list[i].checkboxx){
				var item = this.list[i];
				total += item.price * item.count;
				}
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,",");
		}
	},
	methods:{
		handleReduce:function(index){
			if(this.list[index].count===1) return;
			this.list[index].count--;
		},
		handleAdd:function(index){
			this.list[index].count++;
		},
		handleRemove:function(index){
			this.list.splice(index,1);
		},
		removePick:function(){
			this.picked=false;
		},
		bothPick:function(){
			console.log(this.checked);
			if(this.checked == true){
				for(var i = 0 ;i < this.list.length;i++){
					this.list[i].checkboxx=false;
				}
				
			}else{
				 for(var j = 0 ;j < this.list.length;j++){
					this.list[j].checkboxx=true;
					
				}
			}
		},
		delBothPick:function(){
			if(this.checked == true){
				this.checked = false;
			}
		}
		
	}
	
});
