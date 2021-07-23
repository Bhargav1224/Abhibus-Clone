import React,{useState} from 'react'
import style from "./index.module.css";
export const FilterLeft = () => {
    const [typeAc, setTypeAc] = useState(false);
    const [typeNonAc, setTypeNonAc] = useState(false);
    const [typeSeater, setTypeSeater] = useState(false);
    const [typeSleeper, setTypeSleeper] = useState(false);
    const[busTypeCount,setbusTypeCount] = useState(0)
    const clearBusTypeFilter=()=>{
        setTypeAc(false)
        setTypeNonAc(false)
        setTypeSeater(false)
        setTypeSleeper(false)
        setbusTypeCount(0)
      }
    return (
        <div className={style.filtersBody}>
            <div>
              <div> Filters</div>
              <div >Clear ALL</div>
            </div>
            <div className={style.PriceDrop}>
              <div>Price Drop</div>
              <div>
                <input  type="checkbox" name="" id="" />
              </div>
            </div>
            <div className={style.BusType}>
              <div>
                <div>Bus Type</div>
                <div onClick={()=>clearBusTypeFilter()}>Clear({busTypeCount})</div>
              </div>
              <div className={style.BusTypeImage}>
                <div onClick={()=>{setTypeAc(!typeAc); typeAc? setbusTypeCount(busTypeCount-1):setbusTypeCount(busTypeCount+1)}} className={typeAc?style.BusTypeImageClick:style.BusTypeImageNotClick}>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-64/ac-1751742-1489628.png"
                   
                  />
                  <div>AC</div>
                </div>
                <div onClick={()=>{setTypeNonAc(!typeNonAc);typeNonAc?setbusTypeCount(busTypeCount-1):setbusTypeCount(busTypeCount+1)}} className={typeNonAc?style.BusTypeImageClick:style.BusTypeImageNotClick}>
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sun-2086492-1767677.png"
                    
                  />
                  <div>NON-AC</div>
                </div>
                <div onClick={()=>{setTypeSeater(!typeSeater);typeSeater?setbusTypeCount(busTypeCount-1):setbusTypeCount(busTypeCount+1)}} className={typeSeater?style.BusTypeImageClick:style.BusTypeImageNotClick}>
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sofa-2141960-1801961.png"
                    
                  />
                  <div>SEATER</div>
                </div>
                <div onClick={()=>{setTypeSleeper(!typeSleeper);typeSleeper?setbusTypeCount(busTypeCount-1):setbusTypeCount(busTypeCount+1)}} className={typeSleeper?style.BusTypeImageClick:style.BusTypeImageNotClick}>
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sleeping-position-1490581-1262070.png"
                    
                  />
                  <div>SLEEPER</div>
                </div>
              </div>
            </div>
            <div className={style.BusPartner}>
                <div>
                  <div>Bus Partner</div>
                  <div>Clear(0)</div>
                </div>
                <div>

                </div>
            </div>
          </div>
    )
}
