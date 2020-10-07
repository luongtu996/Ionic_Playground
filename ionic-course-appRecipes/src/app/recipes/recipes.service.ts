import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes : Recipe[]= [
    {
      id:'r1',
      title:'Schnitzel',
      imageUrl:'https://www.cook2eatwell.com/wp-content/uploads/2018/08/Pork-Schnitzel-3.jpg',
      ingredients : ['French Fries','Pork Meat','Salad']
    },
    {
      id:'r2',
      title:'Spaghetti',
      imageUrl:'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/12/spaghetti-ala-bolonesa.jpg',
      ingredients : ['Sapghetti','Tomato','Onion']
    }
  ]
  constructor() { }

  getAllRecipes(){
    //use ... to return  a new array or object
    return [...this.recipes];
  }

  getRecipeId(recipeId: string){
    return { 
      ...this.recipes.find(r => {
        return r.id === recipeId;
      })
    }
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe=>{
      return recipe.id !== recipeId
    });
  }
}
