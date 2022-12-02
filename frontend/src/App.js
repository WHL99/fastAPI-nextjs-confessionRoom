import { AppBar, Toolbar, Button, Box, TableContainer, Table, TableRow, TableCell, TableBody, TextField } from '@material-ui/core/';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [theUsers, setTheUsers] = useState([])
  const [theUser, setTheUser] = useState({})
  const APIURL = 'http://localhost:8000/'

  const getUsers = () => {
    axios.get(APIURL)
      .then(res => setTheUsers(res.data))
      .catch(err => console.error(err))
  }

  const getUser = (id) => {
    axios.get(APIURL + id)
      .then(res => setTheUser(res.data))
      .catch(err => console.error(err))
  }

  const handleSubmit = async () => {
    if (theUser.id) {
      await axios.put(APIURL + theUser.id, theUser)
        .catch(err => console.error(err))
    } else {
      await axios.post(APIURL, theUser)
        .catch(err => console.error(err))
    }
  }

  const handleDelete = async (id) => {
    await axios.delete(APIURL + id)
      .catch(err => console.error(err))

  }

  useEffect(() => {
    getUsers()
  })

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">FastAPI-React</Button>
        </Toolbar>
      </AppBar>
      <Box m={10}>
        <TableContainer>
          <TextField value={theUser.id || ''} type="hidden" />
          <Table aria-label="simple table">
            <TableBody>
              <TableRow >
                <TableCell>
                  <TextField value={theUser.name || ''} onChange={(e) => setTheUser({ ...theUser, name: e.target.value })} id="standard-basic" label="Name" />
                </TableCell>
                <TableCell >
                  <TextField value={theUser.email || ''} onChange={(e) => setTheUser({ ...theUser, email: e.target.value })} id="standard-basic" label="Email" />
                </TableCell>
                <TableCell >
                  <TextField type="password" value={theUser.password || ''} onChange={(e) => setTheUser({ ...theUser, password: e.target.value })} id="standard-basic" label="Password" />
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="default" onClick={handleSubmit}>
                    Submit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow >
                <TableCell > Name</TableCell>
                <TableCell >Email</TableCell>
                <TableCell >Password</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              {theUsers.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name} </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>********</TableCell>
                  <TableCell>
                    <Button onClick={() => getUser(row.id)} variant="outlined" color="primary">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleDelete(row.id)} variant="outlined" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </div>
  );
}

export default App;
