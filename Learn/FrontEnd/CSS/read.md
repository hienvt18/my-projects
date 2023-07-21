### CSS (Cascading Style Sheets)

### Reset CSS ? https://meyerweb.com/eric/tools/css/reset/
- Là remove những khoảng trống ban đầu của trình duyệt


### Cấu trúc CSS ?
- selector {
  property : value
}

- selector (p, div, h1, main, a, span)
- property (color, background-color)
- value (red, orange, yellow)

### Thuộc tính Color ?
- Color : value ={
  - named : red, orange, yello
  - hexa : #ffa400, #ff7870, #00aefd
  - rgb : rgb(0,0,0), rgb(255,255,255)
  - rgba : rgba(0,0,0, alpha (opacity: 0 -> 1)
}


### Đơn vị hay dùng CSS ?
- vw, vh : viewport width, viewport height
- Khác nhau vw, vh và % : % là sẽ chạy thẻ phần tử mà cha chứa nó, còn vw không quan tâm thẻ cha là bao nhiêu chỉ chạy theo cái viewport 

### Sự khác nhau đơn vị em và rem ?
- font-size : 100% = 16px;
- 1em = 1rem = 16px
- Đơn vị em : là đơn vị sẽ phụ thuộc vào thuộc tính font-size của chính nó hoặc phần tử chứa nó 1em = 32px
- Đơn vị rem: là đơn vị sẽ phụ thuộc vào thuộc tính font-size của thẻ html 
(
  100% = 16px 
  ?% = 10px => ? = 62.5%
)

### Thuộc tính border ?
- border: border-width, border-style, border-color

### Thuộc tính margin và padding khác nhau ?
- Magrin: sử dụng để tạo không gian xung quanh các phần tử
- Padding: sử dụng để tạo không gian xuanh quanh nội dung của phần tử 

### Box-sizing ?
- Giúp set border, padding cho phần tử thì kích thước ban đầu sẽ tăng lên vì vậy ta dùng 
- Box-sizing : border-box để ngăn chặn nó, nó sẽ tính toán phần content + phần tăng thêm sẽ bằng kích thước ban đầu
- Giá trị mặc định là content-box {
  - width = width + padding left + padding right + border-left + border-right
    100 + 10px + 10px + 5px + 5px = 130px
  - height = height + padding top + padding buttom + border-top + border-buttom
    100 + 10px + 10px + 5px + 5px = 130px
}

- Giá trị thay đổi là border-box {
  - width = width - padding left - padding right - border-left - border-right
    100 - 10 - 10 - 5 - 5 = 70px
  - height = height - padding top - padding buttom - border-top - border-buttom
    100 - 10 - 10 - 5 - 5 = 70px
}

### Model Box ?
- Model box -> trong 1 trang web sẽ hình hành 1 hình chữ nhật riêng 
- Là khoảng không gian phần tử đó chiếm trong trang web gồm : content -> border -> padding -> magrin

### Sự khác biệt opacity visibility và display none ?
- opacity : vẫn chiếm diện tích có thể nhấn váo đc 
- visibility hidden: vẫn chiếm diện tích không nhấn vào đc
- display none : không chiếm diện tích và không nhấn vào đc

### Độ ưu tiên CSS ?
Tags < Class < ID < !important

### CSS Pseudo-class ?
- Pseudo-class hiểu đơn giản là một "selector" mô tả một trạng thái đặc biệt nào đó của element hiện tại
- Một số loại pseudo-class hiện có: :hover, :active

### Flexbox & Grid ?
- Flexbox : một chiều có thể set ngang hoặc dọc
- Gird : hai chiều có thẻ set ngang và dọc

### maxwidth ?
- xác định chiều rộng tối đa của một phần tử.
- Nếu nội dung lớn hơn chiều rộng tối đa, nó sẽ tự động thay đổi chiều cao của phần tử.

### minwidth ?
- xác định giá trị chiều rộng tối thiểu cho chiều rộng của một phần tử
- Nếu chiều rộng của phần tử nhỏ hơn giá trị tối thiểu được định nghĩa, nó sẽ được mở rộng ra để phù hợp với kích thước được chỉ định

### Responsive ?
- chỉ một website có khả năng hiển thị độ tương thích trên mọi kích thước của trình duyệt

### Position CSS ? => {
  - Giá trị mắc định static 

  ### Thuộc tính position relative ?
  - Lấy vị trí của mình làm tọa độ gốc ( không phụ thuộc vào ai | di chuyển tự do ) + Top , Right , Bottom , Left => chỉ hoạt động khi có position

  ### Thuộc tính position absolute ?
  - Coi thẻ cha gần nhất có thuộc tính position làm gốc tọa độ 

  ### Thuộc tính position Fixed ?
  - Xác định vị trí tuyệt đối theo vùng hiển thị của trình duyệt

  ### Thuộc tính position Sticky ?
  - Xác định vị trí theo vị trí cuộn của người dùng (scroll) 
}
