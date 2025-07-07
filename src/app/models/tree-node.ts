export interface TreeNode {
  id: number;
  title: string;
  is_deleted: boolean;
  children: TreeNode[];
}

export const DEFAULT_TREE_NODES: TreeNode[] = [
  {
    id: 1,
    title: 'Значение 1',
    is_deleted: false,
    children: [
      {
        id: 2,
        title: 'Значение 1.1',
        is_deleted: false,
        children: [
          {
            id: 3,
            title: 'Значение 1.1.1',
            is_deleted: true,
            children: [],
          },
        ],
      },
      {
        id: 4,
        title: 'Значение 1.2',
        is_deleted: false,
        children: [
          {
            id: 5,
            title: 'Значение 1.2.1',
            is_deleted: false,
            children: [],
          },
          {
            id: 6,
            title: 'Значение 1.2.2',
            is_deleted: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Значение 2',
    is_deleted: false,
    children: [
      {
        id: 8,
        title: 'Значение 2.1',
        is_deleted: true,
        children: [
          {
            id: 9,
            title: 'Значение 2.1.1',
            is_deleted: true,
            children: [
              {
                id: 10,
                title: 'Значение 2.1.1.1',
                is_deleted: true,
                children: [
                  {
                    id: 11,
                    title: 'Значение 2.1.1.1.1',
                    is_deleted: true,
                    children: [
                      {
                        id: 12,
                        title: 'Значение 2.1.1.1.1.1',
                        is_deleted: false,
                        children: [
                          {
                            id: 13,
                            title: 'Значение 2.1.1.1.1.1.1',
                            is_deleted: false,
                            children: [],
                          },
                        ],
                      },
                      {
                        id: 14,
                        title: 'Значение 2.1.1.1.1.2',
                        is_deleted: false,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
