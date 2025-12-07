import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {SampleList} from './sample-list/sample-list';
import {Sample} from './models/sample';
import {NgForOf} from '@angular/common';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SampleList, NgForOf, RouterLink, RouterLinkActive, MatMenu, MatButton, MatMenuItem, MatMenuTrigger, MatTooltip],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
