function MediaCard(arg) {
  return (
    <div>
      <h1>{arg.title}</h1>
      <p>{arg.para}</p>
      <img src={arg.image} alt="horse image" />
    </div>
  );
}

export default MediaCard;
