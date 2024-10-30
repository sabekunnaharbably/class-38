
import './App.css'
import Container from './componentes/Container'
import Flex from './componentes/Flex'
import Images from './componentes/Images'
import imgone from '../src/assets/Logoo.png'
import Menu from './componentes/Menu'
import { AiOutlineDown } from "react-icons/ai";
import Button from './componentes/Button'

// npm

function App() {


  return (
    <>
    {/* Header Part */}
      <div className="bg-slate-400 py-6">
        <Container>
          <Flex>
            <div className="w-[15%]">
              <Images imgSrc={imgone} />
            </div>
            <div className="w-[70%] mt-2">
              <Flex className={"justify-center text-white"}>

              <Menu menuName={"Home"}/>
              <Menu menuName={"Shop"}/>
              <Menu menuName={"About"}/>
              <Menu menuName={"Contact"}/>
              <Menu menuName={"Journal"}/>


              {/* // <Menu menuName={"Home"}  /> <AiOutlineDown className={"mt-2 mr-6"}/>
              // <Menu menuName={"About"} /> <AiOutlineDown  className={"mt-2 mr-6"}/>
              // <Menu menuName={"Service"} /> <AiOutlineDown  className={"mt-2 mr-6"}/>
              // <Menu menuName={"Portfolio"} /> <AiOutlineDown  className={"mt-2 mr-6"}/>
              // <Menu menuName={"Price"} /> <AiOutlineDown  className={"mt-2 mr-6"}/>
              // <Menu menuName={"Blog"} /> <AiOutlineDown  className={"mt-2 mr-6"}/> */}

              </Flex>
            </div>
            {/* <div className="w-[15%] mt-2">
                 <Button btnText={"Contact Us"} className={"bg-btnColor py-3 px-6 rounded-full "}/>
            </div> */}
          </Flex>
        </Container>
      </div>
{/* Header Part End*/}

{/* Banner Part */}

<div className="bg-bannerimage py-5">

</div>





{/* Banner Part End*/}






    </>
  )
}

export default App
