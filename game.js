function log(n) {
  let r = 0n;
  while (n) {
    n /= 10n;
    r++;
  }
  return r;
}
function Log(n) {
  let r = 0;
  while (n) {
    n /= 10n;
    r++;
  }
  return r;
}
function ctoB(n) {
  let u = n.toFixed(0),
    p = 0n;
  for (let i = 0; i < u.length; i++) {
    switch (u[i]) {
      case "1":
        p = p * 10n + 1n;
        break;
      case "2":
        p = p * 10n + 2n;
        break;
      case "3":
        p = p * 10n + 3n;
        break;
      case "4":
        p = p * 10n + 4n;
        break;
      case "5":
        p = p * 10n + 5n;
        break;
      case "6":
        p = p * 10n + 6n;
        break;
      case "7":
        p = p * 10n + 7n;
        break;
      case "8":
        p = p * 10n + 7n;
        break;
      case "9":
        p = p * 10n + 9n;
        break;
    }
  }
  return p;
}
function ene_up() {
  if (egg_enene != 6 && egg_enene != 0)
    egg_enen[egg_enene - 1] += (egg_pmm * (egg_ene[2] + 1)) / 50;
  if (egg_enene == 6) {
    egg_enen[0] += (egg_pmm * (egg_ene[3] + 1)) / 50;
    egg_enen[2] += (egg_pmm * (egg_ene[3] + 1)) / 50;
    egg_enen[1] += (egg_pmm * (egg_ene[3] + 1)) / 50;
    egg_enen[3] += (egg_pmm * (egg_ene[3] + 1)) / 50;
    egg_enen[4] += (egg_pmm * (egg_ene[3] + 1)) / 50;
  }
  for (let i = 0; i < 5; i++) {
    document.getElementById("green" + (i + 1)).style.left =
      (500 * egg_enen[i]) / 10 ** egg_ene[i] - 500 + "px";
    if (10 ** egg_ene[i] < egg_enen[i]) egg_ene[i]++;
  }
}
function sshow(n) {
  if (n < 1e4) return n;
  let p = 0;
  while (n >= 1000) {
    p++;
    n /= 10n;
  }
  let u = n % 100n;
  if (u < 10) return n / 100n + ".0" + u + "e" + (p + 2);
  return n / 100n + "." + u + "e" + (p + 2);
}
let egg = 500n,
  ept = 0n,
  timee = 0n,
  eegg = 0n,
  up_legg = 2n,
  egg_maker = 0n,
  legg_maker = 0n,
  egg_boost = 0n,
  egg_size = 1n,
  size_up = 2000n,
  egg_up = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  egg_ene = [0, 0, 0, 0, 0],
  egg_enen = [0, 0, 0, 0, 0],
  egg_enene = 0,
  mm1 = 0,
  mm2 = 0,
  reduce_egg_maker = 10000n,
  egg_pmm = 0,
  egg_upfee = [
    0,
    10000n,
    2000000n,
    200000000n,
    10n ** 9n * 5n,
    10n ** 12n * 5n,
  ],
  rotate_egg = 0n,
  rotate_mile = [0, 0, 0, 0, 0];
function tt() {
  egg = read(localStorage.egg);
  ept = read(localStorage.ept);
  timee = read(localStorage.timee);
  eegg = read(localStorage.eegg);
  up_legg = read(localStorage.up_legg);
  egg_maker = read(localStorage.egg_maker);
  legg_maker = read(localStorage.legg_maker);
  egg_boost = read(localStorage.egg_boost);
  egg_size = read(localStorage.egg_size);
  size_up = read(localStorage.size_up);
  egg_up = JSON.parse(localStorage.egg_up);
  reduce_egg_maker = read(localStorage.reduce_egg_maker);
  egg_pmm = JSON.parse(localStorage.egg_pmm);
  egg_ene = JSON.parse(localStorage.egg_ene);
  egg_enen = JSON.parse(localStorage.egg_enen);
  rotate_egg = read(localStorage.rotate_egg);
  rotate_mile = JSON.parse(localStorage.rotate_mile);
  egg_enene = JSON.parse(localStorage.egg_enene);
}
if (localStorage.length > 0) tt();

function egg_upgrade() {
  let u = 1n;
  if (egg_up[1] == 1) {
    u *= log(egg / 50n) + 1n;
    document.getElementById("ep1").style.backgroundColor = "green";
  }

  if (egg_up[2] == 1 && mm1 == 0) {
    mm = 1;
    document.getElementById("rotate_egg").style.display = "block";
    document.getElementById("ep2").style.backgroundColor = "green";
  }
  if (egg_up[3] == 1) {
    u *= log(timee);
    document.getElementById("ep3").style.backgroundColor = "green";
  }

  if (egg_up[4] == 1) {
    up_legg = up_legg > 4n ? up_legg : 4n;
    document.getElementById("ep4").style.backgroundColor = "green";
  }
  if (egg_up[5] == 1 && mm2 == 0) {
    mm = 1;
    document.getElementById("ep5").style.backgroundColor = "green";
    document.getElementById("egg_pmm").style.display = "block";
  }
  return u;
}
function rotate_miles() {
  if (rotate_egg >= 1 && rotate_mile[0] == 0) {
    rotate_mile[0] = 1;
    document.getElementById("rotate_0").style.color = "green";
  }
  if (rotate_egg >= 1000 && rotate_mile[1] == 0) {
    rotate_mile[1] = 1;
    document.getElementById("rotate_1").style.color = "green";
    reduce_egg_maker /= 3n;
  }
  if (rotate_egg >= 10000 && rotate_mile[2] == 0) {
    rotate_mile[2] = 1;
    document.getElementById("rotate_2").style.color = "green";
    size_up = 500n;
  }
  if (rotate_egg >= 1000000 && rotate_mile[3] == 0) {
    rotate_mile[3] = 1;
    document.getElementById("rotate_3").style.color = "green";
    size_up = 500n;
  }
  if (rotate_egg >= 100000000 && rotate_mile[4] == 0) {
    rotate_mile[4] = 1;
    document.getElementById("rotate_4").style.color = "green";
    size_up = 500n;
  }
}
function stringify(nn) {
  let u = "";
  while (nn > 0n) {
    u += nn % 10n;
    nn /= 10n;
  }
  return u;
}
function read(name) {
  let u = 0n;
  for (let i = 0, j = 1n; i < name.length; i++, j *= 10n) {
    switch (name[i]) {
      case "1":
        u += j;
        break;
      case "2":
        u += j * 2n;
        break;
      case "3":
        u += j * 3n;
        break;
      case "4":
        u += j * 4n;
        break;
      case "5":
        u += j * 5n;
        break;
      case "6":
        u += j * 6n;
        break;
      case "7":
        u += j * 7n;
        break;
      case "8":
        u += j * 8n;
        break;
      case "9":
        u += j * 9n;
        break;
      case "0":
        break;
    }
  }
  return u;
}
//保存
setInterval(() => {
  localStorage.egg = stringify(egg);
  localStorage.ept = stringify(ept);
  localStorage.timee = stringify(timee);
  localStorage.eegg = stringify(eegg);
  localStorage.up_legg = stringify(up_legg);
  localStorage.egg_maker = stringify(egg_maker);
  localStorage.legg_maker = stringify(legg_maker);
  localStorage.egg_boost = stringify(egg_boost);
  localStorage.egg_size = stringify(egg_size);
  localStorage.size_up = stringify(size_up);
  localStorage.egg_up = JSON.stringify(egg_up);
  localStorage.reduce_egg_maker = stringify(reduce_egg_maker);
  localStorage.egg_pmm = JSON.stringify(egg_pmm);
  localStorage.egg_ene = JSON.stringify(egg_ene);
  localStorage.egg_enen = JSON.stringify(egg_enen);
  localStorage.rotate_egg = stringify(rotate_egg);
  localStorage.rotate_mile = JSON.stringify(rotate_mile);
  localStorage.egg_enene = JSON.stringify(egg_enene);
}, 3000);
//显示
setInterval(() => {
  timee++;
  ene_up();
  if (rotate_mile[3] == 1) rotate_egg += log(egg) * 20n;
  rotate_miles();
  if (egg_boost > 0n && egg_size < 18000n + rotate_egg * 2000n) {
    if (rotate_mile[0]) egg_size += egg_boost * 40n * 5n ** ctoB(egg_ene[1]);
    else egg_size += egg_boost;
  }
  ept =
    egg_maker *
    (1n + 2n * egg_boost * ctoB(egg_ene[3])) *
    up_legg ** legg_maker *
    2n *
    (egg_size / size_up + 1n) *
    egg_upgrade() *
    4n ** ctoB(egg_ene[4]);
  egg += ept;
  let u = document.getElementById("egg_show");
  u.innerText =
    "你的煎蛋数量为" +
    sshow(egg / 50n) +
    "，你每秒生产" +
    sshow(ept) +
    "个煎蛋";
  u = document.getElementById("egg_maker_show");
  if (legg_maker == 0)
    u.innerText =
      "你有" +
      egg_maker +
      "个煎蛋机，花费" +
      (((egg_maker % 10n) + 1n) * reduce_egg_maker) / 1000n +
      "煎蛋购买一个煎蛋机";
  else
    u.innerText =
      "你有" +
      egg_maker +
      "个煎蛋机，花费" +
      sshow(
        (((egg_maker % 10n) + 1n) *
          (1000n ** legg_maker * 10n) *
          reduce_egg_maker) /
          10000n,
      ) +
      "煎蛋购买一个煎蛋机";
  u = document.getElementById("egg_boost_show");
  if (egg_boost == 0)
    u.innerText =
      "你有" + egg_boost + "个煎蛋增幅，花费" + 100 + "煎蛋购买一个煎蛋增幅";
  else
    u.innerText =
      "你有" +
      egg_boost +
      "个煎蛋增幅，花费" +
      1 +
      "e" +
      (egg_boost * 2n + 2n) +
      "煎蛋购买一个煎蛋增幅";
  u = document.getElementById("gly");
  u.innerText =
    "煎蛋加成煎蛋获取,当前加成：x" + (log(egg / 50n) + 1n) + ",价格：1e4煎蛋";
  +",价格为";
  u = document.getElementById("ala");
  u.innerText = "你可以重置煎蛋以获取旋转煎蛋，价格：2e6煎蛋";
  u = document.getElementById("rotate_show");
  u.innerText =
    "你有" +
    sshow(rotate_egg) +
    "个旋转煎蛋，使煎蛋尺寸上限增加" +
    sshow(rotate_egg) +
    "，煎蛋尺寸增加速度增加x" +
    log(rotate_egg) +
    "，你的煎蛋尺寸为" +
    (egg_size / size_up + 1n) +
    "，使煎蛋获取x" +
    (egg_size / size_up + 1n);
  u = document.getElementById("rotate_re");
  u.innerText =
    "重置煎蛋数量以获得" +
    log(egg / 50n) * 3n ** ctoB(egg_ene[0]) +
    "个旋转煎蛋";
  u = document.getElementById("val");
  u.innerText = "游戏时间加成煎蛋获取，加成x" + log(timee) + ",费用2e8";
  u = document.getElementById("leu");
  u.innerText = "每购买十个煎蛋器的加成由2变为4" + ",费用5e9";
  u = document.getElementById("ile");
  u.innerText = "解锁煎蛋永动机" + ",费用5e12";
  u = document.getElementById("egg_pmm_show");
  u.innerText =
    "你的煎蛋永动机的功率为" +
    egg_pmm * (egg_ene[2] + 1) +
    ",煎蛋永动机可以制造能量";
  u = document.getElementById("egg_pmm_re");
  u.innerText = "基于旋转煎蛋，将煎蛋永动机的基础功率提升至" + log(rotate_egg);
  u = document.getElementById("egg_pmm_say1");
  if (egg_enene == 1 || egg_enene == 6) u.style.color = "rgb(57, 61, 117)";
  else u.style.color = "white";
  u.innerText =
    "使旋转煎蛋获取加快" +
    3 ** egg_ene[0] +
    "倍" +
    "," +
    (egg_ene[0] + 1) +
    "级,下一级需要" +
    (10 ** egg_ene[0] - egg_enen[0]).toFixed(2) +
    "能量";
  u = document.getElementById("egg_pmm_say2");
  if (egg_enene == 2 || egg_enene == 6) u.style.color = "rgb(57, 61, 117)";
  else u.style.color = "white";
  u.innerText =
    "使煎蛋尺寸获取加快" +
    5 ** egg_ene[1] +
    "倍" +
    "," +
    (egg_ene[1] + 1) +
    "级,下一级需要" +
    (10 ** egg_ene[1] - egg_enen[1]).toFixed(2) +
    "能量";
  u = document.getElementById("egg_pmm_say3");
  if (egg_enene == 3 || egg_enene == 6) u.style.color = "rgb(57, 61, 117)";
  else u.style.color = "white";
  u.innerText =
    "使功率提升" +
    3 ** egg_ene[2] +
    "倍" +
    "," +
    (egg_ene[2] + 1) +
    "级,下一级需要" +
    (10 ** egg_ene[2] - egg_enen[2]).toFixed(2) +
    "能量";
  u = document.getElementById("egg_pmm_say4");
  if (egg_enene == 4 || egg_enene == 6) u.style.color = "rgb(57, 61, 117)";
  else u.style.color = "white";
  u.innerText =
    "使煎蛋增幅数量增加" +
    (egg_ene[3] + 1) +
    "倍" +
    "," +
    (egg_ene[3] + 1) +
    "级,下一级需要" +
    (10 ** egg_ene[3] - egg_enen[3]).toFixed(2) +
    "能量";
  u = document.getElementById("egg_pmm_say5");
  if (egg_enene == 5 || egg_enene == 6) u.style.color = "rgb(57, 61, 117)";
  else u.style.color = "white";
  u.innerText =
    "使煎蛋速度加快" +
    4 ** egg_ene[0] +
    "倍" +
    "," +
    (egg_ene[4] + 1) +
    "级,下一级需要" +
    (10 ** egg_ene[4] - egg_enen[4]).toFixed(2) +
    "能量";
}, 20);
function egg_maker_buying() {
  if (
    egg >=
    (((egg_maker % 10n) + 1n) *
      (1000n ** legg_maker * 10n) *
      5n *
      reduce_egg_maker) /
      1000n
  ) {
    egg -=
      (((egg_maker % 10n) + 1n) *
        (1000n ** legg_maker * 10n) *
        5n *
        reduce_egg_maker) /
      1000n;
    egg_maker++;
    if (egg_maker % 10n == 0) legg_maker++;
  }
}
function egg_boost_buying() {
  if (egg >= 10n ** (egg_boost * 2n + 2n) * 50n) {
    egg -= 10n ** (egg_boost * 2n + 2n) * 50n;
    egg_boost++;
  }
}
function egg_upgrade_buying(u) {
  if (egg_upfee[u] * 50n <= egg && egg_up[u] == 0) {
    egg -= egg_upfee[u] * 50n;
    let p = document.getElementById("ep" + u);
    egg_up[u] = 1;
  }
}
function rotate_re() {
  rotate_egg += log(egg / 50n) * 3n ** ctoB(egg_ene[0]);
  if (rotate_mile[3] == 0) egg = 0n;
}
function egg_pmm_re() {
  if (Log(rotate_egg) > egg_pmm) egg_pmm = Log(rotate_egg);
}
function ene(u) {
  if (egg_enene != 6) egg_enene = u;
}
