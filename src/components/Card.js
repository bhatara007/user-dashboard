const Card = ( { title, value } ) =>{
    
    return (
      <div className="w-36 h-full bg-white">
        <p className="mt-1"> { title } </p>
        <p className="mt-1 text-2xl font-semibold"> {value} </p>
      </div>
    );
}