function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>MSV123456</td>

            <td>Aadhaar</td>

            <td>
              <select>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Admin;