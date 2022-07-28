( () => {
	window.addEventListener("load", function(event){
		function shortest(items){
			if(items.length == 1) return item[0];
			var s = items[0];
			for(var i = 0; i < items.length; i++){
				console.log([s.clientHeight, items[i].clientHeight])
				if(items[i].clientHeight < s.clientHeight)
					s = items[i];
			}
			console.log(`I think ${s.id} is shortest`);
			return s;
		}

		var root = document.getElementsByClassName("areas")[0];
		var body = document.getElementsByTagName("body")[0];
		var c1 = document.createElement("div");
		var c2 = document.createElement("div");
		var c3 = document.createElement("div");
		c1.className = "col";
		c2.className = "col";
		c3.className = "col";
		c1.id="col1";
		c2.id="col2";
		c3.id="col3";
		body.append(c1);
		body.append(c2);
		body.append(c3);
		var items = root.children;
		while(items.length){
			var item = items[0];
			console.log(item);
			shortest([c1,c2,c3]).appendChild(item);
		}
		root.append(c1);
		root.append(c2);
		root.append(c3);
	});
})();

