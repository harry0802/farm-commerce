# farm-commerce (農場商業網站)

## 介紹 inturductions

用於販賣農產品相關的網站,消費者可以依照自己的喜好添加商品，或是訂閱商品。

我們擁有多樣化的農產品，並且提供詳細資訊 EX: 商品成分，生產商資訊，保存方法 etc。

顧客可以對商品進行 定期配送或是單筆購買的需求 。

我們還有專屬的食譜為我們的顧客提供美味的美食作法，我們將致力為消費者提供最好的服務

#### Announce:(僅限於學習研究用，無任何商業用途)

## 特點 feature

### - 商品資訊 Product info :

1. 商品頁面中我們提供了 供應商, 成分表 etc

2. 商品將會依照季節活動等進行優惠折扣 `furryfriends`

3. 商品可以進行客製化添加 (開發中)

### - 訂單系統 Order system ：

1. 訂單系統將會在選擇的配送週期(每週 , 隔週 , 每月) 去創建商品訂單

2. 網站將會紀錄消費者的訂閱商品 ,您也可以在專門的頁面中編輯他
   ex: 替換整筆配送日期 (week)， 取消訂閱( 完整移除訂閱的週期 )

3. 使用者也可以根據日期編輯訂單
   EX: 增 , 刪 , 改 該筆訂單 , tip: 暫停 or 跳過功能（開發中）

4. 可以使用商品折扣碼進行商品的折扣

### - 搜尋功能 search :

1.  依照關鍵字進行商品的搜索

### - 登錄與註冊 signin and signup

#### - signup：

1.  使用者要進行 signup 時都會先進行檢查是否有在配送範圍

2.  如果沒有完成地址注冊階段將無法訪問部分功能

#### - 聊天機器人 chat bot

1 使用 google 的 gemini 來當作聊天客服

## - 使用的技術 Technology

1. 使用 vee 驗證表單

2. 使用 zod 驗證輸入

3. 將 CLI 手動遷移至 vite

4. 使用 Supabase 替代 Firebase

5. 使用 tailwind CSS

6. 使用 shadcn UI 套件

7. 使用 day.js 控制日期

8. 串接 @google/generative-ai 替換 open ai (因費率問題)

9. Vuex 換成 Pina

10. 使用 VueUse

11. 使用 pnpm 作為套件管理工具

## 開發指令

### 安裝依賴
```bash
pnpm install
```

### 啟動開發伺服器
```bash
pnpm dev
```
開發伺服器會在 `http://localhost:5173` 啟動，並支援網路存取（`--host`）。

### 建置專案
```bash
# 正式環境建置（GitHub Pages）
pnpm run build:prod

# 測試環境建置
pnpm run build:stage
```

## 部署

此專案支援多平台部署：

### GitHub Pages 部署

專案使用 GitHub Actions 自動部署到 GitHub Pages：
- 推送到 `main` 分支會自動觸發部署
- 部署路徑：`/farm-commerce/`
- 環境變數在 GitHub Secrets 中設定

手動部署：
```bash
pnpm run deploy
```

### Cloudflare Pages 部署

Cloudflare Pages 從 GitHub 自動同步並部署：

**Build 設定：**
- Build command: `pnpm install && pnpm run build`
- Build output directory: `dist`
- Node version: 20 或以上

**環境變數：**
```
VITE_BASE_PATH=/
VITE_APP_FARM_PRODUCTS_URL=<Supabase URL>
VITE_APP_FARM_PRODUCTS_KEY=<Supabase Anon Key>
VITE_APP_GOOGLEAI_KEY=<Google AI Key>
```

**注意：** 由於 Cloudflare Pages 限制單檔最大 25 MB，超大資源檔（影片 53MB、字體 30-40MB）已改用 Supabase Storage CDN 託管，確保兩個平台都能正常運作。

## 環境變數

建立 `.env` 檔案並設定以下變數：

```env
VITE_APP_FARM_PRODUCTS_URL=<Supabase URL>
VITE_APP_FARM_PRODUCTS_KEY=<Supabase Anon Key>
VITE_APP_GOOGLEAI_KEY=<Google Generative AI Key>
VITE_BASE_PATH=/farm-commerce/  # GitHub Pages 用，Cloudflare 用 /
```

正式環境的環境變數已在 `.env.production` 設定。
