export interface School {
  name: string;
  id: number;
}

export enum FormTypes {
  Text,
  Dynamic,
}

export interface TextItem {
  type: FormTypes.Text;
  placeholder: string;
  label: string;
}

export interface DynamicItem {
  type: FormTypes.Dynamic;
  title: string;
  subtypeOptions?: string[];
}

export type FormItem = { required: boolean; id: string } & (
  | TextItem
  | DynamicItem
);
