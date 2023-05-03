import Link from "next/link"

export default function Home() {
    let name = 'woo'
    return (
      <div>
          <h4 className="title">상품리스트</h4>
          <div className="food">
              <h4>상품 1 $10</h4>
          </div>
          <div className="food">
              <h4>상품 2 $15</h4>
          </div>
      </div>
    )
  }
  