import Card from "../card/cardcomponent";
import "./cardlist.css"

const CardList =({names})=>(  
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
               names.map((SingleName)=>{
                  return (
                   <Card  key={SingleName.id} SingleName={SingleName}/>
                  )
               })
            }
            </div>
)

export default CardList