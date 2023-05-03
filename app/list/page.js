import Link from "next/link"

export default function Home() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

    return (
      <div>
          <h4 className="title">상품리스트</h4>
            {
                상품.map((obj, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.jpeg`} className= "food-img" />
                            <h4>{obj} ${(i + 1) * 10}</h4>
                        </div>
                    )
                })
            }
      </div>
    )
  }
  