# Todo App Project

React, Tailwind, useContext를 사용하여 CRUD 기능을 가진 Todo 앱을 만들었습니다.

## 완성화면

URL: [todo-allzvvell.netlify.app](https://todo-allzvvell.netlify.app/)

## 주요기능

* 사용자는 하단의 입력 폼을 통하여 할 일을 추가 할 수 있으며 각각의 할 일에 대하여 수정과 삭제가 가능합니다.

* 체크박스로 완료, 미완료 상태를 표시할 수 있으며 탭 메뉴를 클릭하여 상태별로 필터링된 목록을 확인 할 수 있습니다.

* 우측 상단의 토글 버튼을 통하여 UI 테마를 변경 할 수 있습니다.

* 최종적으로 지정한 할 일 목록과 테마는 localStorage에 저장되어 페이지를 새로고침 하여도 초기화되지 않습니다.

## 기술스택

### JavaScript

* 최초 실행시 seed data를 fetch하여 불러오기
* 상태가 업데이트 될 때 마다 localStorage에 값을 저장
* if,switch 문을 통해 상태에 따라 다른 코드를 실행
* getBoundingClientRect와 event객체의 프로퍼티를 활용하여 애니메이션 적용
* 삼항연산자와 논리연산자를 사용하여 상태별 속성과 클래스를 지정
* 구조분해할당으로 간략한 변수명 사용

### React

* 코드가 실행되어야 하는 시점을 고려하여 useEffect(componentDidMount, componentDidUpdate)를 사용
* 배열 메소드 filter와 map을 활용하여 리스트의 상태를 변경, CRUD 기능을 구현
* useState와 onChange 속성을 통해 form을 controlled component로 변경
* 별도의 상태관리 라이브러리 대신 React Hook useContext를 사용하여 공통의 상태를 관리

### Tailwind

* 메인컬러와 폰트를 커스텀 해두고 css파일 없이 클래스만으로 스타일 완성

## Review
