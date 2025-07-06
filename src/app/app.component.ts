import { Component } from '@angular/core';
import {TreeNode} from './tree-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  treeNodes: TreeNode[] = [
    { id: 1,
      title: "Узел 1",
      is_deleted: false,
      children: [
        { id: 2, title: "Узел 1.1", is_deleted: false, children: [] },
        { id: 3, title: "Узел 1.2", is_deleted: true, children: [] }
      ] },
    { id: 2, title: "Узел 2", is_deleted: true, children: [] }
  ];
}
