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
