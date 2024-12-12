export default function SideBar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sidebar">
      <div onClick={ handleToggleModal } className="bg-overlay"></div>
      <div className="sidebar-content">
        <h2>{data?.title}</h2>
        <div className="DescriptionContainer">
          <p className="DescriptionTitile">{data?.date}</p>
          <p>
         {data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
