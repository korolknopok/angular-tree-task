import {Component, Input, signal, TemplateRef} from '@angular/core';
import {TreeNode} from '../tree-node';

@Component({
  selector: 'app-tree',
  standalone: false,
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent {
  @Input() nodes: TreeNode[] = [];
  @Input() template!: TemplateRef<any>;
  expandedNodes = signal<Set<number>>(new Set());

  toggle(node: TreeNode) {
    const expanded = this.expandedNodes();
    if (expanded.has(node.id)) {
      expanded.delete(node.id);
    } else {
      expanded.add(node.id);
    }
    this.expandedNodes.set(new Set(expanded));
  }
}
