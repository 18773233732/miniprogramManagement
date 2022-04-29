DROP DATABASE IF EXISTS `ManagementMini`;

USE `ManagementMini`;

CREATE TABLE `user`(
   `id` INT PRIMARY KEY AUTO_INCREMENT COMMENT '用户ID',
   `nickName` VARCHAR(50) COMMENT '微信用户名',
   `passWord` VARCHAR(50) COMMENT '用户设置的密码',
   `type` INT DEFAULT 0 COMMENT '用户-0，管理员-1',
   `delete_status` INT DEFAULT 0 COMMENT '正常-0,删除-1'
);