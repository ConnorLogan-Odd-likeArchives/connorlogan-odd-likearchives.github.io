import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Sample} from '../models/sample';
import {Award} from '../models/award';

@Component({
  selector: 'app-award-list',
    imports: [
        NgForOf,
        NgIf,
        NgOptimizedImage
    ],
  templateUrl: './award-list.html',
  styleUrl: './award-list.css',
})
export class AwardList {
  displayedColumns:string[] = ['id', 'name', 'desc'];

  awardList: Award[] = [
    {id: 1, name: "Honour Roll", desc: "These are the various honour rolls I received during my days in high school."},
    {id: 2, name: "Graduation", desc: "I had graduated from high school to apply for St. Clair College."}
  ]
}
