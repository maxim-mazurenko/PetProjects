const CoursesItems = (props) => {
  return (
    <>
      <div className="courses__item-img">
        <img src={props.img} alt={props.alt} />
      </div>

      <div className="courses__item-text">{props.text}</div>
    </>
  );
};

export default CoursesItems;
