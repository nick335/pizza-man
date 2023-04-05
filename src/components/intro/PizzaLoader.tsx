import React from 'react'

export default function PizzaLoader() {

  return (
    <div className="relative w-[200px] h-[200px] block m-auto mt-[15%] rounded-[50%]">
    <div className="pizza-slice top-[5%] left-[15%] slice-ani">
      <div>
        <div className="crust"></div>
        <div className="cheese">
          <div className="peperoni pe-1"></div>
          <div className="peperoni pe-2"></div>
          <div className="peperoni pe-3"></div>
          <div className="olive o-1"></div>
          <div className="olive o-3"></div>
          <div className="olive o-4"></div>
          <div className="olive o-6"></div>
          <div className="olive o-7 "></div>
        </div>
      </div>
    </div>
    <div  className="pizza-slice top-[18%] left-[33%] rotate-[72deg] opacity-0 slice-ani slice-ani1 z-[2]">
      <div>
        <div className="crust"></div>
        <div className="cheese">
          <div className="peperoni pe-1"></div>
          <div className="peperoni pe-2"></div>
          <div className="peperoni pe-3"></div>
          <div className="olive o-1"></div>
          <div className="olive o-2"></div>
          <div className="olive o-3"></div>
          <div className="olive o-6"></div>
          <div className="olive o-7"></div>
        </div>
      </div>
    </div>
    <div className="pizza-slice top-[39%] left-[27%] rotate-[144deg] opacity-0 slice-ani slice-ani2">
      <div>
        <div className="crust"></div>
        <div className="cheese">
          <div className="peperoni pe-1"></div>
          <div className="peperoni pe-2"></div>
          <div className="peperoni pe-3"></div>
          <div className="olive o-3"></div>
          <div className="olive o-4"></div>
          <div className="olive o-5"></div>
          <div className="olive o-6"></div>
        </div>
      </div>
    </div>
    <div className="pizza-slice top-[38%] left-[5%] rotate-[216deg] opacity-0 slice-ani slice-ani3">
      <div>
        <div className="crust"></div>
        <div className="cheese">
          <div className="peperoni pe-1"></div>
          <div className="peperoni pe-2"></div>
          <div className="peperoni pe-3"></div>
          <div className="olive o-1"></div>
          <div className="olive o-2"></div>
          <div className="olive o-3"></div>
          <div className="olive o-4"></div>
        </div>
      </div>
    </div>
    <div className="pizza-slice top-[17%] -left-[3%] rotate-[288deg] opacity-0 slice-ani slice-ani4">
      <div>
        <div className="crust"></div>
        <div className="cheese">
          <div className="peperoni pe-1"></div>
          <div className="peperoni pe-2"></div>
          <div className="peperoni pe-3"></div>
          <div className="olive o-1"></div>
          <div className="olive o-2"></div>
          <div className="olive o-6"></div>
          <div className="olive o-7"> </div>
        </div>
      </div>
    </div>
  </div>
  )
}
