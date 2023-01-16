import "./TableDesign.css";

export default function TableDesign() {

  return (
    <div className="TableDesign">
      <div className="TableDesign-container">
        <div className="TableDesign-filter">
          <div className='TableDesign-search'>
            <div className='TableDesign-icon'></div>
            <input className="TableDesign-searchInput" placeholder='Search by ...' />
          </div>
          <div className='TableDesign-filterMenu'>
            <div className='TableDesign-icon'></div>
            <span>Filter</span>
          </div>
          <div className='TableDesign-filterMenu'>
            <div className='TableDesign-icon'></div>
            <span>Columns</span>
          </div>
          <div className='TableDesign-filterMenu'>
            <div className='TableDesign-icon'></div>
            <span>Export</span>
          </div>
          <div className='TableDesign-filterMenu'>
            <div className='TableDesign-icon'></div>
            <span>Dec 15, 2022 - Jan 15, 2023</span>
          </div>
        </div>
        <div className="TableDesign-table">
          <div className="TableDesign-row">
            {Array.from({ length: 7 }, (_, i) => (
              <div className="TableDesign-columnName" key={i}>
                Column
              </div>
            ))}
          </div>
          {Array.from({ length: 8 }, (_, i) => (
            <div className="TableDesign-row" key={i}>
              {Array.from({ length: 7 }, (_, j) => (
                <div className="TableDesign-data" key={j}>
                  Lorem ipsum
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
