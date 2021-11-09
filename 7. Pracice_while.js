// 예제 RPG게임 보스전

let Hero_HP = 10
const Hero_STR = 4
let Hero_ATK

let Boss_HP = 20
const Boss_STR = 2
let Boss_ATK

console.log('캐릭터가 보스몬스터를 조우합니다.')

while (true) {
    console.log('캐릭터가 보스몬스터를 공격합니다. 남은 보스 HP : ' + Boss_HP)
    let Hero_LUK = parseInt(Math.random()*2)
    Hero_ATK = Hero_STR*Hero_LUK
    Boss_HP = Boss_HP - Hero_ATK
    console.log(Hero_ATK + '의 피해를 줍니다. 남은 보스 HP : ' + Boss_HP)
    if (Boss_HP <= 0) {
        console.log("보스몬스터가 쓰러집니다. 캐릭터가 승리하였습니다.")
        break
    }
    console.log('보스몬스터가 캐릭터를 공격합니다. 남은 캐릭터 HP : ' + Hero_HP)
    let Boss_LUK = parseInt(Math.random()*2)
    Boss_ATK = Boss_STR*Boss_LUK
    Hero_HP = Hero_HP - Boss_ATK
    console.log(Hero_ATK + '의 피해를 받습니다. 남은 캐릭터 HP : ' + Hero_HP)
    if (Hero_HP <= 0) {
        console.log("캐릭터가 쓰러집니다. 마을로 귀환합니다.")
        break
    }

}
