export const strict = false

export const getters = {
	site: (state) => state.site,
}

export const mutations = {
	site(state, item) {
		state.site = item;
	},
}