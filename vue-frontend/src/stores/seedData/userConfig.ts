export const seedLayouts = [
  {
    id: 1,
    name: 'Default Layout',
    layoutObject: {
      grid: {
        root: {
          type: 'branch',
          data: [
            {
              type: 'leaf',
              data: { views: ['panel_2'], activeView: 'panel_2', id: '4' },
              size: 512
            },
            {
              type: 'leaf',
              data: { views: ['panel_2_2'], activeView: 'panel_2_2', id: '1' },
              size: 512
            },
            {
              type: 'branch',
              data: [
                {
                  type: 'leaf',
                  data: { views: ['panel_3', 'panel_5'], activeView: 'panel_5', id: '2' },
                  size: 281
                },
                {
                  type: 'leaf',
                  data: { views: ['panel_1'], activeView: 'panel_1', id: '5' },
                  size: 282
                }
              ],
              size: 512
            }
          ],
          size: 563
        },
        width: 1536,
        height: 563,
        orientation: 'HORIZONTAL'
      },
      panels: {
        panel_2: { id: 'panel_2', contentComponent: 'EventCardList', title: 'Events Card List' },
        panel_2_2: {
          id: 'panel_2_2',
          contentComponent: 'EventCardList',
          title: 'Events Card List'
        },
        panel_3: {
          id: 'panel_3',
          contentComponent: 'CommandLogView',
          title: 'Map',
          renderer: 'always'
        },
        panel_5: { id: 'panel_5', contentComponent: 'CommandLogView', title: 'Command Log' },
        panel_1: { id: 'panel_1', contentComponent: 'UnitsTable', title: 'Units Table' }
      },
      activeGroup: '4'
    }
  },
  {
    id: 2,
    name: 'Default Layout 2',
    layoutObject: {
      grid: {
        root: {
          type: 'branch',
          data: [
            {
              type: 'leaf',
              data: { views: ['panel_2'], activeView: 'panel_2', id: '4' },
              size: 512
            },
            {
              type: 'leaf',
              data: { views: ['panel_2_2'], activeView: 'panel_2_2', id: '1' },
              size: 512
            },
            {
              type: 'branch',
              data: [
                {
                  type: 'leaf',
                  data: { views: ['panel_3', 'panel_5'], activeView: 'panel_5', id: '2' },
                  size: 281
                },
                {
                  type: 'leaf',
                  data: { views: ['panel_1'], activeView: 'panel_1', id: '5' },
                  size: 282
                }
              ],
              size: 512
            }
          ],
          size: 563
        },
        width: 1536,
        height: 563,
        orientation: 'HORIZONTAL'
      },
      panels: {
        panel_2: { id: 'panel_2', contentComponent: 'EventCardList', title: 'Events Card List' },
        panel_2_2: {
          id: 'panel_2_2',
          contentComponent: 'EventCardList',
          title: 'Events Card List'
        },
        panel_3: {
          id: 'panel_3',
          contentComponent: 'CommandLogView',
          title: 'Map',
          renderer: 'always'
        },
        panel_5: { id: 'panel_5', contentComponent: 'CommandLogView', title: 'Command Log' },
        panel_1: { id: 'panel_1', contentComponent: 'UnitsTable', title: 'Units Table' }
      },
      activeGroup: '4'
    }
  }
]
