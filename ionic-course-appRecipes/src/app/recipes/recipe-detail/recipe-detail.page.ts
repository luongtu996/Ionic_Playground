import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  LoadingRecipe : Recipe;
  constructor(private activatedRoute : ActivatedRoute, 
              private recipeService : RecipesService,
              private router : Router,
              private alertCtrl : AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( param => {
      //valid parameter exists
      if (!param.has('recipeId')) {
        //redirect some where
        this.router.navigate(['/recipes']);
      } 
      let recipeId = param.get('recipeId');
      this.LoadingRecipe = this.recipeService.getRecipeId(recipeId);
    });
  }

  onDeleteRecipe(){
    this.alertCtrl.create({ 
      header: 'Are you sure',
      message:'Do you really want to delete recipe?',
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },
      {
        text:'Delete',
        handler: ()=>{
          this.recipeService.deleteRecipe(this.LoadingRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alert=> alert.present());
  }
}
