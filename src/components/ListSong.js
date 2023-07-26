import { useContext, useEffect, useState } from "react";
import { Songs } from "../context";

function ListSong() {
  const { DataSongs,handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setIdSong(idSong)
    handleSetSong(idSong)
  };
  useEffect(() =>{
    setIdSong(song.id)
  },[song])
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th>#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa-solid fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="text-white">
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'text-teal-400 bg-slate-500'}`}
              onClick={() => {
                handlePlaySong(song.id);
              }}
            >
              <td className="text-center">{song.id}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <i className="fa-solid fa-download"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSong;
