【成果】

https://yuchi0307.github.io/weather-app/

【紀錄】

1. onMouseOver 會選到除了縣市之外、有data-name屬性的圖層 
-> 加入判斷式 if (filteredCity === undefined) 並給同JSON格式的資料值null

目前串 api 遇到困難：

2. (尚未解決)應該是 setState 還不夠熟悉，除了有 fetch 到 API 的初始值，取得到特定縣市資料後應該再有另個初始值 state ，再將特定縣市資料的內容 prop 呈現 ，目前 react 會再滑鼠「第二次」觸發事件時顯示 filter is not a function
3. (尚未解決)中央氣象局 api 資料埋很深，react 會顯示資料為物件非字串


【來源】

這是和「老闆,來點寇汀吧。Boss, CODING please」學習的專案，原框架為 Vue ，我是以 react 呈現。

直播筆記網址：
https://reurl.cc/pgN6ZQ
