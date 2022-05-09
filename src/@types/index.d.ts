interface TextInter {
  /* 轮播文字的内容 */
  text: string;
  /* 轮播文字的颜色 */
  color?: string;
  /* 默认展示 */
  active: boolean;
  /* 开始的起点坐标 */
  begin?: number;
  /* 结束的坐标 */
  end?: number;
  /* 标识此项是 html 还是 text */
  type: "html" | "text";
}
