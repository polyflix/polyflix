export interface Item {
  label: string;
  route: string;
}
export type Items = Item[];

export const menuItems: Items = [
  {
    label: "Features",
    route: "/#features",
  },
  {
    label: "Description",
    route: "/#description",
  },
];
