function log(n)
{
  let r=0n;
  while (n)
  {
    n /= 10n;
    r++;
  }
  return r;
}
function sshow(n) {
    if (n < 1e4)
        return n;
    let p=0;
    while (n >= 1000)
    { 
        p++;
        n /= 10n;
    }
    let u = n % 100n;
    if(u<10)
        return n / 100n + ".0" + u + "e" + (p + 2);
    return n / 100n + "." + u + "e" + (p + 2);
}
let egg = 500n,
  ept = 0n,
  eegg = 0n,
  egg_maker = 0n,
  legg_maker = 0n,
  egg_boost = 0n,
  egg_size = 1n,
  size_up=2000n;
egg_up = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  mm = 0, reduce_egg_maker = 10000n;
    egg_upfee = [0, 10000n, 3000000n], rotate_egg = 0n,
  rotate_mile=[0,0,0,0,0];
function egg_upgrade(){
  let u = 1n;
  if (egg_up[1] == 1)
    u *= (log(egg/50n)+1n);
  if (egg_up[2] == 1 && mm == 0) {
    mm = 1;
    document.getElementById("rotate_egg").style.display = "block";
  }
  return u;
}
function rotate_miles()
{
  if (rotate_egg >= 1 && rotate_mile[0] == 0) {
    rotate_mile[0] = 1;
    document.getElementById("rotate_0").style.color = "green";
  }
  if (rotate_egg >= 1000 && rotate_mile[1]==0) {
    rotate_mile[1] = 1;
    document.getElementById("rotate_1").style.color = "green";
    reduce_egg_maker /=3n;
  }
  if (rotate_egg >= 10000 && rotate_mile[2] == 0) {
    rotate_mile[2] = 1;
    document.getElementById("rotate_2").style.color = "green";
    size_up=500n
  }
}
//显示
setInterval(() => {
  rotate_miles();
  if (egg_boost > 0n && egg_size<18000n+rotate_egg*2000n)
  {
    if(rotate_mile[0])
      egg_size += egg_boost * 40n;
    else
    egg_size += egg_boost ;
  }
  ept =egg_maker *(1n + 2n * egg_boost) *2n ** legg_maker *2n *((egg_size/size_up)+1n)*egg_upgrade();
  egg += ept;
  let u = document.getElementById("egg_show");
  u.innerText = "你的煎蛋数量为" + sshow(egg / 50n) + "，你每秒生产" + sshow(ept) + "个煎蛋";
  u = document.getElementById("egg_maker_show");
  if (legg_maker == 0)
    u.innerText =
      "你有" +
      egg_maker +
      "个煎蛋机，花费" +
      ((egg_maker % 10n) + 1n)*reduce_egg_maker/1000n +
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
  u.innerText="煎蛋加成煎蛋获取,当前加成：x"+(log(egg/50n)+1n)+",价格：1e4煎蛋";
  +",价格为"
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
    (egg_size/size_up  +
    1n) +
    "，使煎蛋获取x" +
    (egg_size / size_up +
      1n);  
  u = document.getElementById("rotate_re");
  u.innerText =
    "重置煎蛋数量以获得" + log(egg / 50n) + "个旋转煎蛋";
}, 20);
function egg_maker_buying() {
  if (egg >= ((egg_maker % 10n) + 1n) * (1000n ** legg_maker * 10n) * 5n*reduce_egg_maker/1000n ) {
    egg -=(((egg_maker % 10n) + 1n) *(1000n ** legg_maker * 10n) *5n *reduce_egg_maker) /1000n;
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
  if (egg_upfee[u] * 50n <= egg && egg_up[u]==0) {
    egg -= egg_upfee[u] * 50n;
    let p = document.getElementById("ep" + u);
    p.style.backgroundColor = "green";
    egg_up[u] = 1;
  }
} 
function rotate_re()
{
  rotate_egg += log(egg);
  egg = 0n;
}