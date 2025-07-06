import {Component, Input} from '@angular/core';
import {TreeNode} from '../tree-node';

@Component({
  selector: 'app-tree',
  standalone: false,
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent {
  @Input() nodes: TreeNode[] = [];
}
