# 記帳 App

個人記帳 PWA — 部署到 GitHub Pages，在 iOS Safari 加入主畫面即可像 App 使用。

## 功能
- ✅ 收支記錄（金額、類別、日期、備註）
- ✅ 月度統計圖表（近 6 個月收支、類別佔比）
- ✅ 月預算設定與進度條
- ✅ 資料全存本機（localStorage），不需後端
- ✅ PWA 離線可用
- ✅ 匯出 CSV

## 部署到 GitHub Pages

### 步驟一：建立 Repository

1. 前往 [github.com](https://github.com) 登入
2. 點右上角 **＋ → New repository**
3. Repository name 填 `budget-app`（或任意名稱）
4. 選 **Public**
5. 點 **Create repository**

### 步驟二：上傳檔案

在新建的 repo 頁面：

1. 點 **uploading an existing file**（或 **Add file → Upload files**）
2. 把這個資料夾裡的所有檔案拖進去：
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. 點 **Commit changes**

### 步驟三：開啟 GitHub Pages

1. 進入 repo → 點 **Settings**
2. 左側選 **Pages**
3. Source 選 **Deploy from a branch**
4. Branch 選 **main**，資料夾選 **/ (root)**
5. 點 **Save**

等 1–2 分鐘後，網址會出現：
```
https://你的帳號.github.io/budget-app/
```

### 步驟四：iOS 加入主畫面

1. 用 iPhone 的 **Safari** 打開上面那個網址
2. 點底部工具列的 **分享** 按鈕（方形加箭頭）
3. 選 **加入主畫面**
4. 點 **新增**

完成！主畫面會出現記帳 icon，點開就是全螢幕 App 體驗。

## 資料說明

所有資料儲存在手機 **localStorage**，不會上傳到任何伺服器。
清除瀏覽器資料或重裝 App 會遺失記錄，建議定期用「匯出 CSV」備份。
