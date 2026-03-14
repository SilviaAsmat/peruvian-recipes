'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { recipes } from '../data/recipes';

export function RecipeDetail() {
  const params = useParams<{ id: string | string[] }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
          Back to Recipes
        </Link>
      </div>

      {/* Recipe Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{recipe.description}</p>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-orange-50 rounded-lg">
              <div className="text-center">
                <div className="text-sm text-gray-600">Prep Time</div>
                <div className="font-semibold text-gray-900">{recipe.prepTime} min</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Cook Time</div>
                <div className="font-semibold text-gray-900">{recipe.cookTime} min</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Servings</div>
                <div className="font-semibold text-gray-900">{recipe.servings}</div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="size-2 bg-orange-600 rounded-full mt-2 shrink-0" />
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="shrink-0 size-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}