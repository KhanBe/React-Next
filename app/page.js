
export default function Home() {
  let name = 'woo'
  let link = 'http://google.com'
  return (
    <div>
      <h4 style={{color : 'red', fontSize:'30px'}}>쿠팡</h4>
      <p className="title-sub">배송 { name }</p>
      <a href={link}>링크</a>
    </div>
  )
}
