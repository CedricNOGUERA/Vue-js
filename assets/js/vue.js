// data
const products = [
	{
		id: 1,
		description: "Quarz Luxe",
		price: 12,
		img: "assets/img/quarz-luxe.JPG",
	},
	{
		id: 2,
		description: "Curren Business",
		price: 20,
		img: "assets/img/curren-business.JPG",
	},
	{
		id: 3,
		description: "Curren Sport",
		price: 5,
		img: "assets/img/curren-sport.JPG",
	},
	{
		id: 4,
		description: "Jaragar Racing",
		price: 8,
		img: "assets/img/jaragar-racing.JPG",
	},
	{
		id: 5,
		description: "Liges Hommes",
		price: 3,
		img: "assets/img/liges-hommes.JPG",
	},
	{
		id: 6,
		description: "Maserati Mechanical",
		price: 65,
		img: "assets/img/maserati-mechanical.JPG",
	},
	{
		id: 7,
		description: "Montre Mecanique",
		price: 25,
		img: "assets/img/montre-mecanique.JPG",
	},
	{
		id: 8,
		description: "Brand Designer",
		price: 28,
		img: "assets/img/brand-designer.JPG",
	},
	{
		id: 9,
		description: "Relogio Masculino",
		price: 4,
		img: "assets/img/relogio-masculino.JPG",
	},
	{
		id: 10,
		description: "Tissot Multifunction",
		price: 29,
		img: "assets/img/tissot-multifunction.JPG",
	},
	{
		id: 11,
		description: "Hip Hop Gold",
		price: 87,
		img: "assets/img/hiphop-gold.JPG",
	},
	{
		id: 12,
		description: "Mesh Genova",
		price: 6,
		img: "assets/img/mesh-genova.JPG",
	},
];

const Home = {
	template: "#home",
	name: "Home",
	data: () => {
		return {
			products,
			searchKey: "",
			liked: [],
		};
	},
	computed: {
		filteredList() {
			return this.products.filter((product) => {
				return product.description
					.toLowerCase()
					.includes(this.searchKey.toLowerCase());
			});
		},
	},
	methods: {
		setLikeCookie() {
			document.addEventListener("input", () => {
				setTimeout(() => {
					$cookies.set("like", JSON.stringify(this.liked));
				}, 300);
			});
		},
	},
};
const UsersSettings = {
	template: "#users",
	name: "UsersSettings",
};
const WishList = {
	template: "<h1>WishList</h1>",
	name: "WishList",
};
const Shoppingcart = {
	template: "<h1>Shopping cart</h1>",
	name: "Shoppingcart",
};

//Router
const router = new VueRouter({
	routes: [
		{ path: "/", component: Home, name: "Home" },
		{ path: "/user-settings", component: UsersSettings, name: "UsersSettings" },
		{ path: "/wish-list", component: WishList, name: "WishList" },
		{ path: "/shopping-cart", component: Shoppingcart, name: "Shoppingcart" },
	],
});

const vue = new Vue({
	router,
}).$mount("#app");
