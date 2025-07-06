import {Component, signal} from '@angular/core';
import {TreeNode} from './tree-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  treeNodes: TreeNode[] = [
    {
      "id": 1,
      "title": "Значение 1",
      "is_deleted": false,
      "children": [
        {
          "id": 2,
          "title": "Значение 1.1",
          "is_deleted": false,
          "children": [
            {
              "id": 3,
              "title": "Значение 1.1.1",
              "is_deleted": true,
              "children": []
            }
          ]
        },
        {
          "id": 4,
          "title": "Значение 1.2",
          "is_deleted": false,
          "children": [
            {
              "id": 5,
              "title": "Значение 1.2.1",
              "is_deleted": false,
              "children": []
            },
            {
              "id": 6,
              "title": "Значение 1.2.2",
              "is_deleted": false,
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": 7,
      "title": "Значение 2",
      "is_deleted": false,
      "children": [
        {
          "id": 8,
          "title": "Значение 2.1",
          "is_deleted": true,
          "children": [
            {
              "id": 9,
              "title": "Значение 2.1.1",
              "is_deleted": true,
              "children": [
                {
                  "id": 10,
                  "title": "Значение 2.1.1.1",
                  "is_deleted": true,
                  "children": [
                    {
                      "id": 11,
                      "title": "Значение 2.1.1.1.1",
                      "is_deleted": true,
                      "children": [
                        {
                          "id": 12,
                          "title": "Значение 2.1.1.1.1.1",
                          "is_deleted": false,
                          "children": [
                            {
                              "id": 13,
                              "title": "Значение 2.1.1.1.1.1.1",
                              "is_deleted": false,
                              "children": []
                            }
                          ]
                        },
                        {
                          "id": 13,
                          "title": "Значение 2.1.1.1.1.2",
                          "is_deleted": false,
                          "children": []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
      ]
    }
  ];
  log(node: TreeNode) {
    console.log(`ID узла: ${node.id}`);
  }

  globalExpanded = signal<Set<number>>(new Set());

  expandAll(node: TreeNode) {
    const expandRecursive = (n: TreeNode) => {
      this.globalExpanded.update(set => {
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
