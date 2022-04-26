export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("promise시작");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dag1.jpeg");
      }, 3000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dag2.jpeg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dag3.jpeg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("promise시작");
  };

  const onClickPromiseAll = async () => {
    // 총 3초 걸림 결과값은 배열 ["https://dag1.jpeg", "https://dag2.jpeg", "https://dag3.jpeg"]
    // 하나 하나씩 확인하는 방법
    // console.time("Promise.all 시작");
    // const result = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dag1.jpeg");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dag2.jpeg");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dag3.jpeg");
    //     }, 3000);
    //   }),
    // ]);
    // console.log(result);
    // console.timeEnd("Promise.all 시작");

    // 2. 한방에 확인하는 방법
    console.time("Promise.all 시작");
    const result = [
      "https://dag1.jpeg",
      "https://dag2.jpeg",
      "https://dag3.jpeg",
    ].map(
      (el) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(el);
          }, 3000);
        })
    );

    console.log(result);
    console.timeEnd("Promise.all 시작");
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습하기!</button>
      <button onClick={onClickPromiseAll}>Promise All 연습하기!</button>
    </div>
  );
}
