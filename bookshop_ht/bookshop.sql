CREATE DATABASE bookshop;
USE bookshop;
create table books(
    id INT PRIMARY KEY NOT NULL auto_increment,
    bookCover varchar(256),
    bookName varchar(32),
    bookPrice float,
    bookDescript text
);

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO books(bookCover,bookName,bookPrice,bookDescript) VALUES ( 'https://img13.360buyimg.com/n1/s200x200_jfs/t5914/15/800105189/215959/973eea1f/592bf164N56d3e3db.jpg', 'javascript编程艺术',65.9, '零基础学JavaScript（全彩版 附光盘 小白实战手册）');
INSERT INTO `books` VALUES ('13', 'https://img14.360buyimg.com/n1/s200x200_jfs/t13153/40/786465092/120794/c683d4f2/5a13bcc0Nc678f934.jpg', '零基础学javascript', '55.8', '零基础学JavaScript（全彩版 附光盘 小白实战手册）');
INSERT INTO `books` VALUES ('16', 'https://img13.360buyimg.com/n1/s200x200_jfs/t9454/98/1964671490/333816/cc09331/59c22690N7d3f6ad3.jpg', 'javascript权威指南', '68.4', 'javascript权威指南');
INSERT INTO `books` VALUES ('17', 'http://127.0.0.1:3000/images/image.png', 'javascript学习指南', '58.88', 'javascript学习指南');
INSERT INTO `books` VALUES ('18', 'http://127.0.0.1:3000/images/image.png', 'javascript设计模式', '98.99', 'javascript设计模式');
INSERT INTO `books` VALUES ('19', 'http://127.0.0.1:3000/images/bookshop4165747913.png', 'javascript1', '11.11', 'javascript1');
INSERT INTO `books` VALUES ('20', 'http://127.0.0.1:3000/images/bookshop4165836919.png', '222', '25.22', '222');
INSERT INTO `books` VALUES ('21', 'http://127.0.0.1:3000/images/bookshop416591626.png', '2223333', '56.55', '2222333');
INSERT INTO `books` VALUES ('22', 'http://127.0.0.1:3000/images/bookshop4165935470.png', '444', '55', '444');
