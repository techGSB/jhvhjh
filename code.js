var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ba8e15bf-078a-4be2-9825-34a9fe16a135","44054728-5b16-4e46-8707-34e6dd63ef85","b971de63-9c68-4952-bd38-64fc9b42a844","80449270-e9bb-45a6-91d2-fbb9f2b79442","fe4ee7ca-6047-47eb-bef5-e6241829e0f4","ea705600-a51c-4a03-a11c-9b91f87f05e2","e0c979f5-a9e5-43bc-8d95-4b8747347c04","2d1e0c3d-8204-4b09-8786-80c3f4989635","7ae85934-b569-423e-8722-bc1a2990e6a5","b06c08f7-b00e-48a7-b36b-67377c2cb17c","911ef887-4c21-46cb-b13e-7bf1471b9929","cb0c6171-27e1-4476-a668-44bd8ab46831","9a06d989-119a-476b-8c91-58d1ae1d31b2","634290c5-c8e0-43b4-8407-e3d50d74d2b6","98a4aada-516d-42d3-acf8-787c60e7f3dc","095eb156-d809-4e3d-ad71-8e1daef71907","de076953-85a6-492b-95cc-f7c2d70a9dc5","6045e267-8bed-4d37-9ee8-b093bfe3faaf","ad24af1d-7e53-43b9-b0b4-65aac60f7a3d","17f300b6-0a5d-4b71-9775-2e5d8fb3eace","00ec50d3-2c09-40cf-ba5c-182b909f489d","c3d99e7f-8ccc-4d4c-a1ea-de14758db89d","288ba41e-601d-4c55-8e0d-f10f20df5b48","31a6a3eb-4328-4a44-905a-81406e619aac","e16b67c0-2973-48e8-94d0-52b2130f1fb0","ffbe8b38-d945-4566-bd0c-c5731f0bd889","a92b0cd7-2713-4f20-814a-bfc3d5c930d1","d5b9bc10-8633-48f3-a4f3-9e3c251a7f25","fe4315fc-2238-41d9-aec9-e5c681d41a83","5bd08cbd-200b-4246-8700-3fe1aabaf35d","418d1dce-e3c1-4e59-9dfe-84c9a44d5053","f3227c5c-f917-4420-a27a-0b1faf353789","1019309a-311b-418b-bce6-04d36b9285b0","cedfeb4c-21f5-4a41-a66a-a76a70882f6a","192690e4-5e6c-4551-ac97-4da53d375cad","df2cb580-963b-4615-ba51-fb4f7e1a1c03","45597fd2-0a0d-470a-8d41-6b7e27ff689f","7866f51b-0580-41ab-92ff-e0514cc4e8f1","8c4f0a2b-7161-4f5a-a51f-4ff82a90e4ff","3099f50c-9674-432e-b3ef-1feb1a7e1352"],"propsByKey":{"ba8e15bf-078a-4be2-9825-34a9fe16a135":{"name":"P1","sourceUrl":null,"frameSize":{"x":99,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"YIPgUpWa29Ftu0.Xe4hjL9oLf8Kle3jw","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":75},"rootRelativePath":"assets/ba8e15bf-078a-4be2-9825-34a9fe16a135.png"},"44054728-5b16-4e46-8707-34e6dd63ef85":{"name":"E1","sourceUrl":"assets/api/v1/animation-library/gamelab/0U_SgMD3AShyz1QWKxeGi1T4z3qdtXv6/category_vehicles/enemyBlack1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":10,"version":"0U_SgMD3AShyz1QWKxeGi1T4z3qdtXv6","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0U_SgMD3AShyz1QWKxeGi1T4z3qdtXv6/category_vehicles/enemyBlack1.png"},"b971de63-9c68-4952-bd38-64fc9b42a844":{"name":"E2","sourceUrl":"assets/api/v1/animation-library/gamelab/lBr.mt9e96Os_XGWVhYSMYjqQTDPuJXk/category_vehicles/enemyBlue2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"lBr.mt9e96Os_XGWVhYSMYjqQTDPuJXk","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lBr.mt9e96Os_XGWVhYSMYjqQTDPuJXk/category_vehicles/enemyBlue2.png"},"80449270-e9bb-45a6-91d2-fbb9f2b79442":{"name":"E3","sourceUrl":"assets/api/v1/animation-library/gamelab/lBr.mt9e96Os_XGWVhYSMYjqQTDPuJXk/category_vehicles/enemyBlue2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"lBr.mt9e96Os_XGWVhYSMYjqQTDPuJXk","categories":["vehicles"],"loadedFromSource":true,"saved":false,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lBr.mt9e96Os_XGWVhYSMYjqQTDPuJXk/category_vehicles/enemyBlue2.png"},"fe4ee7ca-6047-47eb-bef5-e6241829e0f4":{"name":"E4","sourceUrl":"assets/api/v1/animation-library/gamelab/.rrECMS6iQuke9S8OuIz37iCas_tJN0j/category_vehicles/enemyGreen3.png","frameSize":{"x":103,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":".rrECMS6iQuke9S8OuIz37iCas_tJN0j","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.rrECMS6iQuke9S8OuIz37iCas_tJN0j/category_vehicles/enemyGreen3.png"},"ea705600-a51c-4a03-a11c-9b91f87f05e2":{"name":"E5","sourceUrl":"assets/api/v1/animation-library/gamelab/e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz/category_vehicles/enemyRed4.png","frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz/category_vehicles/enemyRed4.png"},"e0c979f5-a9e5-43bc-8d95-4b8747347c04":{"name":"J1","sourceUrl":"assets/api/v1/animation-library/gamelab/IPyMXxdAQ46saDyH3usL.5ayzTeA7cJV/category_vehicles/jetpack.png","frameSize":{"x":133,"y":160},"frameCount":1,"looping":true,"frameDelay":2,"version":"IPyMXxdAQ46saDyH3usL.5ayzTeA7cJV","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":133,"y":160},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IPyMXxdAQ46saDyH3usL.5ayzTeA7cJV/category_vehicles/jetpack.png"},"2d1e0c3d-8204-4b09-8786-80c3f4989635":{"name":"hotairballoon_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dIw3_Bk4CAFZrQ.XSDy1kKPkritM4F2c/category_vehicles/hotairballoon_01.png","frameSize":{"x":272,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"dIw3_Bk4CAFZrQ.XSDy1kKPkritM4F2c","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dIw3_Bk4CAFZrQ.XSDy1kKPkritM4F2c/category_vehicles/hotairballoon_01.png"},"7ae85934-b569-423e-8722-bc1a2990e6a5":{"name":"playerShip2_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW/category_vehicles/playerShip2_blue.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW/category_vehicles/playerShip2_blue.png"},"b06c08f7-b00e-48a7-b36b-67377c2cb17c":{"name":"playerShip3_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/REocRDL0flVPaD_F1.YiisqhjAxIxLR7/category_vehicles/playerShip3_blue.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"REocRDL0flVPaD_F1.YiisqhjAxIxLR7","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/REocRDL0flVPaD_F1.YiisqhjAxIxLR7/category_vehicles/playerShip3_blue.png"},"911ef887-4c21-46cb-b13e-7bf1471b9929":{"name":"s1","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/911ef887-4c21-46cb-b13e-7bf1471b9929.png","frameSize":{"x":1600,"y":1200},"frameCount":1,"looping":true,"frameDelay":4,"version":"8.lc2l4V8jtDvWbEZb_pSgDV5kB7BJ3z","loadedFromSource":true,"saved":true,"sourceSize":{"x":1600,"y":1200},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/911ef887-4c21-46cb-b13e-7bf1471b9929.png"},"cb0c6171-27e1-4476-a668-44bd8ab46831":{"name":"s2","sourceUrl":null,"frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":12,"version":"QyRIfm5Oc6szJk2Dm4TpIB5UDOyUh0CP","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/cb0c6171-27e1-4476-a668-44bd8ab46831.png"},"9a06d989-119a-476b-8c91-58d1ae1d31b2":{"name":"s3","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/9a06d989-119a-476b-8c91-58d1ae1d31b2.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"JbylL4_eaEB8ynHtObns37j6ursCQoDr","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/9a06d989-119a-476b-8c91-58d1ae1d31b2.png"},"634290c5-c8e0-43b4-8407-e3d50d74d2b6":{"name":"s4","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/634290c5-c8e0-43b4-8407-e3d50d74d2b6.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"xaNZBAFeDjzYNlHrHk78czFhPZlfwcJZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/634290c5-c8e0-43b4-8407-e3d50d74d2b6.png"},"98a4aada-516d-42d3-acf8-787c60e7f3dc":{"name":"s5","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/98a4aada-516d-42d3-acf8-787c60e7f3dc.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"3e1Il4cQ37H.U0iTVGXq_sxGh1dLLO_F","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/98a4aada-516d-42d3-acf8-787c60e7f3dc.png"},"095eb156-d809-4e3d-ad71-8e1daef71907":{"name":"s6","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/095eb156-d809-4e3d-ad71-8e1daef71907.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"QNXZPuXrFA8sWBgDlp3pGEhMtV1bNHIa","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/095eb156-d809-4e3d-ad71-8e1daef71907.png"},"de076953-85a6-492b-95cc-f7c2d70a9dc5":{"name":"s7","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/de076953-85a6-492b-95cc-f7c2d70a9dc5.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"_T2Ot0Dl4Ka79GsjjW8dYQ5EDedZXuOQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/de076953-85a6-492b-95cc-f7c2d70a9dc5.png"},"6045e267-8bed-4d37-9ee8-b093bfe3faaf":{"name":"s8","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/6045e267-8bed-4d37-9ee8-b093bfe3faaf.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"ebGudSaqIJoOwRminyKM0p9Vh78Rvh_2","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/6045e267-8bed-4d37-9ee8-b093bfe3faaf.png"},"ad24af1d-7e53-43b9-b0b4-65aac60f7a3d":{"name":"s9","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/ad24af1d-7e53-43b9-b0b4-65aac60f7a3d.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"NxmpwQlYcwjCULQAc7ZhazLDSmbT0oUS","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/ad24af1d-7e53-43b9-b0b4-65aac60f7a3d.png"},"17f300b6-0a5d-4b71-9775-2e5d8fb3eace":{"name":"s10","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/17f300b6-0a5d-4b71-9775-2e5d8fb3eace.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"GWWKAI02IUCgtoH43_jMaZSB5lCfbWUp","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/17f300b6-0a5d-4b71-9775-2e5d8fb3eace.png"},"00ec50d3-2c09-40cf-ba5c-182b909f489d":{"name":"s11","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/00ec50d3-2c09-40cf-ba5c-182b909f489d.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"u3YCelPr5LKMG8wpk4JetelFYACajSdo","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/00ec50d3-2c09-40cf-ba5c-182b909f489d.png"},"c3d99e7f-8ccc-4d4c-a1ea-de14758db89d":{"name":"s12","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/c3d99e7f-8ccc-4d4c-a1ea-de14758db89d.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"4sSCTL0qdpwHZT3ujtYYtsMEQeIMTiSf","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/c3d99e7f-8ccc-4d4c-a1ea-de14758db89d.png"},"288ba41e-601d-4c55-8e0d-f10f20df5b48":{"name":"s13","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/288ba41e-601d-4c55-8e0d-f10f20df5b48.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"MltwttfmoWejNkPuyHb9SEeL5Mh7n7D6","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/288ba41e-601d-4c55-8e0d-f10f20df5b48.png"},"31a6a3eb-4328-4a44-905a-81406e619aac":{"name":"s14","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/31a6a3eb-4328-4a44-905a-81406e619aac.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"SFwGD82hIF25IBET2ovVIIpbe_56eZvN","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/31a6a3eb-4328-4a44-905a-81406e619aac.png"},"e16b67c0-2973-48e8-94d0-52b2130f1fb0":{"name":"theme1","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/e16b67c0-2973-48e8-94d0-52b2130f1fb0.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"JV5HWUoiozLHX4Qdbes0hZBluWKYuKQF","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/e16b67c0-2973-48e8-94d0-52b2130f1fb0.png"},"ffbe8b38-d945-4566-bd0c-c5731f0bd889":{"name":"theme2","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/ffbe8b38-d945-4566-bd0c-c5731f0bd889.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"mSaz9seZ9cMuijZ5qv3pghruXTCxkpP7","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/ffbe8b38-d945-4566-bd0c-c5731f0bd889.png"},"a92b0cd7-2713-4f20-814a-bfc3d5c930d1":{"name":"s15","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/a92b0cd7-2713-4f20-814a-bfc3d5c930d1.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"GZT9jwSls8x6gp4VQGmqqowzqvxxuHul","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/a92b0cd7-2713-4f20-814a-bfc3d5c930d1.png"},"d5b9bc10-8633-48f3-a4f3-9e3c251a7f25":{"name":"s16","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/d5b9bc10-8633-48f3-a4f3-9e3c251a7f25.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"F_r5ThHM4evGbuYli0oprYH9hL51Gzz5","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/d5b9bc10-8633-48f3-a4f3-9e3c251a7f25.png"},"fe4315fc-2238-41d9-aec9-e5c681d41a83":{"name":"s17","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/fe4315fc-2238-41d9-aec9-e5c681d41a83.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"rdVUQ5wyYZPpXppLrDVfmzV1dKKycCWy","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/fe4315fc-2238-41d9-aec9-e5c681d41a83.png"},"5bd08cbd-200b-4246-8700-3fe1aabaf35d":{"name":"s18","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/5bd08cbd-200b-4246-8700-3fe1aabaf35d.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"WbRpalNqn8OCwtqUD74M1T8bELuQFUSU","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/5bd08cbd-200b-4246-8700-3fe1aabaf35d.png"},"418d1dce-e3c1-4e59-9dfe-84c9a44d5053":{"name":"s19","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/418d1dce-e3c1-4e59-9dfe-84c9a44d5053.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"Sd75AH_fnvVCoinpN6qhWfXWS8AwiDnV","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/418d1dce-e3c1-4e59-9dfe-84c9a44d5053.png"},"f3227c5c-f917-4420-a27a-0b1faf353789":{"name":"s20","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/f3227c5c-f917-4420-a27a-0b1faf353789.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"KP4cmEOqTn4YO8xc_JyzEgGy6B2Xd3jT","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/f3227c5c-f917-4420-a27a-0b1faf353789.png"},"1019309a-311b-418b-bce6-04d36b9285b0":{"name":"s21","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/1019309a-311b-418b-bce6-04d36b9285b0.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"befWXzwXIJcYKfuc9uzmIW0Z.rlB7yQY","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/1019309a-311b-418b-bce6-04d36b9285b0.png"},"cedfeb4c-21f5-4a41-a66a-a76a70882f6a":{"name":"s22","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/cedfeb4c-21f5-4a41-a66a-a76a70882f6a.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"dnXmTjWjzqUeLwz.keSZRervI3npohnT","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/cedfeb4c-21f5-4a41-a66a-a76a70882f6a.png"},"192690e4-5e6c-4551-ac97-4da53d375cad":{"name":"s23","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/192690e4-5e6c-4551-ac97-4da53d375cad.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"EIRDCB2_fFt0qTl10DF42bYSvcNcl_e1","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/192690e4-5e6c-4551-ac97-4da53d375cad.png"},"df2cb580-963b-4615-ba51-fb4f7e1a1c03":{"name":"s24","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/df2cb580-963b-4615-ba51-fb4f7e1a1c03.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"leiCGw6_Cxo8CCHkyVhUD4_o3bGABD3x","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/df2cb580-963b-4615-ba51-fb4f7e1a1c03.png"},"45597fd2-0a0d-470a-8d41-6b7e27ff689f":{"name":"s25","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/45597fd2-0a0d-470a-8d41-6b7e27ff689f.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"ty3B17wXgZC4QKf.Cfpionuare3baUZT","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/45597fd2-0a0d-470a-8d41-6b7e27ff689f.png"},"7866f51b-0580-41ab-92ff-e0514cc4e8f1":{"name":"s26","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/7866f51b-0580-41ab-92ff-e0514cc4e8f1.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"kPuC_NJwyBpPjZwerlln.dFfD1.RcIoB","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/7866f51b-0580-41ab-92ff-e0514cc4e8f1.png"},"8c4f0a2b-7161-4f5a-a51f-4ff82a90e4ff":{"name":"bullet","sourceUrl":null,"frameSize":{"x":8,"y":14},"frameCount":1,"looping":true,"frameDelay":12,"version":"gF1oZ83PTqlTKf1iLQldU0KWOFgaYhvg","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":14},"rootRelativePath":"assets/8c4f0a2b-7161-4f5a-a51f-4ff82a90e4ff.png"},"3099f50c-9674-432e-b3ef-1feb1a7e1352":{"name":"main","sourceUrl":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/3099f50c-9674-432e-b3ef-1feb1a7e1352.png","frameSize":{"x":1280,"y":960},"frameCount":1,"looping":true,"frameDelay":4,"version":"VHCU25aMEBijQtk_hcxDv0L7JMDiwT20","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":960},"rootRelativePath":"assets/v3/animations/JnWi3bzSp0ZeRXAYFq3K2DGD4INwwqq8H62p-UnnTfA/3099f50c-9674-432e-b3ef-1feb1a7e1352.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//DECLAIRING VARIABLES

var gameState = 'initial';




var bg1 = createSprite(200,200,0,100);
bg1.setAnimation("s1");
bg1.scale = 0.34;
bg1.velocityY = 30;

var bg2 = createSprite(200,-200,0,100);
bg2.setAnimation("s2");
bg2.scale = 0.58;
bg2.velocityY = 30;

var bg3 = createSprite(200,-600,50,50);
bg3.setAnimation("s3");
bg3.scale = 0.58;
bg3.velocityY = 30;

var bg4 = createSprite(200,-1000,50,50);
bg4.setAnimation("s4");
bg4.scale = 0.58;
bg4.velocityY = 30;


var bg5 = createSprite(200,-1400,50,50);
bg5.setAnimation("s5");
bg5.scale = 0.58;
bg5.velocityY = 30;

var bg6 = createSprite(200,-1800,50,50);
bg6.setAnimation("s6");
bg6.scale = 0.58;
bg6.velocityY = 30;

var bg7 = createSprite(200,-2200,50,50);
bg7.setAnimation("s7");
bg7.scale = 0.58;
bg7.velocityY = 30;

var bg8 = createSprite(200,-2600,50,50);
bg8.setAnimation("s8");
bg8.scale = 0.58;
bg8.velocityY = 30;

var bg9 = createSprite(200,-3000,50,50);
bg9.setAnimation("s9");
bg9.scale = 0.58;
bg9.velocityY = 30;

var bg10 = createSprite(200,-3400,50,50);
bg10.setAnimation("s10");
bg10.scale = 0.58;
bg10.velocityY = 30;

var bg11 = createSprite(200,-3800,50,50);
bg11.setAnimation("s11");
bg11.scale = 0.58;
bg11.velocityY = 30;

var bg12 = createSprite(200,-4200,50,50);
bg12.setAnimation("s12");
bg12.scale = 0.58;
bg12.velocityY = 30;

var bg13 = createSprite(200,-4600,50,50);
bg13.setAnimation("s13");
bg13.scale = 0.58;
bg13.velocityY = 30;

var bg14 = createSprite(200,-5000,50,50);
bg14.setAnimation("s14");
bg14.scale = 0.58;
bg14.velocityY = 30;

var bg15 = createSprite(200,-5400,50,50);
bg15.setAnimation("s15");
bg15.scale = 0.58;
bg15.velocityY = 30;

var bg16 = createSprite(200,-5800,50,50);
bg16.setAnimation("s16");
bg16.scale = 0.58;
bg16.velocityY = 30;

var bg17 = createSprite(200,-6200,50,50);
bg17.setAnimation("s17");
bg17.scale = 0.58;
bg17.velocityY = 30;

var bg18 = createSprite(200,-6600,50,50);
bg18.setAnimation("s18");
bg18.scale = 0.58;
bg18.velocityY = 30;

var bg19 = createSprite(200,-7000,50,50);
bg19.setAnimation("s19");
bg19.scale = 0.58;
bg19.velocityY = 30;

var bg20 = createSprite(200,-7400,50,50);
bg20.setAnimation("s20");
bg20.scale = 0.58;
bg20.velocityY = 30;

var bg21 = createSprite(200,-7800,50,50);
bg21.setAnimation("s21");
bg21.scale = 0.58;
bg21.velocityY = 30;

var bg22 = createSprite(200,-8200,50,50);
bg22.setAnimation("s22");
bg22.scale = 0.58;
bg22.velocityY = 30;

var bg23 = createSprite(200,-8600,50,50);
bg23.setAnimation("s23");
bg23.scale = 0.58;
bg23.velocityY = 30;

var bg24 = createSprite(200,-9000,50,50);
bg24.setAnimation("s24");
bg24.scale = 0.58;
bg24.velocityY = 30;

var bg25 = createSprite(200,-9400,50,50);
bg25.setAnimation("s25");
bg25.scale = 0.58;
bg25.velocityY = 30;

var bg26 = createSprite(200,-9800,50,50);
bg26.setAnimation("s26");
bg26.scale = 0.58;
bg26.velocityY = 30;




var j =0;
//b.scale = 1;

var p = createSprite(200,350,50,50);
p.setAnimation("P1");
p.scale = 1;

var e1 = createSprite(50,0,50,50);
e1.setAnimation("E1");
e1.scale  = 1;
e1.velocityY = 5;

var e2 = createSprite(150,0,50,50);
e2.setAnimation("E2");
e2.scale  = 1;
e2.velocityY = 5;

var e3 = createSprite(250,0,50,50);
e3.setAnimation("E3");
e3.scale  = 1;
e3.velocityY = 5;

var e4 = createSprite(350,0,50,50);
e4.setAnimation("E4");
e4.scale  = 1;
e4.velocityY = 5;







var score = 0;
var b = [];
  
  for(var  i = 0; i<19 ; i++)
  {
    b[i] = createSprite(500,200,0,0);
    b[i].setAnimation("bullet");
    
  }

function draw()
{
  if(e1.isTouching(p))
  gameState = 'over';
  
  
  
  
  if(gameState == 'initial')
    {
      b[j].x = p.x;
      b[j].y = p.y-15;
      b[j].velocityY = -20;
      j = j+1;
      
      if(j>18)
      j = 0;
    }
    
    for(var  i = 0; i<19 ; i++)
  {
    if(e1.isTouching(b[i])  )
    
   e1.destroy();
   else if(e2.isTouching(b[i]))
    e2.destroy();
    else if(e3.isTouching(b[i]))
    e3.destroy();
     else if(e4.isTouching(b[i]))
    e4.destroy();
    
   
    
    
    
    
  }
    
   
 

  
 
  
  background("black");
  
   if(bg1.y > 600)
   bg1.y = -9800;
   
   if(bg2.y>600)
   bg2.y = -9800;
   
   if(bg3.y>600)
   bg3.y = -9800;
   
   if(bg4.y>600)
   bg4.y = -9800;
   
   if(bg5.y>600)
   bg5.y = -9800;
   
   if(bg6.y>600)
   bg6.y = -9800;
   
   if(bg7.y>600)
   bg7.y = -9800;
   
   if(bg8.y>600)
   bg8.y = -9800;
   
   if(bg9.y>600)
   bg9.y = -9800;
   
   if(bg10.y>600)
   bg10.y = 9800;
   
   
   if(bg11.y > 600)
   bg11.y = -9800;
   
   if(bg12.y>600)
   bg12.y = -9800;
   
   if(bg13.y>600)
   bg13.y = -9800;
   
   if(bg14.y>600)
   bg14.y = -9800;
   
   if(bg15.y>600)
   bg15.y = -9800;
   
   if(bg16.y>600)
   bg16.y = -9800;
   
   if(bg17.y>600)
   bg17.y = -9800;
   
   if(bg18.y>600)
   bg18.y = -9800;
   
   
   if(bg19.y > 600)
   bg19.y = -9800;
   
   if(bg20.y>600)
   bg20.y = -9800;
   
   if(bg21.y>600)
   bg21.y = -9800;
   
   if(bg22.y>600)
   bg22.y = -9800;
   
   if(bg23.y>600)
   bg23.y = -9800;
   
   if(bg24.y>600)
   bg24.y = -9800;
   
   if(bg25.y>600)
   bg25.y = -9800;
   
   if(bg26.y>600)
   bg26.y = -9800;
   
   
   
   
  
  
 
 //related to player 
 if(gameState == 'initial' ) 
 {

   playSound("",true);
  if(keyDown("LEFT_ARROW"))
  p.velocityX = -10;
  if(keyWentUp("LEFT_ARROW"))
  p.velocityX = 0;
  if(keyDown("RIGHT_ARROW"))
  p.velocityX = 10;
  if(keyWentUp("RIGHT_ARROW"))
  p.velocityX = 0;
  
  if(p.x<-50|| p.x>450)
  {
    p.x = 200;
    
  }
  }//initial
  drawSprites();
  
  fill("white");
   stroke('black');
   strokeWeight(5);
  textSize(25);
  text("SCORE = "+score,250,20);
  
  if(gameState === 'over')
  {
    fill("white");
   stroke('black');
   strokeWeight(5);
  textSize(25);
  text("GAME OVER",200,200);
  
  
  //console.log("HELLO");
    
  }
  

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
