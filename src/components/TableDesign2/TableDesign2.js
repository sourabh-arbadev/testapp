import { useEffect, useRef } from "react";
import "./TableDesign2.css";

export default function TableDesign2() {
  const tableRef = useRef();

  useEffect(() => {
    const table = tableRef.current;

    table.addEventListener('scroll', listenScroll);
    listenScroll();

    function listenScroll() {
      const contentWidth = table.scrollWidth;
      const containerWidth = table.offsetWidth;
      const scrollValue = table.scrollLeft;

      if (scrollValue) {
        if (Math.abs(contentWidth - containerWidth - scrollValue) <= 3) {
          table.style.setProperty('--fading-left', 'linear-gradient(90deg, white 25%, transparent 75%)');
          table.style.setProperty('--fading-right', '')
        }

        else {
          table.style.setProperty('--fading-left', 'linear-gradient(90deg, white 25%, transparent 75%)');
          table.style.setProperty('--fading-right', 'linear-gradient(90deg, transparent 25%, white 75%)');
        }
      }

      else {
        table.style.setProperty('--fading-left', '');
        table.style.setProperty('--fading-right', 'linear-gradient(90deg, transparent 25%, white 75%)')
      }
    }

    return () => table.removeEventListener('scroll', listenScroll);
  }, []);

  return (
    <div className="TableDesign2">
      <div className="TableDesign2-container">
        <div className="TableDesign2-filter">
          <div className='TableDesign2-search'>
            <div className='TableDesign2-icon'></div>
            <input className="TableDesign2-searchInput" placeholder='Search by ...' />
          </div>
          <div className='TableDesign2-filterMenu'>
            <div className='TableDesign2-icon'></div>
            <span>Filter</span>
          </div>
          <div className='TableDesign2-filterMenu'>
            <div className='TableDesign2-icon'></div>
            <span>Columns</span>
          </div>
          <div className='TableDesign2-filterMenu'>
            <div className='TableDesign2-icon'></div>
            <span>Export</span>
          </div>
          <div className='TableDesign2-filterMenu'>
            <div className='TableDesign2-icon'></div>
            <span>Dec 15, 2022 - Jan 15, 2023</span>
          </div>
        </div>
        <div className="TableDesign2-table" ref={tableRef}>
          <div className="TableDesign2-row">
            {Array.from({ length: 7 }, (_, i) => (
              <div className="TableDesign2-columnName" key={i}>
                Column
              </div>
            ))}
          </div>
          {Array.from({ length: 12 }, (_, i) => (
            <div className="TableDesign2-row" key={i}>
              {Array.from({ length: 7 }, (_, j) => (
                <div className="TableDesign2-data" key={j}>
                  Lorem ipsum
                </div>
              ))}
            </div>
          ))}
          <div className='TableDesign2-fadingRight'></div>
        </div>
      </div>
    </div>
  );
}
