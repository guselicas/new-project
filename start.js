if(this.scrollTop != top){
				this.scrollTop = top;
				
				this.renderer.scrollRows(top, topDir);
				
				this.dispatch("scroll-vertical", top, topDir);
				this.dispatchExternal("scrollVertical", top, topDir);
			}

if(typeof subject == "object"){
			if(subject instanceof Row){
				//subject is row element
				return subject;
			}else if(subject instanceof RowComponent){
				//subject is public row component
				return subject._getSelf() || false;
			}else if(typeof HTMLElement !== "undefined" && subject instanceof HTMLElement){
				//subject is a HTML element of the row
				let match = this.rows.find((row) => {
					return row.getElement() === subject;
				});
//hihi
