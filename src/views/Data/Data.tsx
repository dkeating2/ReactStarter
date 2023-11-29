import DataTable from "../../components/DataTable/DataTable";
import DisplayCard from "../../components/DisplayCard/DisplayCard";
const Data = () => {
  return (
    <DisplayCard title="Data Page" description="Sample data table">
      <DataTable
        url={"https://jsonplaceholder.typicode.com/users"}
        columns={[
          { label: "Name", accessor: "name" },
          { label: "Username", accessor: "username" },
          { label: "Email Address", accessor: "email" },
          { label: "Phone Number", accessor: "phone" },
        ]}
      />
    </DisplayCard>
  );
};
export default Data;
