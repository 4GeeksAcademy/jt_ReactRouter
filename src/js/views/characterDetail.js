import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetail = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=> {
		actions.getCharacter(params.id)
	})

	return (
		<div className="con-12">

			{
				store.character ? <h1>Nombre: {store.character.name}</h1> : <h3>Cargando...</h3>
			}

			<h1>Detalle del personaje: {params.id}</h1>
		</div>
	);
};

