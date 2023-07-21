const mongoose = require('mongoose')

const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Schema = mongoose.Schema


const Product = new Schema({
    name: { type: String, require: true},
    description: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    quantity: { type: Number, require: true },
    slug: { type: String, slug: 'name', unique: true }
},{
    timestamps: true //lưu thời gian bảng ghi được tạo và bảng ghi được cập nhật
});

module.exports = mongoose.model('Product', Product)