import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log(`평균값 계산 중...`);
    if(numbers.length===0)return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 빈 배열을 두 번째 파라미터에 주면 컴포넌트가 렌더링될 대 한 번만 함수가 생성됨

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); // number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가될 때마다 함수 생성

    const avg = useMemo(()=> getAverage(list), [list]);

    const onRemove = index => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index} onDoubleClick={() => onRemove(index)}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default Average;