import Link from "next/link"

export default function Home() {
  let name = 'Woo'
  return (
    <div>
      <h4 className="title">쿠팡</h4>
      <p className="title-sub">배송 by { name }</p>
    </div>
  )
}
