import React from "react";
import { useSearchParams } from "react-router-dom";

const About = ({ location }) => {
  const [searchParams] = useSearchParams();
  const showDetail = searchParams.get("detail");
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 {showDetail}로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
