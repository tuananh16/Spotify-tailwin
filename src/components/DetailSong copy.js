function DetailSong() {
  return (
    <div className="col-span-1">
      <h2 className="text-cyan-500 font-bold">Now playing</h2>
      <p className="text-neutral-400 text-2xl">Sing me to sleep</p>
      <div className="w-[240px] m-auto mt-10">
        <img className="w-full" src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="avata"/>
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img className="w-[70px] rounded-full" src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="avata"/>
        <span className="text-xl text-white">Alan walker</span>
      </div>
    </div>
  );
}

export default DetailSong;
