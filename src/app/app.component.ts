import {Component} from '@angular/core';
import {TreeNode} from './models/tree-node';
import {TreeDataService} from './services/tree-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public treeData: TreeDataService) {
  }

  get treeNodes() {
    return this.treeData.getNodes();
  }

  log(node: TreeNode) {
    this.treeData.logNode(node);
  }

  expandAll(node: TreeNode) {
    this.treeData.expandAll(node);
  }
}
