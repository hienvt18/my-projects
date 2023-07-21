### Tạo Packege
npm init

### Cài Express
npm i express

### Nodemon 
https://www.npmjs.com/package/nodemon
npm i nodemon --save-dev
- Lắng nghe sự thay đổi của những file trong source code để reload không cần nhân ctrl + c để chạy lại chương trình


### Morgan
https://www.npmjs.com/package/morgan
npm i morgan --save-dev
- Quan sát được những cái log req từ client lên node server

### Mongoose
npm i mongoose
- Là trung gian của nodejs và mongoDB dễ dàng 

### Template engine
npm i express-handlebars


### Routing 
- Định tuyến đề cập đến việc xác định cách ứng dụng phản hồi yêu cầu của máy khách tới một điểm cuối cụ thể, đó là một URI (hoặc đường dẫn) và một phương thức yêu cầu HTTP cụ thể (GET, POST, v.v.).

- Mỗi tuyến đường có thể có một hoặc nhiều chức năng xử lý, được thực thi khi tuyến đường được khớp.

app.METHOD(PATH, HANDLER) => {
    - app là một thể hiện của express
    - METHOD là một phương thức yêu cầu HTTP (GET, POST, PUT, DELETE), viết thường.
    - PATH là một đường dẫn trên máy chủ.
    - HANDLER là chức năng được thực hiện khi tuyến đường được khớp.
}

 - req => chứa thông tin yêu cầu gửi lên server 
 - res => tủy chỉnh kết quả trả về 

### GET Method
- Nhận dữ liêu từ phía server về client 

### POST Method
- Khi gửi dữ liệu từ phía client lên server và yêu cầu server tạo mới dữ liệu

### PUT / PATCH Method
- Để chỉnh sửa dữ liệu toàn bộ còn PATCH sửa từng field trong obj đó

### Mô hình MVC (Model View Controller)
- Model {
    + Tương tác với resource lấy ra dữ liệu (img, title, price ....)
}
- View {
    + Chỉ chưa phần HTML CSS hiện lên màn hình
}
- Controller {
    + Dùng data lấy được từ model xử lý hiển thị ra view 
}


### Code Formatter
- prettier
- lint-staged
- husky

### Mongoose slug generator
-npm i mongoose-slug-generator