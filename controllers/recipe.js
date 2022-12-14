const { Recipe } = require('../models/recipe')

const save = async (req, res) => {
	
	try {
		const recipes = req.body;

		console.log('estas son las recetas:', recipes)
		await Recipe.deleteMany({});

		recipes.forEach(async element => {
			const recipe = new Recipe(element);
			await recipe.save();
		});

		res.status(200).json({
			msg: "Las recetas fueron guardadas"
		}); 

	} catch (error) {
		console.log(error);

		res.status(500).json({
			msg: "Las recetas no pudieron guardarse, ponganse en contacto con el administrador"
		});
	}
}

const fetch = async (req, res) => {
	try {
		const recipesList = await Recipe.find();

		res.status(200).json(recipesList);
	} catch (error) {
		console.log(error);

		res.status(500).json({
			msg: "Los datos no pudieron recuperarse, pongase en contacto con el administrador"
		});
	}
}

module.exports= {
  save,
  fetch
}