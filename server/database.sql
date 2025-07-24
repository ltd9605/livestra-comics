CREATE DATABASE  Livestracomics;
USE Livestracomics;
CREATE TABLE role (
    role_id INT PRIMARY KEY IDENTITY(1,1),
    role_name NVARCHAR(100) NOT NULL
);
CREATE TABLE [user](
    id INT PRIMARY KEY IDENTITY(1,1),
    role_id INT FOREIGN KEY REFERENCES role(role_id),
    userName NVARCHAR(100) NOT NULL UNIQUE,
    [password] NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL UNIQUE,
    avatar NVARCHAR(MAX),
    status_user BIT DEFAULT 1,
    fullName NVARCHAR(100),
    phoneNumber NVARCHAR(20),
    created_at DATETIME DEFAULT GETDATE()
);
CREATE TABLE [type] (
    type_id INT PRIMARY KEY IDENTITY(1,1),
    type_name NVARCHAR(100) NOT NULL
);
CREATE TABLE truyen (
    id INT PRIMARY KEY IDENTITY(1,1),
    ten NVARCHAR(255) NOT NULL,
    author NVARCHAR(100),
    so_chuong INT,
    imageURL NVARCHAR(MAX),
    [status] BIT DEFAULT 1,
    [description] NVARCHAR(MAX),
    type_id INT FOREIGN KEY REFERENCES [type](type_id)
);
INSERT INTO [user] (role_id, userName, [password], email, fullName, phoneNumber)
VALUES
(2, 'user1', 'pass123', 'user1@mail.com', N'Nguyễn Văn A', '0900000001'),
(2, 'user2', 'pass123', 'user2@mail.com', N'Trần Thị B', '0900000002'),
(2, 'user3', 'pass123', 'user3@mail.com', N'Lê Văn C', '0900000003'),
(2, 'user4', 'pass123', 'user4@mail.com', N'Phạm Thị D', '0900000004'),
(2, 'user5', 'pass123', 'user5@mail.com', N'Hoàng Văn E', '0900000005'),
(2, 'user6', 'pass123', 'user6@mail.com', N'Đỗ Thị F', '0900000006'),
(2, 'user7', 'pass123', 'user7@mail.com', N'Vũ Văn G', '0900000007'),
(2, 'user8', 'pass123', 'user8@mail.com', N'Bùi Thị H', '0900000008'),
(2, 'user9', 'pass123', 'user9@mail.com', N'Ngô Văn I', '0900000009'),
(2, 'user10', 'pass123', 'user10@mail.com', N'Đinh Thị J', '0900000010');

INSERT INTO truyen (ten, author, so_chuong, imageURL, [status], [description], type_id)
VALUES
(N'One Piece', N'Eiichiro Oda', 1100, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Truyện về hải tặc', 1),
(N'Dragon Ball', N'Akira Toriyama', 520, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Truyện phiêu lưu viễn tưởng', 1),
(N'Naruto', N'Kishimoto Masashi', 700, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Ninja và tình bạn', 1),
(N'Bleach', N'Tite Kubo', 686, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Truyện về tử thần', 1),
(N'Detective Conan', N'Gosho Aoyama', 1050, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Truyện trinh thám hấp dẫn', 2),
(N'Doraemon', N'Fujiko F. Fujio', 1345, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Truyện thiếu nhi, hài hước', 2),
(N'Crayon Shin-chan', N'Yoshito Usui', 850, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Hài hước xoay quanh cậu bé Shin', 2),
(N'Attack on Titan', N'Hajime Isayama', 139, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Truyện chiến đấu và sinh tồn', 1),
(N'Tokyo Ghoul', N'Ishida Sui', 180, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Kinh dị và hành động', 1),
(N'Your Lie in April', N'Naoshi Arakawa', 45, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Tình cảm và âm nhạc', 3),
(N'Toradora!', N'Yuyuko Takemiya', 60, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Truyện học đường lãng mạn', 3),
(N'Kimi no Na wa', N'Makoto Shinkai', 1, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Truyện chuyển thể từ phim nổi tiếng', 3),
(N'Clannad', N'Key', 70, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Tình cảm học đường', 3),
(N'Sword Art Online', N'Reki Kawahara', 250, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Game nhập vai thế giới ảo', 6),
(N'The Promised Neverland', N'Kaiu Shirai', 181, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Sinh tồn và bí ẩn', 1),
(N'One Punch Man', N'ONE', 180, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Hành động và hài hước', 2),
(N'Fairy Tail', N'Hiro Mashima', 545, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Phép thuật và hội pháp sư', 1),
(N'Kaguya-sama: Love is War', N'Aka Akasaka', 281, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Hài hước, tình cảm học đường', 2),
(N'My Hero Academia', N'Kohei Horikoshi', 400, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Siêu anh hùng và hành động', 1),
(N'Re:Zero', N'Tappei Nagatsuki', 100, 'https://valvrareteam.b-cdn.net/illustrations/1751016467425-clean.webp', 1, N'Isekai, tình cảm và hành động', 6);
INSERT INTO [type] (type_name)
VALUES 
(N'Hành động'),         -- id = 1
(N'Hài hước'),          -- id = 2
(N'Tình cảm'),          -- id = 3
(N'Trinh thám'),        -- id = 4
(N'Giả tưởng'),         -- id = 5
(N'Isekai'),            -- id = 6
(N'Học đường'),         -- id = 7
(N'Khoa học viễn tưởng'), -- id = 8
(N'Kinh dị'),           -- id = 9
(N'Âm nhạc');           -- id = 10

INSERT INTO role (role_name)
VALUES 
(N'Admin'),   -- role_id = 1
(N'User'),    -- role_id = 2
(N'Moderator'), -- role_id = 3
(N'Tác giả');  -- role_id = 4



