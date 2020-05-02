import React from "react";
import "./table.css";
import API from "../../utils/API";import Search from "../Search/Search"

class Table extends React.Component {
  state = {
    employees: [],
    sortOrder: "",
    search: "a",
  };

  //API call
  componentDidMount() {
    API.search("a").then((results) => {
      this.setState({
        employees: results.data.results,
        allemployees: results.data.results,
      });
    });
  }

  //Sort people by first name
  sortByName = () => {
    let sortedEmployees = this.state.employees.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }

      return 0;
    });

    // If descending, reverse with sortedEmployees.reverse()
    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();

      this.setState({ employees: sortedEmployees, sortOrder: "ASC" });
    } else {
      this.setState({
        employees: sortedEmployees,
        sortOrder: "DESC",
      });
    }
  };

  //Handle search input
  handleSearchChange = (event) => {
    if (event.target.name === "search") {
      const searchTerm = event.target.value.toLowerCase();
      const temp = [...this.state.allemployees];
      console.log(searchTerm);
      let empfilter = temp.filter((employee) => {
        console.log(employee.name.first.toLowerCase().includes(searchTerm));
        return employee.name.first.toLowerCase().includes(searchTerm);
      });

      this.setState({
        search: searchTerm,
        employees: empfilter,
      });
    }
  };

  //This will render the search results on the page
  render() {
    return (
      <>
      <div id="Cont1" className="container">
        <div className="col">
          <div className="col">
            <table className="table table-hover table-bordered">
              <thead>
                <tr id="subHead">
                  <th>Image</th>
                  <th>
                    Name
                    <button id="sortBtn" onClick={this.sortByName}>
                      Sort
                    </button>
                  </th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>username</th>
                  <th>Password</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees &&
                  this.state.employees.map((person) => (
                    <tr key={person.login.uuid}>
                      <td>
                        <img
                          src={person.picture.thumbnail}
                          alt="thumbnail"
                        />
                      </td>
                      <td>
                        {person.name.first} {person.name.last}
                      </td>
                      <td>{person.phone}</td>
                      <td>{person.email}</td>
                      <td>{person.login.username}</td>
                      <td>{person.login.password}</td>
                      <td>{person.dob.age}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Table;
