export function validation(files?: object) {
  const file = Object.values(files);
  file.filter((el) => el.size > 5 * 1024 * 1024);

  return true;
}

// if (!file?.size) {
//   alert("이미지가 없습니다.");
//   return false;
// }

// if (file?.size > 5 * 1024 * 1024) {
//   alert("파일용량이 너무 큽니다.");
//   return false;
// }
