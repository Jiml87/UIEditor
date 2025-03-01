import { create } from 'zustand';

import { EditorFolder } from '@/consts/folder';

interface DataState {
  folderData: EditorFolder[];
}

export const useDataStore = create<DataState>()(() => ({
  folderData: [
    {
      id: '1',
      meta: {
        collapsed: false,
      },
      title: 'Ammonia from H2 from Coal Gasification w/ CC S',
      lastUpdatedDate: '6/12/2024 - 12:44',
      publicationDetails: 'Analysis of Petroleum Refining',
      folderStatus: 'stationaryProcess',
      inputs: [
        {
          title: 'Nitrogen gas',
          subTitle: 'Mix: Nitrogen production from cryogenic',
          value: '75 %',
        },
        {
          title: 'Gaseous Hydrogen',
          subTitle: 'Pathway: Central Plants comaresseo G.h',
          value: '10 %',
        },
      ],
      outputs: [
        {
          title: 'Ammonia for Fuel',
          subTitle: '',
          value: '100%',
        },
      ],
    },
    {
      id: '2',
      meta: {
        collapsed: false,
      },
      title: 'Ammonia Transportation and Distribution',
      lastUpdatedDate: '6/12/2024 - 12:44',
      publicationDetails: 'Analysis of Petroleum Refining',
      folderStatus: 'transportationProcess',
      inputs: [
        {
          title: 'Nitrogen gas',
          subTitle: 'Mix: Nitrogen production from cryogenic',
          value: '15 %',
        },
        {
          title: 'Gaseous Hydrogen',
          subTitle: 'Pathway: Central Plants comaresseo G.h',
          value: '10 %',
        },
      ],
      outputs: [
        {
          title: 'Ammonia for Fuel',
          subTitle: '',
          value: '100%',
        },
      ],
    },
    {
      id: '3',
      meta: {
        collapsed: false,
      },
      title: 'Lime Production (CaO) in Chile',
      lastUpdatedDate: '6/12/2024 - 12:44',
      publicationDetails: 'Analysis of Petroleum Refining',
      folderStatus: 'pathwayMix',
      inputs: [
        {
          title: 'Nitrogen gas',
          subTitle: 'Mix: Nitrogen production from cryogenic',
          value: '15 %',
        },
        {
          title: 'Residual Oil',
          subTitle: 'Pathway: Residual Oil (Petroleum)',
          value: '25 %',
        },
        {
          title: 'Gaseous Hydrogen',
          subTitle: 'Pathway: Central Plants comaresseo G.h',
          value: '15 %',
        },
      ],
      outputs: [
        {
          title: 'Ammonia for Fuel',
          subTitle: '',
          value: '100%',
        },
      ],
    },
  ],
}));
