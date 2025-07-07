import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeComponent } from './tree.component';
import { TreeNode, DEFAULT_TREE_NODES } from '../../models/tree-node';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { WritableSignal, signal } from '@angular/core';

@Component({
  template: `
    <ng-template #nodeTemplate let-node>
      <span class="node-title">{{ node.title }}</span>
    </ng-template>

    <app-tree
      [nodes]="nodes"
      [template]="nodeTemplate"
      [expandedNodes]="expanded"
    />
  `,
  standalone: true,
  imports: [TreeComponent]
})
class TestHostComponent {
  nodes: TreeNode[] = DEFAULT_TREE_NODES;
  expanded: WritableSignal<Set<number>> = signal(new Set());
  @ViewChild('nodeTemplate', { static: true }) template!: TemplateRef<any>;
}

describe('TreeComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Рендер корневых узлов', () => {
    const rootNodes = fixture.nativeElement.querySelectorAll('li > .node');
    expect(rootNodes.length).toBe(2);
    expect(rootNodes[0].textContent).toContain('Значение 1');
    expect(rootNodes[1].textContent).toContain('Значение 2');
  });

  it('Не отображает дочерние узлы по умолчанию', () => {
    const childNode = fixture.nativeElement.querySelector('li ul');
    expect(childNode).toBeNull();
  });

  it('Разворачивает дочерние узлы при клике', () => {
    const toggleBtn = fixture.nativeElement.querySelector('span');
    toggleBtn.click();
    fixture.detectChanges();

    const expandedTitles = fixture.nativeElement.querySelectorAll('.node-title');
    const titles = Array.from(expandedTitles as NodeListOf<HTMLElement>).map(el => el.textContent?.trim());
    expect(titles).toContain('Значение 1.1');
    expect(titles).toContain('Значение 1.2');
  });

  it('Применяет класс .deleted для удалённых узлов', () => {
    host.expanded.set(new Set([1, 2]));
    fixture.detectChanges();

    const deletedNode = fixture.nativeElement.querySelector('.node.deleted');
    expect(deletedNode?.textContent).toContain('Значение 1.1.1');
  });

  it('Отображает кастомный шаблон', () => {
    const titles = fixture.nativeElement.querySelectorAll('.node-title');
    expect(titles.length).toBe(2);
    expect(titles[0].textContent).toBe('Значение 1');
  });

  it('Сигнал expandedNodes синхронизирует разворачивание', () => {
    host.expanded.set(new Set([1, 2, 4]));
    fixture.detectChanges();

    const visibleTitles = fixture.nativeElement.querySelectorAll('.node-title');
    const rendered = Array.from(visibleTitles as NodeListOf<HTMLElement>).map(e => e.textContent?.trim());
    expect(rendered).toContain('Значение 1.1.1');
    expect(rendered).toContain('Значение 1.2.1');
  });
});
