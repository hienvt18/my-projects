### HTML (HyperText Markup Language) https://htmlreference.io/
- Doctype HTML là kiểu văn bản HTML
- Html lang = “en” có thuộc tín lang bằng tiếng anh
- Meta charset là để hiển thị về ngôn ngữ
- Meta name là để hiện thị responsive
- Thẻ HTML cơ bản (h1->h6, p, a, img, br, hr, input)
- Thẻ sematic gồm những thẻ {Header,Footer, aside, nav, main, section, article(dùng để làm 1 bài viết) , ifame(nhúng nguồn) }
- Các thẻ inline : {
  a, label, button, strong, span, small
}
- Các thẻ block : {
  div, footer, h1 -> h6, header, main, ul, aside, from, nav
}

### DOM ?
- DOM là viết tắt của Document Object Model. DOM là một cách thức biểu diễn HTML hay XML trong dạng cây hình thành bởi các đối tượng. Các đối tượng trong DOM có thể được truy cập và thao tác thông qua JavaScript để thay đổi nội dung và cấu trúc của trang web.
- Có 3 thành phần (Element, Attribute, text)


### Sự khác biệt inline, block, inline-block ?
- Inline : không xuống dòng, không xét được height/width, chỉ xét được margin và padding left-right
- Block : xuống dòng, xét được height/width, padding/margin 4 huớng
- Inline-block :  không xuống dòng, xét được height/width, padding/margin 4 huớng

### Class & Id ?
- Class: Là thuộc tính dùng để nhóm các phần tử HTML thành các nhóm (hoặc lớp) chung để thực hiện các công việc như tạo định dạng CSS chung, JavaScript chung và làm cho mã HTML trở nên dễ đọc hơn

- Id: Là thuộc tính dùng để duy nhất hóa một phần tử HTML trong toàn bộ trang web. Mỗi ID phải là duy nhất và chỉ được sử dụng cho một phần tử HTML. Điều này là để đảm bảo rằng JavaScript hoạt động chính xác trên phần tử HTML đó.

### BEM (Block Element Modifier) ?
- Là 1 phương pháp đặt tên trong CSS
- VD: {
  laptop => Block
  Keyboard, mouse, tounchpad, màn hình => Element
  laptop big, laptop small: Modifier for Block
  Small keyboard, small screen : Modifier for Element

  Cách đặt tên : {
    Block: Laptop
    Block__Element--Modifier: laptop__touchpad--smooth, laptop__screen--scale
    Block--Modifier: laptop--small, latop--expensive, laptop--big
    Block__Element : laptop__keyboard, laptop__touchpad, laptop__screen
  }
}