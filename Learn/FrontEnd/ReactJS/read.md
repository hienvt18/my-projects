### Virtual DOM ?
- Virtual DOM là một Object chứa các thông tin cần thiết để tạo ra một DOM. 
Nó có khả năng tính toán, cập nhật các node mà không cần sử dụng DOM APIs. 
Sau khi cập nhật trên DOM ảo, các thay đổi sẽ được thực hiện với Original DOM => không cần render lại toàn bộ DOM tree

### JSX ?
- là 1 cú pháp mở rộng cho JavaScript, là kết hợp của JavaScript và XML. 
Nó chuyển đổi cú pháp dạng gần như XML về thành JavaScript, giúp chúng ta có thể code ReactJS bằng cú pháp của XML thay vì phải dùng JavaScript

### Life Cycle ?
- Là 1 chu kì của component được khởi tạo 
- Có 3 giai đoạn : {
    + Moutting : gọi hàm contructor  được gọi đầu tiên khi component được khởi tạo
    + Khi component được Mounting(tạo ra) sau khi đi qua hàm Constructor và render lần đầu thì sẽ gọi hàm DidMount() để gọi api để lấy dữ liệu cập nhật state. DidUpdate() :phương thức này được gọi sau khi component đã được cập nhật.
    + Khi component unmounting (hủy bỏ) ta sẽ gọi hàm WillUnMount(). phương thức này được gọi trước khi component bị huỷ bỏ và cho phép bạn thực hiện các hành động dọn dẹp như huỷ các kết nối socket hoặc hủy các hàm setInterval
}

### Mounted & Unmounted ? 
- Đơn giản là khi sử dụng thì gọi là Mounted, còn không sử dụng tới là Unmounted

### High-order component ? 
- Là một pattern trong ReactJS cho phép tái sử dụng logic của component một cách linh hoạt 
- Cách nhận biết tham số đầu vào và trả về một component mới có thể sử dụng các props của component cũ
- Giúp giảm đáng kể lượng code cần phải viết và cải thiện tính tái sử của code 

### State & props ?
- Props được truyền vào Component cha và có thể truy cập được ở các Component con
- State được dùng để biểu diễn trạng thái của Component. State là một thành phần của Component và chỉ có thể bị thay đổi bởi chính Component chứa nó.
- Props và State đều được sử dụng để lưu trữ dữ liệu trong Component
- Khác nhau: + Công dụng + Phạm vi sử dụng + Trong component, props cố định ở các Component con, state có thể bị thay đổi ở các Component con

### OneWayBinding & TwoWayBinding ? 
- Oneway vì khi đổi model thì view không đổi (html không đổi), phải thay đổi state
- Trong React, data được thiết kế là chỉ đi một chiều từ cha xuống con (trong Angular đi 2 chiều đuợc)

### React hook {
  ## useState() {
    - dùng muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)
    - Lưu ý {
      - Component được re-render sau khi `setState`
      - Initial state chỉ dùng lần đầu
      - setState là thay thế state bằng giá trị mới 
    }
  ## }

  ## useEffect {
    - Side effects: khi có 1 tác động xãy ra dẫn tới dữ liệu bị thay đổi 
    - Callback luôn được gọi khi component mounted
    - Callback luôn được gọi sau khi component mounted
    - Cleanup function luôn được gọi trước khi component unmounted
    - Cleanup function luôn được gọi trước khi callback được gọi (trừ mounted)
    - [
      Events: Add / remove event listener
      Observer pattern: Subscribe / unsubscribe
      Closure
      Timers: (setInterval, setTimeOut, clearInterval, clearTimeOut)
      useState
      Mounted / unounted
      === 
      Call API
    ]
    - Có 3 trường hợp {
      - useEffect(callback) {
        - Gọi callback mỗi khi component re-render
        - Gọi callback sau khi component thêm element vào DOM
      }
      - useEffect(callback, []) {
        - Chỉ gọi callback 1 lần sau khi component mounted
      }
      - useEffect(callback, [deps]) {
        - Callback sẽ được gọi lại mỗi khi deps thay đổi 
      }
    }
  ## }

  ## useRef {
    - Nó sẽ trả về obj
    - Lưu được giá trị bất kì tham chiếu bên ngoài function component
  ## }

  ## React.memo HOC {
    - Ghi nhớ
    - Xử lý component trách những tình huống không cần thiết
    - Nhận vào component và check các props của compennt sau khi bị re-render có thay đổi hay không , nếu có thì thay đôi, không thì không re-render
  ## }

  ## useCallback {
    - Tránh tạo ra hàm mới 1 cách không cần thiết trong function component của mình
  ## }

  ## useMemo {
    - Tránh thực hiện lại 1 logic nào đó không cần thiết
    - Nhận 2 tham số callback, deps
    - deps là rỗng thì nó sẽ thực hiện 1 lần duy nhất
  ## }

  ## useReducer {
    - Các bước thực hiện {
      - 1. Init state : 0
      - 2. Acitons: Up (count + 1 ) / Down (count - 1)
      - 3. Reducer
      - 4. Dispatch
    }
    - tương tự như useState Hook, Nó cho phép logic trạng thái tùy chỉnh,Nếu bạn thấy mình đang theo dõi nhiều phần trạng thái dựa trên logic phức tạp, thì useReducer có thể hữu ích
    - const [state, dispatch] = useReducer(reducer, initinalState)
    - const action = {type: 'Click', payload: {}}
    - initialState : giá trị khởi tạo 
    - dispatch : là func, nhận được cái action tương ứng, nếu có data thì để obj là payload or sẽ để 1 giá trị 
  ## }

  ## useContext {
    - Đơn giản hóa truyền dữ liệu component cha xuống các component con không cần sử dụng props
    - Các bước thực hiện {
      - Create context
      - Provider
      - Consumer
    }
  ## }

  ## useImperativeHandle {
    - Tùy chỉnh ref của một function component
    - 
  ## }

### }