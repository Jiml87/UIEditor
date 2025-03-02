export type FolderStatus =
  | 'transportationProcess'
  | 'stationaryProcess'
  | 'pathways'
  | 'pathwayMix'
  | 'technologies';

export const FOLDER_BACKGROUND: Record<FolderStatus, string> = {
  transportationProcess: '#ffeb99', // yellow
  stationaryProcess: '#cfedfc', // blue
  pathwayMix: '#d1d1fa', // purple
  pathways: '#fcd1cf', // pink
  technologies: '#cffccf', // green
};

export type FolderInputOutput = {
  id: string;
  title: string;
  subTitle: string;
  value: string;
};

export type Folder = {
  id: string;
  title: string;
  lastUpdatedDate: string;
  publicationDetails: string;
  folderStatus: FolderStatus;
  inputs: FolderInputOutput[];
  outputs: FolderInputOutput[];
};

export type EditorFolder = Folder & {
  meta: {
    collapsed: boolean;
    position?: {
      x: number;
      y: number;
    };
  };
};
