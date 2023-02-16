// Về git làm gì

// 1. Tìm hiểu qua về Version Control, Git & Github
// Install Git

// 2. Basic: Tạo Github Repository & Clone
// Pull & Push

// 3. Advance: Branch, Merge
// Conflict Resolving, Pull Request

// 1.1. Source Control/ Version Control
// - Source Control
// Là một chương trình để quản lý source code
// Hỗ trợ nhiều người làm việc cùng lúc
// Xem ai thay đổi code (tiện tìm nguyên nhân)
// Revert changes, đưa code về version cũ hơn, không lo mất code

// 1.2. Git là gì?
// - Là một Source Control tương tự SQL
// Ra đời năm 2005
// Tác giả Linus Torvald, hỗ trợ viết Linux kernel
// Toàn bộ code và history được lưu trữ trên máy người dùng
// 3 khái niệm quan trọng: repo, commit, branch

// Repo: có thể coi là 1 dự án gồm nhiều -> toàn bộ source code

// Repo có 2 loại
// Repo 1: local -> repo trên máy mình
// Repo 2: remote -> Repo nằm trên máy server và các máy khác -> có thể git pull & git push để đổng bộ source code

// Commit: mỗi lần sửa, thêm, xoá file -> thay đổi code -> lưu và Repo

// Branch: khi làm source code chỉ có 1 nhánh -> master
// Muốn tách nhiều nhánh khác để code không lẫn lộn -> tạo 1 nhánh mới -> branch (mỗi lần thay đổi file có thể -> branch mới (tuỳ set-up))

// 1.3. Github là gì?
// - Github là 1 trang phổ biến mà hầu như các dự án từ lớn -> nhỏ đều lưu trữ source code
// - Chứa rất nhiều source code
// - Eg: Framework Angular, React -> cũng chứa trên git

// ** Git chỉ quản lý source code thôi```
// ** Github gắn thêm 1 số tính năng: xem source code, tạo request, quản lý, phân quyền
// --> Github là trình mở rộng của git

// Basic Command
// git init: tạo 1 repo trên local
// git clone: lấy repo từ trên remote
// git pull: đồng bộ từ remote về local

// git add & git commit -> thêm repo trong local
// git push: đồng bộ repo từ local lên remote

``