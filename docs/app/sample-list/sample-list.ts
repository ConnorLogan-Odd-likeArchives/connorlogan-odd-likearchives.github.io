import { Component } from '@angular/core';
import {Sample} from '../models/sample';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sample-list',
  imports: [
    NgForOf,
    RouterLink,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './sample-list.html',
  styleUrl: './sample-list.css',
})
export class SampleList {
  displayedColumns:string[] = ['id', 'name', 'desc'];

  sampleList: Sample[] = [
    {id: 1, name: "Project 1", desc: "This project shows a final project I did where it showcases all of my skills using HTML and CSS to create a website about myself."},
    {id: 2, name: "Project 2", desc: "This project is part of an assignment for frameworks in JavaScript."}
  ]

  sampleBestList: Sample[] = [
    {id: 1, name: "Project 1", desc: "This project so far, is the one that I'm the most proud of because I get absolutely creative when it comes to using HTML and CSS to create a website about myself."},
    {id: 2, name: "Project 2", desc: "I'm very proud of this project because of the various services, pipes, models, etc. that I implemented throughout the Angular assignments."}
  ]

  skillList: Sample[] = [
    {id: 1, name: "Planning", desc: "I basically had planning skills when it comes to doing assignments with deadlines, such as planning what day and time to do an assignment with a deadline."},
    {id: 2, name: "Communication", desc: "I basically have communication skills when it comes to working with people on group projects, such as the Java project."}
  ]
}
