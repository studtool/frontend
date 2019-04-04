export default class Controller {
	constructor({
		model = {},
		view = {},
		router = {},
	} = {}) {
		this._model = model;
		this._view = view;
		this._router = router;
		this.onNavigate = this.onNavigate.bind(this);
		this._view.on('onLinkClick', ({ path = '' }) => { this.onNavigate({ path: path }); });
		this._view.on('onBackClick', () => { this.back(); });
	}

	onNavigate({ path = null, data = {} } = {}) {
		if(path !== null) {
			this._router.navigate({ path: path, data: data });
		}
	}

	back() {
		this._router.back();
	}

	render({root = {}, data = {}} = {}) {
		this._view.open({ root, data });
	}

	open({ root = {}, data = {} } = {}) {
		this._model.getData({ root, data });
	}
}
