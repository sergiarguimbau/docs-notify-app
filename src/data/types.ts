// Custom data types

export type DocumentType = {
  ID: string,
  Title: string,
  Version: string,
  Attachments: string[],
  Contributors: {
    ID: string;
    Name: string;
  }[],
  CreatedAt: string,
  UpdatedAt: string,
};

