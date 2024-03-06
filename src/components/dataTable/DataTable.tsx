import { useFetch } from "../../utils/useFetch";
import { DataTableRow, ID, UserName } from "./DataTableRow";

export type User = {
  id: ID;
  name: UserName;
  email: string;
};

export type UserResults = {
  results: User[];
};

export function DataTable() {
  const { data, isLoading, isError } = useFetch<UserResults>(
    "https://randomuser.me/api/?results=50"
  );

  if (isError) {
    throw Error("Could not load table");
  }

  if (isLoading) {
    return <div className="loading-spinner" />;
  }

  return (
    <table className="table-auto border border-separate">
      <thead>
        <tr>
          <th className="border">ID</th>
          <th className="border">Name</th>
          <th className="border">Email</th>
        </tr>
      </thead>
      <tbody>
        {data?.results.map((user: User) => {
          return (
            <DataTableRow
              key={user.email}
              id={user.id}
              name={user.name}
              email={user.email}
            />
          );
        })}
      </tbody>
    </table>
  );
}
