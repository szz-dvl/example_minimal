function BG_mgr () {

	this.openNewWindow = () => {

		browser.windows.create({
						
			type: "popup",
			state: "normal",
			url: browser.extension.getURL("welcome.html"),
			width: Math.min(1024, screen.width), 
			height: 420 
			
		}).then (
			wdw => {
				console.log(wdw);
			}
		)
	}
	
	this.receiveCmd = (command) => {
		
		switch(command) {
			
			case "open-win":
				this.openNewWindow();
				break;
					
			default:
				break;
		}
	};

	browser.commands.onCommand.addListener(this.receiveCmd);
	
		
}
	
BG_mgr.call(this);
