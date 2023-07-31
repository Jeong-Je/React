import { useParams, useLocation, useNavigate } from "react-router-dom";

const WithRouterSample = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h4>Location</h4>
      <textarea
        style={{ heigth: "150px" }}
        // null, 2를 JSON.stringfy에 넣어주면 들여쓰기가 적용된 상태로 문자열이 만들어짐
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly
      />

      <h4>Params</h4>
      <textarea
        style={{ heigth: "150px" }}
        value={JSON.stringify(params)}
        rows={7}
        readOnly
      />

      <button onClick={() => navigate("/")}>홈으로</button>
    </div>
  );
};

export default WithRouterSample;
