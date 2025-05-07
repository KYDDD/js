//import 구문은 보통 모듈의 최상단에 정의
//Default Import
import MyMath from "./math.js";
//Mixed Import(권장하지 않음)
//import YourMath, { plus, minus } from "math.js";
MyMath.plus(1, 2);
MyMath.minus(2, 3);
MyMath.multiply(3, 4);
const haru = {
    name: "하루",
    age: 5,
};
console.log(haru);
if (MyMath.minus(5, 6) < 0) {
    //Dynamic Import
    import("./math.js").then((dynamicMath) => {
        dynamicMath.plus(7, 8);
    });
    const dynamicMath2 = await import("./math.js");
    dynamicMath2.minus(8, 9);
}
