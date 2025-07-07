import {TreeDataService} from './tree-data.service';
import {TestBed} from '@angular/core/testing';
import {DEFAULT_TREE_NODES, TreeNode} from '../models/tree-node';


describe('TreeDataService', () => {
  let service: TreeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeDataService],
    });
    service = TestBed.inject(TreeDataService);
  });

  it('Должен быть создан', () => {
    expect(service).toBeTruthy();
  });

  it('Должен иметь пустой Set в expandedNodes по умолчанию', () => {
    expect(service.expandedNodes()).toEqual(new Set());
  });

  it('Должен вызывать console.log с правильным ID в logNode', () => {
    spyOn(console, 'log');
    const node: TreeNode = DEFAULT_TREE_NODES[0];
    service.logNode(node);
    expect(console.log).toHaveBeenCalledWith('ID узла: 1');
  });

  it('Должен разворачивать все узлы рекурсивно в expandAll для узла с id: 7', () => {
    const node: TreeNode = DEFAULT_TREE_NODES[1];
    service.expandAll(node);
    const expectedSet = new Set([7,8,9,10,11,12,13,14]);
    expect(service.expandedNodes()).toEqual(expectedSet);
  });

  it('Должен разворачивать только один узел без детей', () => {
    const node: TreeNode = DEFAULT_TREE_NODES[0].children[0].children[0];
    service.expandAll(node);
    const expactedSet = new Set([3]);
    expect(service.expandedNodes()).toEqual(expactedSet);
  });
})
