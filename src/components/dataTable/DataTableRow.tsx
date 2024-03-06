export type DataTableRowProps = {
  id: ID;
  name: UserName;
  email: string;
};

export type UserName = {
  title: string;
  first: string;
  last: string;
};

export type ID = {
  name: string;
  value?: string;
};

export function DataTableRow({ id, name, email }: DataTableRowProps) {
  return (
    <tr>
      <td className="border">{id.value == null ? "No ID" : id.value}</td>
      <td className="border">{`${name.title} ${name.first} ${name.last}`}</td>
      <td className="border">{email}</td>
    </tr>
  );
}
