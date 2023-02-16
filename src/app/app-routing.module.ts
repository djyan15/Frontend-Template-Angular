import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];
// { path: 'name/:id', component: NameComponent },
// private route: ActivatedRoute
// this.route.queryParams
// .subscribe(params => {
//   console.log(params); // { orderby: "price" }
//   this.orderby = params.orderby;
//   console.log(this.orderby); // price
// }
// );  this.id = this.route.snapshot.paramMap.get('id')
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
