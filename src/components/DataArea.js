import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
// import DataBody from "./DataBody";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";
import DataContext from "../utils/DataContext";

const DataArea = () => {
  // STATE
  const [developerState, setDeveloperState] = useState({
    order: "descend",
    headings: [
      { name: "Image", width: "10%", order: "descend" },
      { name: "Name", width: "10%", order: "descend" },
      { name: "Phone", width: "20%", order: "descend" },
      { name: "Email", width: "20%", order: "descend" },
      { name: "DOB", width: "10%", order: "descend" },
    ],
  });

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // LIFECYCLE METHODS
  useEffect(() => {
    API.getUsers().then((results) => {
      console.log(results.data.results);
      setUsers(results.data.results);
      setFilteredUsers(results.data.results);
    });
  }, []);

  
  // Refactored Search made possible by Jonathan Watson
  const sortAscending = (usersArray, sortOrder) => {
    let sortedUsers;
    if (sortOrder === "ascend") {
      // DO SOMETHING
      sortedUsers = usersArray.sort((a, b) => {
        if (a.name.first < b.name.first) return -1;
        if (a.name.first > b.name.first) return 1;
        return 0;
      });
    } else {
      sortedUsers = usersArray.sort((a, b) => {
        if (a.name.first > b.name.first) return -1;
        if (a.name.first < b.name.first) return 1;
        return 0;
      });
    }
    return sortedUsers;
  };

  const handleSort = (heading) => {
    let currentOrder = developerState.headings
      .filter((elem) => elem.name === heading)
      .map((elem) => elem.order)
      .toString();

    currentOrder = currentOrder === "descend" ? "ascend" : "descend";

    const sortedUsers = sortAscending(filteredUsers, currentOrder);
    const updatedHeadings = developerState.headings.map((elem) => {
      elem.order = elem.name === heading ? currentOrder : elem.order;
      return elem;
    });
    setDeveloperState({
      ...developerState,
      headings: updatedHeadings,
    });
    setFilteredUsers(sortedUsers);
  };

  const handleSearchChange = (event) => {
    const filter = event.target.value;
    const filteredList = users.filter((item) => {
      let values =
        item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      
      if (values.indexOf(filter.toLowerCase()) !== -1) {
        return item;
      }
    });
    setFilteredUsers(filteredList);
  };

  return (
    <DataContext.Provider
      value={{
        developerState,
        handleSearchChange,
        handleSort,
        users,
        filteredUsers,
      }}
    >
      <Nav />
      <div className="data-area">
        {filteredUsers.length > 0 ? <DataTable /> : <div></div>}
      </div>
    </DataContext.Provider>
  );
};

export default DataArea;
