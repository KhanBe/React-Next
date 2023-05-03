import agee from './data.js'

export default function Home() {
  return (
    <div>
      <h4 className="title">장바구니 {agee}</h4>
      <CartItem/>
    </div>
  )
}

function CartItem() {
  return (
    <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
  )
}