import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useActionData } from "react-router-dom";

export const Home = () => {
	const {store, actions } = useContext(Context)
	return (
	<div className="container">
		<div className="row">
			<div className="col-8 my-5 text-danger">
				<h2>Personajes de la mejor serie del mundo</h2>
			</div>
			{store.characters.map((character, index)=> {
					return (
						<div className="col-12 col-md-4 m-2" key={index}>
							<div className="card">
  								<img src={character.image} className="card-img-top"/>
  									<div className="card-body">
    									<h5 className="card-title">{character.name}</h5>
   											 <p className="card-text">{character.species}</p>
    											<Link to={`/character/${character.id}`} className="btn btn-danger mx-2">Ver más...</Link>
													<button className="btn btn-danger mx-2" onClick={() => {actions.setFavorite(character.name)}}>Like</button>
												
									</div>
  							</div>
							
						</div>
					)
				})
				
			}
			</div>	
	</div>
	)
};
