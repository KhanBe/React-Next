First > Create project int terminal

```bash
Desktop\Next\test> npx create-next-app@latest --experimental-app
Download Complate!
Desktop\Next\test> npm install //자바스크립트패키지매니저
```


- app 파일의 page.js가 메인 페이지를 다루게 된다.
- package.json : 설치한 라이브러리를 자동으로 기록해주는 파일.
- layout.js : page.js를 감싸는 파일.
- globals.css : css다루는 파일.
- ???.module.css : 특정 페이지만 css적용 시키는 파일.
- api\route.js : api폴더는 서버기능을 만드는 곳.
- node_modules : 프로젝트 구동에 필요한 모든 라이브러리 파일을 보관하는 공간.
- public : 이미지나 폰트파일 담는 (소스코드 외) 공간.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## React 문법 규칙

- return () 안에 HTML 넣을 때 1개의<태그>로 시작해서 끝나야한다.
- class 넣을 때 className으로 넣어준다. 자바스크립트의 class랑 겹치기 때문
- HTML안에 변수 넣는 방법은 {} 중괄호.
- style 속성을 넣으러면 style={{ color : ???, font : ???}} 이런식.


- Routing : url로 페이지를 나누는 행위.
- 페이지 만드는 방법 : app 아래에 폴더 만들고 그 아래에 page.js파일 만들면 끝.
- 모든 페이지에 보일 HTML작성 방법 : layout.js에 작성한다.
- layout.js의 함수에 {children}은 page.js가 들어가게 된다.
- 동작 원리 : 같은파일에 layout.js가 있으면 page.js를 감싼 후 보여주게 된다. 또 상위폴더에 layout.js가 있으면 한번 더 감싸서 보여주는 원리이다.

HTML은 for문, if문을 못쓴다. 그래서 map()함수를 사용해야한다.

## 반복문 Map

```
let arr = [2, 3, 4]
arr.map((a, i)=>{

})
```
map은 for(auto a : arr) 이런 느낌이다.
map에는 2개의 파라미터를 넣을 수 있다.
반복문이 돌면서 a 는 value값이 되고 i 는 index값으로 된다.

```
let arr = [2, 3, 4]
let brr = arr.map((a, i)=>{
	return 10;
})
```
이렇게 해주면 brr에 10값이 3번 담기게 된다.

```
{
               	상품.map((obj, i) => {
                    return (
                        <div className="food" key={i}>
                            <h4>{obj} $10</h4>
                        </div>
                    )
                })
}
```

결국 {} 자리에 [<div>,<div>,<div>]가 남게 되는 구조이다.

map 반복문 사용시 리액트에서는 키 속성 key={value}를 넣어주는걸 권장한다.
반복문으로 구분하기 힘들어서

## 이미지

이미지는 public폴더에 저장한다.

```
<img src="/tomato.jpeg" alt=“토마토” />
```

‘/‘로 시작하면 public폴더를 기준으로 해준다.
alt로 이미지 설명을 적는다. 검색 노출의 이점.

### 이미지 파일의 규칙적인 이름으로 나타내고 싶은 경우
ex) food0.jpeg, food1.jpeg, food2.jpeg
```
<img src={`/food${i}.jpeg`} className= "food-img" />
```

### 이미지 최적화 하는 방법 3가지
- lazy loading을 적용한다.
- 사이즈를 최적화 한다.
- layout shift 현상을 방지한다.

외부사이트 이미지를 가져오려면 next.config.js 세팅도 해줘야한다.


## 컴포넌트
- 길고 복잡한 html을 한 단어로 축약한 것. (함수 같음)

```
function CartItem() {
  return (
    <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
  )
}
```
컴포넌트 선언 후 ```<CartItem></CartItem>```  또는  ```<CartItem/>``` 로 불러쓰면 된다.

컴포넌트의 단점
- 컴포넌트끼리 데이터 공유가 힘들다.


### Next.js는 컴포넌트 종류가 2가지이다.
1. server component
2. client component

- 그냥 아무데나 컴포넌트 만들면 서버 컴포넌트이다.
- 하지만 ```’use client’``` 를 파일 맨 위에 작성 하면 클라이언트 컴포넌트가 된다.

#### server component
- html에 자바스크립트 기능을 넣을 수 없다.
- 로딩 속도 빠르다. (자바스크립트 기능이 필요 없기 때문)
- 검색엔진 노출에 유리하다.
#### client component
- 자바스크립트 기능을 넣을 수 있다.
- 로딩속도가 느리다. (자바스크립트 필요 문제, hydration과정을 거쳐야 하는 문제)

** *hydration ** : 유저에게 html을 보낸 후 자바스크립트로 html을 다시 읽고 분석하는 과정

#### 결론
큰 페이지는 server component를 추천
JS기능이 필요한 곳만 client component 추천

