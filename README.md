- container presentational 패턴 변경 사항
  => 최상단 container만 존재, API 로딩 진행 => redux dispatch()
  => 자식컴포넌트는 해당 패턴을 쓰지 않고, useSelector로 다 씁니다.

- 컴포넌트 구조
  - 의미단위 컴포넌트 디렉토리
    - index.tsx : 컴포지션/컴바인 컴포넌트의 역할을 할 수 있습니다.
    - interface.tsx : 해당 컴포넌트에서 쓰는 모든 인터페이스를 관리합니다. export는 default로 하지 않습니다.
    - 최상단컨테이너.tsx: API를 콜합니다. redux에 dispatch해줍니다. Mount시점 관리 필요 useEffect
    - 자식 컴포넌트 디렉토리 1
    - 자식 컴포넌트 디렉토리 2  
    ...

