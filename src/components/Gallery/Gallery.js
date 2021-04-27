import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="outer-wrap">
      <h1> Picture Gallery</h1>

      <div className="gallery-wrap">
        <img src="https://www.camphanover.org/wp-content/uploads/Camp-Hanover-virginia-christian-summer-camp-tree-green-small-group-ms-600x-2.jpg" />
        <img src="https://www.camphanover.org/wp-content/uploads/Camp-Hanover-virginia-christian-summer-camp-staff-orange-shirt-walk-with-campers-600x-2.jpg" />
        <img src="https://www.camphanover.org/wp-content/uploads/Camp-Hanover-virginia-christian-summer-camp-campers-pyramid-boardwalk-600x.jpg" />
        <img src="https://www.camphanover.org/wp-content/uploads/Camp-Hanover-virginia-christian-summer-camp-campers-girls-muscle-pose-600x.jpg" />
        <img src="https://www.camphanover.org/wp-content/uploads/Camp-Hanover-virginia-christian-summer-camp-day-camp-parachute-600x.jpg" />
        <img
          style={{ height: "100%" }}
          src="https://www.camphanover.org/wp-content/uploads/family-camp-ropes-600x900.jpg"
        />
      </div>
    </div>
  );
};

export default Gallery;
