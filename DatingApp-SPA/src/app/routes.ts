import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { ListsComponent } from "./lists/lists.component";
import { AuthGuard } from "./_guards/auth.guard";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent }, // first match wins
  { path: "members", component: MemberListComponent, canActivate:[AuthGuard] },
  {
    path:'',
    canActivate:[AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: ListsComponent },
    ]
  }, 
  { path: "**", redirectTo: "", pathMatch: "full" } // if its none of above Routes full paths does not match, this wildcard redirect used to redirect to Home => ''
];
