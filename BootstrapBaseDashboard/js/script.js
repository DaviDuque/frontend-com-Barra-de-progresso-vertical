
function move(novoValor, percentual) {
	var valor = novoValor;
	let percento = 100 - percentual;	
	let elem = document.getElementById(valor);  
			let height = 100;
			let id = setInterval(frame, 10);
			function frame() {
				
				if (height <= percento) {
					clearInterval(id);
				} else {
					height--; 
					elem.style.height = height + '%'; 
					}
				
				
				}			
	
}
