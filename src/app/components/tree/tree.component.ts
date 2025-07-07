import {Component, Input, signal, Signal, TemplateRef, WritableSignal} from '@angular/core';
import {TreeNode} from '../../models/tree-node';
import {NgIf, NgForOf, NgTemplateOutlet} from '@angular/common';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrl: './tree.component.scss',
    imports: [NgIf, NgForOf, NgTemplateOutlet],
    standalone: true
})
export class TreeComponent {
    @Input() nodes: TreeNode[] = [];
    @Input() template!: TemplateRef<any>;
    @Input() expandedNodes?: WritableSignal<Set<number>>;

    private localExpanded = signal<Set<number>>(new Set());

    get effectiveExpanded(): Signal<Set<number>> {
        return this.expandedNodes ?? this.localExpanded;
    }

    toggle(node: TreeNode) {
        const expanded = new Set(this.effectiveExpanded());
        if (expanded.has(node.id)) {
            expanded.delete(node.id);
        } else {
            expanded.add(node.id);
        }

        if (this.expandedNodes) {
            this.expandedNodes.set(expanded);
        } else {
            this.localExpanded.set(expanded);
        }
    }

    isExpanded(node: TreeNode): boolean {
        return this.effectiveExpanded().has(node.id);
    }
}
