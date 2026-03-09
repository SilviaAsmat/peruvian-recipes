// import { Link } from 'react-router-dom';

import type { Recipe } from '../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    // <Link to={`/recipe/${recipe.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-48 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-medium text-orange-600">
            {recipe.difficulty}
          </div> */}
        </div>
        <div className="p-4">
          {/* <div className="text-sm text-orange-600 mb-1">{recipe.category}</div> */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {recipe.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              {/* <Clock className="size-4" /> */}
              <span>{ "Cook Time: " + (recipe.prepTime + recipe.cookTime)} min</span>
            </div>
            <div className="flex items-center gap-1">
              {/* <Users className="size-4" /> */}
              <span>{recipe.servings} servings</span>
            </div>
            <div className="flex items-center gap-1">
              {/* <ChefHat className="size-4" /> */}
              {/* <span>{recipe.difficulty}</span> */}
            </div>
          </div>
        </div>
      </div>
    // </Link>
  );
}
