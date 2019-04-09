export default class View{
    constructor (template) {
		this._template = template;

		this.viewDiv = document.createElement('div');
		View.rootToRender.appendChild(this.viewDiv);
		this._isHidden = true;
	}

	static get rootToRender () {
		return document.getElementById('root');
	}

	show () {
		this._isHidden = false;
		View.rootToRender.appendChild(this.viewDiv);
	}

	hide () {
		this._isHidden = true;
		document.getElementById('root').innerHTML = '';
	}

	render (context) {
		this.viewDiv.innerHTML = '';
		const main = document.createElement('main');
		main.innerHTML = this._template(context);
		this.viewDiv.appendChild(main);
    }
    
    setStates(states){
        // отрисовка новых данных 
    }
}