import logo from './logo.svg';
import './App.css';
import TableList from "./Components/TableList";
import { useState } from 'react';

function App() {
  const [listMahasiswa, setListMahasiswa] = useState([
    { 'mahasiswa_1': [1, 1, 1, 1] },
    { 'mahasiswa_2': [1, 1, 1, 1] },
    { 'mahasiswa_3': [1, 1, 1, 1] },
    { 'mahasiswa_4': [1, 1, 1, 1] },
    { 'mahasiswa_5': [1, 1, 1, 1] },
    { 'mahasiswa_6': [1, 1, 1, 1] },
    { 'mahasiswa_7': [1, 1, 1, 1] },
    { 'mahasiswa_8': [1, 1, 1, 1] },
    { 'mahasiswa_9': [1, 1, 1, 1] },
    { 'mahasiswa_10': [1, 1, 1, 1] },
  ])

  function changeData(index, id, value) {
    // console.log("mahasiswa" + index)
    // console.log("aspek" + id)
    // console.log("nilai" + value)

    setListMahasiswa((currentValue) => {
      const data = currentValue.map((item, i) => {
        if (i == index) {
          const sub = {
            [`mahasiswa_${i+1}`]: []
          }
          const subAspect = []
          item[`mahasiswa_${i+1}`].map((listAspect, j) => {
            if (j == id) {
              console.log("ids")
              return sub[`mahasiswa_${i+1}`].push(value)
            } else {
              return sub[`mahasiswa_${i+1}`].push(listAspect)
            }
          })
          return sub
        } else {
          return item
        }
      })
      return data
    })

  }

  function save() {
    console.log(listMahasiswa)
  }

  return (
    <div className="App">
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <table className="table">
        <tbody>
          <tr>
            <th></th>
            <td>Aspek <br /> Penilaian 1 </td>
            <td>Aspek <br /> Penilaian 2 </td>
            <td>Aspek <br /> Penilaian 3 </td>
            <td>Aspek <br /> Penilaian 4 </td>
          </tr>
          <TableList listMahasiswa={listMahasiswa} changeData={changeData} />
        </tbody>
      </table>
      <div className="row">
        <div className="col">
        </div>
        <div className="col-auto">
          <button onClick={save} className="btn btn-dark pull-right m-2 ">Simpan</button>
        </div>
      </div>
    </div>
  );
}

export default App;
