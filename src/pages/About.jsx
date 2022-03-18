import queryString from 'query-string';

export default function About(props) {
  const searchParams = props.location.search;
  console.log(props);
  // 패키지 설치 전 사용 방법 
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get("name"));

  // 패키지 설치 후 사용 방법   
  const query = queryString.parse(searchParams);
  console.log(query);
  return (
  <div>
    <h2>About 페이지입니다.</h2>
    {query.name && <p>name은 {query.name} 입니다.</p>}
  </div>
  );
}