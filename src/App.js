import AlbumFeature from "./features/Album";
import React,{ useEffect } from 'react';
import TodoFeature from "./features/Todo";
import NotFound from "./components/NotFound";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import productApi from './api/productApi';

function App() {

	useEffect(() => {
		const fetchProducts = async () =>{
			const params = {
				_limit: 10
			}
			const productList = await productApi.getAll(params);
			console.log(productList);
		}
		fetchProducts(); 
	}, []);

 	 return (
		<div className="App">
			Header

			<p><NavLink to="/todo">Todo</NavLink></p>
			<p><NavLink to="/album">Album</NavLink></p>

			<Switch>
				<Redirect from="/home" to="/" />
				<Redirect from="/post-list/:postId" to="/posts/:postId" />


				<Route path="/" component={TodoFeature} exact />
				<Route path="/todo" component={TodoFeature} />
				<Route path="/album" component={AlbumFeature} />

				<Route component={NotFound}/>
			</Switch>
			Footer
		</div>
  	);
}

export default App;
