function List(props) {
  return (
    <>
      {props.itemList.map((item, key) => {
        return (
          <div key={key} className="shortenedLink">
            <div className="orginalLink">
              <span>{item.input_link}</span>
            </div>
            <span className="afterLineLink"></span>
            <div className="linkAndBtn">
              <span className="shortLink">{item.short_link}</span>
              {/* prettier-ignore */}
              <button className="copy"  onClick={async (i) => { i.target.innerHTML = "Copied!";
             i.target.className = "copied";
                  return await navigator.clipboard.writeText(item.short_link);
                }}>Copy</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default List;
