export interface IFile {
  name: string;
  path: string;
  size: number;
  createdAt: Date;
  updatedAt: Date;
  // Add any other properties relevant to a file
}

export interface IDocumentManagementOptions<T extends IFile> {
  file: T;
  folder: T[];
  create: (doc: T) => void;
  open: (file: T) => void;
  edit: (file: T) => void;
  delete: (file: T) => void;
}
