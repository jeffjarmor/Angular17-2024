import { NgModule } from "@angular/core";
import { HeroesListComponent } from "./list/heroes-list/heroes-list.component";
import { HeroComponent } from './hero/hero/hero.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        HeroComponent,
        HeroesListComponent
    ],
    exports:[
        HeroComponent,
        HeroesListComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}