const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			favorite: [],
			character: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadCharacters: () => {
				fetch("https://rickandmortyapi.com/api/character")
				.then(response => response.json())
				.then((response)=> {
					console.log(response)
					setStore({characters: response.results})
				})
			},

			getCharacter: (id) => {
				fetch(`https://rickandmortyapi.com/api/character/${id}`)
				.then(response => response.json())
				.then((response)=> {
					console.log(response);
					setStore({character: response });
				});
			},

			setFavorite: (character) => {
				const store = getStore()
				console.log([...store.favorite, character])
				setStore({ favorite: [...store.favorite, character]})
			},
		}
	};
};

export default getState;
