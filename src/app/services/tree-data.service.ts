import { Injectable, signal } from '@angular/core';
import { DEFAULT_TREE_NODES, TreeNode } from '../models/tree-node';

@Injectable({
  providedIn: 'root',
})
export class TreeDataService {
  private treeNodes = signal<TreeNode[]>(DEFAULT_TREE_NODES);

  expandedNodes = signal<Set<number>>(new Set());

  getNodes = this.treeNodes.asReadonly();

  logNode(node: TreeNode) {
    console.log(`ID узла: ${node.id}`);
  }

  expandAll(node: TreeNode) {
    const expandRecursive = (n: TreeNode) => {
      this.expandedNodes.update(set => {
        const newSet = new Set(set);
        newSet.add(n.id);
        return newSet;
      });

      if (n.children?.length) {
        n.children.forEach(expandRecursive);
      }
    };

    expandRecursive(node);
  }
}
