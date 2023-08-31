### Data Type ?
- String, Number, Boolean, Undefined, Null, Obj, BigInt

### Var Let & Const ?
- Var -> dùng để khai báo biến, có thể khai báo lại, có thể gán lại nhiều lần (function scope)
- Let -> dùng để khai báo biến, có thể gán giá trị nhiều lần và không khai báo lại (block scope)
- Const -> dùng để khai báo 1 lần , chỉ có thể gán 1 giá trị , không được khai báo lại (block scope)

### Nguyên lý hoạt động a(++) / (++)a ?
- (++a) => {
  - Việc 1: +1 cho a, a = a + 1 => a = 7
  - Việc 2: Trả về a sau khi được + 1
}
- (a++) => {
  - Việc 1: `a copy`, `a copy` = 6
  - Việc 2: + 1 của a, a = a + 1 => a = 5
  - Việc 3: trả về `a copy`
}

### Toán tử Logical ?
- && - and (Vế trái và vế phải đều phải đúng)
- || - Or (Vế trái đúng hoặc Vế phải đúng thì đúng)
- ! - Not (Ngược lại đúng là sai)

### So sánh Truthy & Falsy ?
- Truthy : là những giá trị khi ép kiểu boolean thì bằng true
- Falsy : là những giá trị khi ép kiểu boolean thì bằng false
- Cách nhận biết Falsy: {
  0, -0, "", null, undefined, NaN, false 
}

### Các loại hàm trong JS ? 
- Declaration function => function showMessage() {}
- Expression function => var showMessage = function() {}
- Arrow function => const showMessage = () => {}


### Tham trị & Tham chiếu ?
- Tham trị : chứa một giá trị như Number, String, Boolean
- Tham chiếu: chứa một địa chỉ như Array, Obj

### So sánh == & === ?
- == -> nó chỉ set giá trị bên trong đó 
- === -> nó set data type của giá trị bên trong đó
- VD : {
  0 == false => true
  0 === false => false
  1 == '1' => true
  1 === '1' => false
  null == undefined => true
  null === undefined => false
  '0' == false => true
  '0' === false => false
  [] == [] or [] === [] => false (tham khảo các đối tượng khác nhau trong bộ nhớ)
  {} == {} or {} === {} => false (tham khảo các đối tượng khác nhau trong bộ nhớ)
}

### So sánh null & undefined ?
- NUll : là 1 giá trị rỗng được gán cho biến 
- UNDEFINED : chỉ xảy ra khi ta chưa gán giá trị cho biến 

### Object trong JS ? 
- Dấu [] là giá trị của key là biến hoặc biểu thức
- Có 2 cách truy vấn {
  Cách 1 : myInfo.age
  Cách 2 : myInfo[myKey]
}
- Sẽ có thuộc tính và phương thức

### Break & Continue & return?
- Break => có thể được sử dụng để nhảy ra khỏi vòng lặp.
- Continue => Muốn bỏ qua vài vòng lặp trong vòng lặp
- Return => sử dụng để trả về giá trị của hàm hoặc để kết thúc việc thực thi

### Math JS ?
- Math.max() => được sử dụng để tìm giá trị lớn nhất
- Math.min() => được sử dụng để tìm giá trị nhỏ nhất
- Math.round() => làm tròn giá trị số đến gần giá trị nguyên gần nhất. /// 2.4 = 2 ; 2.6 = 3
- Math.floor() => làm tròn xuống giá trị nguyên gần nhất // 2.4 = 2; 2.9 = 2
- Math.random() => trả về một số ngẫu nhiên từ 0 -> 1
- Math.sqrt() =>  tính căn bậc hai của một số

### Method Array ?
- forEach() => duyệt qua từng phần tử trong mảng
- filter() => kiểm tra và trả về các element thỏa mản điều kiện
- map() => trả về mảng mới có số lượng phần tử đúng với số lượng phần tử có giá trị trong mảng cũ
- reduce(func, giá trị khởi tạo) => trả về giá trị duy nhất
- every() => tất cả giá trị trong mảng đều thỏa mản điều kiện
- find() => tìm kiếm phần tử và trả về phần tử đó
- includes() => kiểm tra phẩn tử đó có ở trong mảng hay không giá trị true hoặc false trong mảng
- join() => trả về 1 mảng dưới dạng chuỗi 
- pop() => loại bỏ phần tử cuối trong mảng
- shift() => loại bỏ phần tử đầu trong mảng
- push() => thêm phần tử mới vào cuối mảng
- split() => tách chuỗi thành mảng
- splice() & substring() => cắt chuỗi
- concat() => ghép 2 mảng với nhau


### Phân biệt Local Storage, Session Storage, Cookie Storage ?
- Quyền truy cập: Local và Cookie ở trên windows, session chỉ tồn tại ở tab hiện tại
- Hạn kết thúc: Session khi đóng tab, Cookie tự set time, Local không bao giờ bị hủy (trừ khi mình can thiệp vào)
- Lưu trữ: Local và Session lưu trên Browser, Cookie có thể lưu trên Browser & Server

### CORS (Cross-origin resource sharing) ?
- là một cơ chế cho phép các nguồn tài nguyên trong một trang web được request bởi một domain khác 
(ví dụ như trang lotteria có thể gọi sang api của trang kfc nếu không bị block CORS)

### Hoisting ?
-Hoisting trong JavaScript là quá trình di chuyển các khai báo biến và hàm lên đầu phạm vi của chúng trước khi thực thi mã. Điều này có  nghĩa là bạn có thể sử dụng một biến hoặc hàm trước khi nó được khai báo, nhưng giá trị của biến sẽ là undefined cho đến khi khai báo thực sự được thực hiện.
- var bị ảnh hưởng bởi cơ chế hoisting và hoạt động ở mọi nơi trong global scope
- let không bị ảnh hưởng bởi hoisting, có thể tái gán giá trị và hoạt động trong block scope
- const không bị ảnh hưởng bởi hoisting, không thể tái gán giá trị và hoạt động trong block scope

### Event Loop ?
- Event loop có hai thành phần chính:
  + Call stack: Đây là nơi các hàm được thực thi tuần tự. Khi một hàm được gọi, nó sẽ được đẩy vào call stack và sẽ tiếp tục thực thi cho đến khi nó hoàn thành hoặc gặp phải một lỗi.
  + Event queue: Đây là nơi các sự kiện bất đồng bộ được lưu trữ. Khi một sự kiện xảy ra, nó sẽ được thêm vào event queue và sẽ được xử lý bởi event loop khi call stack trống.
Event loop hoạt động như sau:
  + Các hàm được gọi tuần tự trong call stack.
  + Khi call stack trống, event loop sẽ kiểm tra event queue.
  + Nếu event queue có các sự kiện, event loop sẽ lấy sự kiện đầu tiên và xử lý nó.
  + Nếu event queue không có các sự kiện, event loop sẽ đợi cho đến khi có một sự kiện xảy ra.
  + Event loop là một phần quan trọng của JavaScript và cho phép JavaScript xử lý các tác vụ bất đồng bộ một cách hiệu quả.

### JSON (Javascript Obj Notation) ?
- Là một dịnh dạng dữ liệu (chuỗi) 
- JSON thể hiện dạng dữ liệu: Number, Boolean, Null, Array, Obj
- Stringify / Parse

### Promise ?
- Promise là một đối tượng thể hiện cho sự hoàn thành hoặc thất bại của một tiến trình bất đồng bộ, 
giúp thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell
- State: + pending + fulfilled + rejected
- Nếu có 3 promise đang chạy : promise.all
- Sử dụng : xử lý các tác vụ bất đồng bộ phức tạp hơn như là lấy dữ liệu từ server hoặc thao tác với dữ liệu và tránh bị callbackhell

### Callback ?
- là hàm được truyền qua đối số khi gọi hàm khác

### Async/Await ?
- Giúp xử lý bất đồng bộ một các đơn giản
- Giúp tạo ra mã dễ đọc và dễ hiểu hơn so với Promise
- Sử dụng : xử lý các tác vụ bất đồng bộ phức tạp nhất mã dễ đọc và dễ hiểu

### Closure ?
- là một hàm được viết lồng vào bên trong một hàm khác (hàm cha) mà nó có thể sử dụng và thay đổi các tham số của hàm cha lẫn của chính nó.

### Call(), Bind(), apply() ?
- Call(): là phương thức trong prototype của fnc constructor, là gọi hàm
- bind(): trả về một hàm mới, khi được gọi, nó có giá trị this được đặt thành một giá trị cụ thể.
- apply(): Gọi hàm và cho phép bạn truyền vào một object và các arguments thông qua mảng
- This : là một từ khóa mà bản chất của nó giống như tên gọi của nó, đó là ám chỉ đối tượng hiện tại đang được sử dụng hoặc đang truy cập tới


### ES6 {
  ## Template Literals {
    - cho phép tạo chuỗi có thể truyền biến vào một các dễ dàng, cú pháp sử dụng dấu backtick `${}`
  ## } 

  ## Clases {
    - Lớp, viết code theo kiểu hướng đối tượng một các dễ dàng 
  ## }
  
  ## Default parameter values {
    - Là thiết lập giá trị mặc định cho các tham số của hàm, nếu không có giá trị thì mặc định sẽ là undefined
  ## }

  ## Enhanced object literals {
    - Định nghĩa key value cho object
    - Định nghĩa method cho object
    - Định nghĩa key cho obj dưới dạng biến

    VD : {
      var name = 'Javascript'
      var price = 1000

      var course = {
        name, 
        price,
        getName() {}
      }
    }
  ## }

  ## Destructuring, Rest {
      - Destructuring : là phân rã, giúp gán giá trị của một đối tượng hoặc mảng cho các biến riêng lẻ.
      VD {
        var array = ['Javascript', 'PHP', 'Java']
        var [a,b,c] = array;
        console.log(a,b,c)
      }
      
      - Rest : - Lấy ra phần còn lại, Khi sử dụng kết hợp với Destructuring
               - Dùng để khai báo hàm với số lượng tham số không xác định, các tham số truyền vào sẽ hợp thành 1 mảng
      VD {
        var array = ['Javascript', 'PHP', 'Java']
        var [a, ...rest] = array;
        console.log(a)
        console.log(rest)
      }

      VD {
        var course = {
          name : 'Javascript',
          price: 1000,
          image: 'image-address',
          children: {
            name: 'ReactJS',
          }
        }

        - Để thay đổi giá trị trùng nhau dùng name: parentName
      }
  ## }

  ## Spread {
      - khác với rest nó nhận vào mảng hoặc obj và trả ra từng phần tử
  ## }

  ## Modules {
    - tách code của ứng dụng thành module riêng biệt, dễ dàng quản lý
  ## }

  ## Optional chaining (?.) {
    - xử lý data của obj có tồn tại obj con hay không 
  ## }

### }

### Scope {
  -Phạm vi là khả năng truy cập của các biến, hàm và đối tượng trong một số phần cụ thể của mã của bạn trong thời gian chạy. Nói cách khác, phạm vi xác định mức độ hiển thị của các biến và các tài nguyên khác trong các vùng mã của bạn.
  - Có 3 loại: Block scope-> nằm trong Loop, if,else và chỉ hoạt động trong đó , Function scope -> nằm trong function, Global scope
### }

### Có 5 loại selector ? {
  - document.quearySelector('.example')
  - document.quearySelectorAll('p')
  - document.getElementsById('example')
  - document.getElementsByClassName('example')
  - document.getElementsByTagName('p')
### }
