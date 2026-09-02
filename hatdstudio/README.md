# HATd Studio Website

Static site (HTML/CSS/JS thuần) — sẵn sàng deploy lên Vercel.

## Cấu trúc
```
.
├── index.html
├── gallery.html
├── services.html
├── blog.html
├── contact.html
├── services/
│   ├── residential.html
│   ├── commercial.html
│   └── extensions.html
├── assets/
│   ├── css/
│   ├── js/
│   └── image/
└── vercel.json
```

## Deploy lên Vercel

### Cách 1: Vercel CLI
```bash
npm i -g vercel
vercel        # deploy preview
vercel --prod # deploy production
```
Khi được hỏi cấu hình, chọn **Other** (không phải framework nào), vì đây là static site thuần — không cần build command, không cần output directory (mặc định root là đủ).

### Cách 2: Vercel Dashboard
1. Push thư mục này lên một GitHub repo.
2. Vào vercel.com → **Add New Project** → import repo đó.
3. Framework Preset: chọn **Other**.
4. Build Command: để trống.
5. Output Directory: để trống (mặc định `.`).
6. Deploy.

## Lưu ý
- Đã bật `cleanUrls` trong `vercel.json` nên toàn bộ link nội bộ dùng dạng `/gallery`, `/services/residential`... thay vì `.html`.
- Cache của assets được chia làm 2 nhóm trong `vercel.json`:
  - `assets/image/**`: cache dài hạn 1 năm (`immutable`) vì ảnh ít khi đổi nội dung khi đã đặt tên.
  - `assets/css/**` và `assets/js/**`: `max-age=0, must-revalidate` — trình duyệt sẽ luôn hỏi lại server xem file có mới hơn không trước khi dùng bản cache (server trả về rất nhanh, gần như không tốn thêm thời gian tải nếu file chưa đổi). Nhờ vậy, **sau khi deploy bản mới, người dùng sẽ tự động thấy CSS/JS mới nhất mà không cần xoá cache trình duyệt thủ công**.
  - Nếu sau này đổi ảnh trong `assets/image/`, nên đổi tên file để tránh cache cũ (vì ảnh vẫn cache dài hạn).
