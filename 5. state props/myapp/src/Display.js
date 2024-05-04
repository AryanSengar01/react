
function Display(props){
    return(<>
        <center><h2>User Details</h2></center>
      <table border='1' align="center" cellSpacing={0} cellPadding={6} width="100%">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Address</th>
        </tr>
          {
            props.data.map((obj)=>{
              return (<tr>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.password}</td>
                <td>{obj.address}</td>
              </tr>)
            })
          }
      </table>
    </>);
  }
export default Display;  