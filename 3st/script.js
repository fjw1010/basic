/**
 * LocalStorage 사용법
 * 서버에 저장할 정도로 중요하진 않은 정보를 저장하기 위해
 * 
 * 추가와 수정
 * localStorage.setItem("상품명", "멋있는 셔츠");
 * 가져오기
 * getItem("상품명")
 * 삭제하기
 * removeItem("상품명")
 * 
 * >> 여기서 상품명은 key 멋있는 셔츠는 value
 * 문제점
 * 데이터가 문자열로만 반환됨
 * 배열이면 배열이 벗겨져서 반환
 * 객체면 객체 안에 있는 값이 object로 반환
 * 
 * 해결법
 * JSON.stringify 사용
 */
const products = [
    {
      id: 1,
      brand: "아디다스",
      name: "멋진 아디다스 반팔티",
      price: 32000,
    },
    {
      id: 2,
      brand: "나이키",
      name: "멋진 나이키 바지",
      price: 30000,
    },
];
  
const 모음 = localStorage.setItem("products", JSON.stringify(products))

const newProduct = {
    id: 3,
    brand: "뉴발",
    name: "멋진 뉴발 신발",
    price: 78000,
};
